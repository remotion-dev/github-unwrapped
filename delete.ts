import { getAwsClient, getOrCreateBucket, getRegions } from "@remotion/lambda";
import dotenv from "dotenv";
import pLimit from "p-limit";
import { getAccountCount } from "./src/helpers/get-account-count";
import { setEnvForKey } from "./src/helpers/set-env-for-key";

dotenv.config();

const count = getAccountCount();
console.log(`Found ${count} accounts. Deploying...`);

const limit = pLimit(7);

for (let i = 2; i <= count; i++) {
  for (const region of getRegions()) {
    setEnvForKey(i);
    const { bucketName } = await getOrCreateBucket({ region });
    const { sdk, client } = getAwsClient({ region, service: "s3" });
    const results = [];

    let contToken: string | undefined;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const res = await client.send(
        new sdk.ListObjectsV2Command({
          Bucket: bucketName,
          Prefix: "renders",
          ContinuationToken: contToken,
        }),
      );
      results.push(...(res.Contents ?? []));
      console.log(
        "Found",
        results.length,
        "objects in",
        bucketName,
        "in",
        region,
        "for account",
        i,
      );
      if (!res.NextContinuationToken) {
        break;
      }

      contToken = res.NextContinuationToken;
    }

    let deleted = 0;

    await Promise.all(
      results?.map((c) => {
        return limit(() =>
          client
            .send(
              new sdk.DeleteObjectCommand({
                Key: c.Key as string,
                Bucket: bucketName,
              }),
            )
            .then(() => {
              console.log(
                `((${++deleted}/${results.length}) Deleted ${
                  c.Key
                } in ${bucketName} (region)${region} for account ${i}`,
              );
            }),
        );
      }) ?? [],
    );
  }
}
