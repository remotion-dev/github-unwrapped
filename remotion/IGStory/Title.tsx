import { Img } from "remotion";
import { PANE_TEXT_COLOR } from "../TopLanguages/Pane";

export const Title: React.FC<{
  login: string;
}> = ({ login }) => {
  return (
    <div
      style={{
        fontSize: 40,
        fontFamily: "Mona Sans",
        fontWeight: "bold",
        color: PANE_TEXT_COLOR,
        textAlign: "center",
        width: "100%",
        borderBottom: `1px solid rgb(183, 171, 239)`,
        paddingBottom: 30,
        paddingTop: 30,
        flexDirection: "row",
        display: "flex",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img
        src={`https://github.com/${login}.png`}
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          boxShadow: "0 4px 16px 8px rgba(0,0,0,0.1)",
        }}
      />
      <div>{login}</div>
    </div>
  );
};
