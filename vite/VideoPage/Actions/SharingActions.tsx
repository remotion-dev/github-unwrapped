import { Link } from "@tanstack/react-router";
import { InstagramIcon } from "../../../icons/InstagramIcon";
import { LinkedInIcon } from "../../../icons/LinkedInIcon";
import { XIcon } from "../../../icons/XIcon";
import { userRoute, videoRoute } from "../../routing";
import { SharingAction } from "./SharingAction";
import styles from "./styles.module.css";

export const twitterSharingLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  "This is my #GitHubUnwrapped! Get your own: https://githubunwrapped.com",
)}`;

export const linkedInSharingLink = "https://www.linkedin.com/";

export const SharingActions: React.FC<{}> = () => {
  const { username } = userRoute.useParams();
  return (
    <div className={styles.sharingActionsWrapper}>
      <Link
        target="_blank"
        from={userRoute.id}
        to={"share"}
        params={() => {
          return { username };
        }}
        search={{ platform: "twitter" }}
      >
        <SharingAction
          icon={(params) => <XIcon {...params} />}
          label={"Post #GitHubUnwrapped"}
          style={{ width: "100%", justifyContent: "flex-start", padding: 0 }}
        />
      </Link>
      <Link
        target="_blank"
        from={videoRoute.id}
        to={"share"}
        params={{ username }}
        search={{ platform: "linkedin" }}
      >
        <SharingAction
          icon={(params) => <LinkedInIcon {...params} />}
          label="Share on LinkedIn"
          style={{ width: "100%", justifyContent: "flex-start", padding: 0 }}
        />
      </Link>
      <a href={`/ig/${username}.jpg`}>
        <SharingAction
          icon={(params) => <InstagramIcon {...params} />}
          label="Download story (image)"
          style={{ width: "100%", justifyContent: "flex-start", padding: 0 }}
        />
      </a>
    </div>
  );
};
