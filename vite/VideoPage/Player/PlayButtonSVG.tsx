import { PANE_BACKGROUND } from "../../../remotion/TopLanguages/Pane";

export const PlayButtonSVG: React.FC<{
  disabled: boolean;
}> = ({ disabled }) => {
  return (
    <div
      style={{
        opacity: disabled ? 0.5 : 1,
        width: 160,
        height: 160,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        padding: 20,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            background: PANE_BACKGROUND,
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <svg
            style={{
              width: 55,
              marginLeft: 10,
            }}
            viewBox="0 0 384 512"
          >
            <path
              fill={"white"}
              d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
