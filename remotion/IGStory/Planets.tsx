import type { TopLanguage } from "../../src/config";
import { LanguagePlanet } from "../TopLanguages/Language";
import { PANE_TEXT_COLOR } from "../TopLanguages/Pane";
import { computePlanetInfo } from "../TopLanguages/constants";

export const Planets: React.FC<{
  topLanguage: TopLanguage;
}> = ({ topLanguage }) => {
  const planetInfo = computePlanetInfo(topLanguage);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 30,
        flexDirection: "row",
        overflow: "hidden",
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottom: `1px solid rgb(183, 171, 239)`,
      }}
    >
      <LanguagePlanet
        planetInfo={planetInfo}
        style={{
          height: 100,
          marginBottom: 10,
          flexShrink: 0,
        }}
      />
      <div style={{ width: 30 }} />
      <div>
        <div
          style={{
            color: PANE_TEXT_COLOR,
            fontFamily: "Mona Sans",
            fontSize: 18,
            marginBottom: 6,
            fontWeight: 500,
          }}
        >
          Top Language
        </div>
        <div
          style={{
            fontFamily: "Mona Sans",
            color: PANE_TEXT_COLOR,
            fontSize: 30,
            fontWeight: "bold",
            whiteSpace: "nowrap",
            wordBreak: "break-word",
            textOverflow: "ellipsis",
            width: "100%",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {planetInfo.name}
        </div>
      </div>
    </div>
  );
};
