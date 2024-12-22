import { Link } from "@tanstack/react-router";
import { FaUserCircle } from "react-icons/fa";
import { PrivateContributionsIcon } from "../../../icons/PrivateContributionsIcon";
import { signInWithGitHubLink } from "../../sign-in-with-github";
import { FurtherAction } from "./FurtherAction";
import styles from "./styles.module.css";

export const FurtherActions: React.FC = () => {
  if (window.__USER__ === "not-found") {
    return;
  }

  return (
    <div className={styles.furtherActionsWrapper}>
      <div className={styles.furtherActionsButtonContainer}>
        <Link to="/">
          <FurtherAction
            icon={(params) => <FaUserCircle {...params} width={15} />}
            label="Unwrap another user"
          />
        </Link>
        {window.__USER__!.loggedInWithGitHub ? null : (
          <a href={signInWithGitHubLink()}>
            <FurtherAction
              icon={(params) => (
                <PrivateContributionsIcon {...params} width={18} />
              )}
              label="Unlock private metrics"
            />
          </a>
        )}
      </div>
    </div>
  );
};
