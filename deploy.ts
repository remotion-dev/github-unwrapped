import {
  deployFunction,
  deploySite,
  getOrCreateBucket,
} from "@remotion/lambda";
import dotenv from "dotenv";
import path from "path";
import { getAccountCount } from "./src/get-account-count";
import { usedRegions } from "./src/regions";
import { setEnvForKey } from "./src/set-env-for-key";
dotenv.config();

const count = getAccountCount();
console.log(`Found ${count} accounts. Deploying...`);

const execute = async () => {
  for (let i = 1; i <= count; i++) {
    for (const region of usedRegions) {
      setEnvForKey(i);
      const { functionName } = await deployFunction({
        architecture: "arm64",
        createCloudWatchLogGroup: true,
        memorySizeInMb: 2048,
        timeoutInSeconds: 240,
        region,
      });
      console.log(
        `Deployed function "${functionName}" to ${region} in account ${i}`
      );
      const { bucketName } = await getOrCreateBucket({ region });
      const { serveUrl } = await deploySite({
        siteName: "unwrapped",
        bucketName,
        entryPoint: path.join(process.cwd(), "remotion/index.tsx"),
        region,
      });
      console.log(
        `Deployed site to ${region} in account ${i} under ${serveUrl}`
      );
    }
  }
};

execute()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
