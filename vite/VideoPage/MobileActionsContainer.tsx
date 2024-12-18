import { useNavigate } from "@tanstack/react-router";
import React, { useCallback } from "react";
import { InstagramIcon } from "../../icons/InstagramIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { Button } from "../Button/Button";
import { useUserVideo } from "../context";
import { shareRoute, videoRoute } from "../routing";
import { FurtherActions } from "./Actions/FurtherActions";
import { SharingAction } from "./Actions/SharingAction";
import { DownloadButton } from "./Sidebar/DownloadButton";
import styles from "./styles.module.css";
import type { RenderStatus } from "./useVideo";

const getRenderDescription = (status: RenderStatus) => {
  switch (status.type) {
    case "querying":
      return <div>Initializing Render...</div>;
    case "render-running":
      return (
        <div>{`Generating Video... (${Math.floor(
          status.progress * 100,
        )}%)`}</div>
      );
    case "error-querying":
      return <div>An error occured</div>;
    case "video-available":
      return null;
    default:
      return null;
  }
};

export const MobileActionsContainer: React.FC = () => {
  const navigate = useNavigate({ from: videoRoute.id });

  const { username } = videoRoute.useParams();
  const { status } = useUserVideo();

  // const status: {
  //   type: "render-running";
  //   renderId: string;
  //   progress: number;
  // } = {
  //   type: "render-running",
  //   renderId: "",
  //   progress: 0.47,
  // };

  const goToFallbackSharePage = useCallback(() => {
    navigate({
      to: shareRoute.id,
      params: { username },
      search: {
        platform: undefined,
      },
    });
  }, [navigate, username]);

  return (
    <div className={styles.mobileActionsContainer}>
      {status.type === "video-available" && <FurtherActions />}

      {getRenderDescription(status)}

      <div style={{ display: "flex", gap: 16 }}>
        <DownloadButton style={{ flex: 3 }} />
        <Button
          disabled={status.type !== "video-available"}
          hoverEffect
          style={{ flex: 1, gap: 8 }}
          onClick={goToFallbackSharePage}
        >
          <ShareIcon width={20} color="white" />
        </Button>
      </div>
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
