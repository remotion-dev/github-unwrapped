import React from "react";
import { DownloadIcon } from "../../../icons/DownloadIcon";
import { YEAR_TO_REVIEW } from "../../../src/helpers/year";
import { Button } from "../../Button/Button";
import { useUserVideo } from "../../context";
import shadow from "./shadow.module.css";
import styles from "./styles.module.css";

export const DownloadButton: React.FC<{
  readonly style?: React.CSSProperties;
  readonly className?: string;
}> = ({ style, ...props }) => {
  const { status } = useUserVideo();

  const classNames = [styles.downloadButton];

  if (props.className) {
    classNames.push(props.className);
  }

  if (status.type === "querying") {
    return (
      <Button
        className={classNames.join(" ")}
        style={{ pointerEvents: "none", ...style }}
      >
        <div
          style={{
            width: 100,
            height: 16,
            backgroundColor: "rgba(255, 255,255, 0.2)",
          }}
        />{" "}
      </Button>
    );
  }

  if (status.type === "render-error") {
    return (
      <Button
        className={classNames.join(" ")}
        style={{ pointerEvents: "none", ...style }}
      >
        Download unavailable
      </Button>
    );
  }

  if (status.type === "error-querying") {
    return (
      <Button
        className={classNames.join(" ")}
        style={{ pointerEvents: "none", ...style }}
      >
        Could not get video status
      </Button>
    );
  }

  if (status.type === "video-available") {
    return (
      <a
        type="button"
        className={[shadow.newdownload].join(" ")}
        style={{ ...style }}
        href={status.url}
        download={`github-unwrapped-${YEAR_TO_REVIEW}.mp4`}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            position: "absolute",
            inset: 0,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            color: "var(--pane-text)",
          }}
        >
          <DownloadIcon />
          <div
            style={{
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Download
          </div>
        </div>
      </a>
    );
  }

  return (
    <Button
      className={[...classNames, styles.loadingButton].join(" ")}
      style={{ pointerEvents: "none", ...style }}
    >
      <div
        className={styles.loadingButtonBar}
        style={{ width: `${status.progress * 100}%`, zIndex: -1 }}
      />
      {status.progress > 0 ? (
        <div>Generating video ({Math.round(status.progress * 100)}%)</div>
      ) : (
        <div>Generating video</div>
      )}
    </Button>
  );
};
