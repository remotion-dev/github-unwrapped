import { Composition, Folder, Still } from "remotion";
import { LanguagesEnum, compositionSchema, ogImageSchema } from "../src/config";
import { SAMPLE_STARRED_REPOS } from "../src/server/random-sample-repos";
import {
  TOP_LANGUAGES_DURATION,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { Stars } from "../vite/Home/Stars";
import { ContributionsScene } from "./Contributions";
import { jonnysContributions } from "./Contributions/jonnys-contributions";
import { END_SCENE_DURATION, EndScene, endSceneSchema } from "./EndScene";
import { CallToAction } from "./EndScene/CallToAction";
import { NativeGradient } from "./Gradients/NativeGradient";
import type { GradientType } from "./Gradients/available-gradients";
import { availableGradients } from "./Gradients/available-gradients";
import { IgStory, IgStoryContent } from "./IGStory";
import { Issues, calculateIssueDuration, issuesSchema } from "./Issues";
import { FPS } from "./Issues/make-ufo-positions";
import { Main, mainCalculateMetadataScene } from "./Main";
import { Noise, noiseSchema } from "./Noise";
import { OgImageContent } from "./OgImage";
import { OPENING_SCENE_LENGTH, OpeningScene } from "./Opening";
import { OpeningTitle } from "./Opening/Title";
import { openingTitleSchema } from "./Opening/TitleImage";
import { PinkHighlight } from "./PinkHighlight";
import { Poof } from "./Poof";
import { Productivity } from "./Productivity/Productivity";
import { Tablet, tableSchema } from "./Productivity/Tablet";
import { TopDay, topDaySchema } from "./Productivity/TopDay";
import { Wheel } from "./Productivity/Wheel";
import { GRAPH_DATA } from "./Productivity/constants";
import { PromoVideo, promoVideoSchema } from "./PromoVideo";
import { Planets } from "./PromoVideo/Planets";
import { PromoGif } from "./PromoVideo/PromoGif";
import { PATHS_COMP_HEIGHT } from "./PullRequests/Path";
import {
  PULL_REQUESTS_DURATION,
  PullRequests,
  pullRequestsSchema,
} from "./PullRequests/PullRequests";
import { WholePaths } from "./PullRequests/WholePaths";
import {
  SevenSegment,
  sevenSegmentSchema,
} from "./SevenSegment/SevenSegmentNumber";
import { SponsorshipsScene } from "./Sponsorships";
import { StarSprite } from "./StarSprite";
import {
  StarsAndProductivity,
  starsAndProductivityCalculateMetadata,
} from "./StarsAndProductivity";
import {
  StarsGiven,
  starsGivenCalculateMetadata,
  starsGivenSchema,
} from "./StarsGiven";
import { Shine, Shines, shineSchema } from "./StarsGiven/Shines";
import { TopLanguagesCanvas, topLanguagesSchema } from "./TopLanguages";
import {
  AllPlanets,
  FIRST_PLACE_DURATION,
  allPlanetsSchema,
  getDurationOfAllPlanets,
} from "./TopLanguages/AllPlanets";
import { FloatingOctocat } from "./TopLanguages/FloatingOctocat";
import {
  PlanetScaleWiggle,
  wiggleSchema,
} from "./TopLanguages/PlaneScaleWiggle";
import { PlanetScaleOut, zoomOutSchema } from "./TopLanguages/PlanetScaleOut";
import {
  PlanetScaleSpiral,
  spiralSchema,
} from "./TopLanguages/PlanetScaleSpiral";
import { PlanetScaleSpiralWhole } from "./TopLanguages/PlanetScaleSpiralWhole";
import {
  TopLanguagesTitleCard,
  topLanguagesTitleCardSchema,
} from "./TopLanguages/TitleCard";
import { WhiteHighlight } from "./WhiteHighlight";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="EndScene">
        <Composition
          id={"EndScene"}
          component={EndScene}
          durationInFrames={END_SCENE_DURATION}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={endSceneSchema}
          defaultProps={{
            rocket: "blue",
            planet: "Ice",
          }}
        />
        <Composition
          id="CallToAction"
          component={CallToAction}
          durationInFrames={12 * 30}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          defaultProps={{
            enterProgress: 1,
            exitProgress: 1,
            planet: "Ice",
          }}
        />
      </Folder>
      <Composition
        id={"Opening"}
        component={OpeningScene}
        durationInFrames={OPENING_SCENE_LENGTH}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        schema={openingTitleSchema}
        defaultProps={{
          login: "JonnyBurger",
          startAngle: "left",
          rocket: "blue",
        }}
      />
      <Composition
        id={"OpeningTitle"}
        component={OpeningTitle}
        durationInFrames={OPENING_SCENE_LENGTH}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{
          login: "JonnyBurger",
          exitProgress: 0,
          startAngle: "left",
          rocket: "blue",
        }}
      />
      <Composition
        id={"Sponsorships"}
        component={SponsorshipsScene}
        durationInFrames={12 * 30}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{}}
      />
      <Composition
        id={"ContributionsScene2"}
        component={ContributionsScene}
        durationInFrames={END_SCENE_DURATION}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{
          username: "JonnyBurger",
          longestStreak: 90,
          total: 300,
          rocket: "blue",
          planet: "Ice",
          contributionData: jonnysContributions,
        }}
      />

      <Folder name="Issues">
        <Composition
          id={"Issues0-0"}
          component={Issues}
          durationInFrames={16 * 30}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={issuesSchema}
          calculateMetadata={calculateIssueDuration}
          defaultProps={{ closedIssues: 0, openIssues: 0, rocket: "orange" }}
        />
        <Composition
          id={"Issues2-0"}
          component={Issues}
          durationInFrames={19 * 30}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={issuesSchema}
          calculateMetadata={calculateIssueDuration}
          defaultProps={{ closedIssues: 2, openIssues: 0, rocket: "blue" }}
        />
        <Composition
          id={"Issues20-15"}
          component={Issues}
          durationInFrames={16 * 30}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={issuesSchema}
          calculateMetadata={calculateIssueDuration}
          defaultProps={{ closedIssues: 20, openIssues: 15, rocket: "orange" }}
        />
        <Composition
          id={"Issues80-20"}
          component={Issues}
          durationInFrames={16 * 30}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={issuesSchema}
          calculateMetadata={calculateIssueDuration}
          defaultProps={{ closedIssues: 80, openIssues: 20, rocket: "yellow" }}
        />
        <Composition
          id={"Issues500-500"}
          component={Issues}
          durationInFrames={16 * 30}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={issuesSchema}
          calculateMetadata={calculateIssueDuration}
          defaultProps={{
            closedIssues: 3000,
            openIssues: 2000,
            rocket: "blue",
          }}
        />
      </Folder>
      <Composition
        id={"Issues"}
        component={Issues}
        durationInFrames={12 * 30}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        schema={issuesSchema}
        calculateMetadata={calculateIssueDuration}
        defaultProps={{ closedIssues: 75, openIssues: 0, rocket: "blue" }}
      />

      <Composition
        id={"Poof"}
        component={Poof}
        durationInFrames={40}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{
          ufoScale: 1,
          x: 0,
          y: 0,
        }}
      />
      <Composition
        id={"StarSprite"}
        component={StarSprite}
        durationInFrames={40}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{
          transitionDuration: 30,
          burstFrame: 30,
        }}
      />
      <Composition
        id={"StarsAndProductivity"}
        component={StarsAndProductivity}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        schema={starsGivenSchema}
        defaultProps={{
          starsGiven: 10,
          showCockpit: true,
          topWeekday: "3",
          topHour: "0",
          graphData: GRAPH_DATA,
          totalPullRequests: 614,
          login: "JonnyBurger",
          sampleStarredRepos: SAMPLE_STARRED_REPOS,
        }}
        calculateMetadata={starsAndProductivityCalculateMetadata}
      />
      <Composition
        id={"Productivity"}
        component={Productivity}
        durationInFrames={10 * VIDEO_FPS}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{
          graphData: GRAPH_DATA,
          weekday: "4",
          hour: "4",
        }}
      />
      <Composition
        id="Wheel"
        component={Wheel}
        durationInFrames={100}
        fps={FPS}
        height={500}
        width={500}
        schema={topDaySchema}
        defaultProps={{
          value: "6",
          values: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          radius: 90,
          label: "Most productive day",
          renderLabel: (value) => value,
          delay: 30,
          soundDelay: 60,
        }}
      />
      <Composition
        id="TopDay"
        component={TopDay}
        durationInFrames={100}
        fps={FPS}
        height={200}
        width={1080}
        schema={topDaySchema}
        defaultProps={{
          value: "1",
          values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          label: "Most productive day",
          radius: 90,
          renderLabel: (value) => value,
          delay: 30,
          soundDelay: 60,
        }}
      />
      <Composition
        id={"Tablet"}
        component={Tablet}
        durationInFrames={10 * VIDEO_FPS}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        schema={tableSchema}
        defaultProps={{
          graphData: GRAPH_DATA,
          enterProgress: 0,
          weekday: "6",
          hour: "0",
        }}
      />
      <Composition
        id={"SevenSegment"}
        component={SevenSegment}
        durationInFrames={40}
        fps={VIDEO_FPS}
        schema={sevenSegmentSchema}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{ num: 15, fontSize: 100, max: null }}
      />
      <Folder name="PullRequests">
        <Composition
          id="WholePaths"
          component={WholePaths}
          fps={30}
          durationInFrames={250}
          height={PATHS_COMP_HEIGHT}
          width={1080}
          defaultProps={{
            extraPaths: 8,
            initialPullRequests: 0,
          }}
        />
        <Composition
          id="PullRequests"
          component={PullRequests}
          fps={30}
          durationInFrames={PULL_REQUESTS_DURATION}
          height={1080}
          width={1080}
          schema={pullRequestsSchema}
          defaultProps={{
            totalPullRequests: 614,
          }}
        />
      </Folder>
      <Folder name="TopLanguages">
        <Composition
          id={"TopLanguagesTitleCard"}
          component={TopLanguagesTitleCard}
          durationInFrames={TOP_LANGUAGES_DURATION}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={topLanguagesTitleCardSchema}
          defaultProps={{
            randomizePlanetSeed: "randomizePlanetSeed",
            pluralizeLanguages: false,
            rocket: "blue",
            randomizeOctocatSeed: 0.4,
          }}
        />
        <Composition
          id={"TopLanguagesCanvas"}
          component={TopLanguagesCanvas}
          schema={topLanguagesSchema}
          durationInFrames={TOP_LANGUAGES_DURATION}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH * 2}
          height={VIDEO_HEIGHT * 2}
          defaultProps={{
            first: LanguagesEnum.enum.JavaScript,
            second: LanguagesEnum.enum.Python,
            third: LanguagesEnum.enum.Java,
            rocket: "orange",
          }}
        />

        <Composition
          id={"TopLanguagesZoomOut"}
          component={PlanetScaleOut}
          durationInFrames={150}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={zoomOutSchema}
          defaultProps={{
            corner: "top-right" as const,
            language: {
              type: "designed" as const,
              name: "JavaScript",
              percent: 0.3,
            },
            position: 1,
            rocket: "orange",
          }}
        />
        <Composition
          id="TopLanguagesWiggle"
          component={PlanetScaleWiggle}
          schema={wiggleSchema}
          durationInFrames={FIRST_PLACE_DURATION}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          defaultProps={{
            rocket: "blue",
            position: 1,
            language: {
              type: "other",
              name: "Scala",
              color: "#C22D40",
              percent: 0.3,
            },
            enterDirection: "right-counter-clockwise" as const,
          }}
        />
        <Composition
          id={"PlanetSpiralWhole"}
          component={PlanetScaleSpiralWhole}
          schema={spiralSchema}
          durationInFrames={150}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          defaultProps={{
            language: {
              type: "designed" as const,
              name: "Java" as const,
              percent: 0.4,
            },
            showHelperLine: false,
            corner: "bottom-right",
            position: 1,
            startRotationInRadians: 0,
            clockDirection: "clockwise",
            rocket: "blue",
          }}
        />
        <Composition
          id={"TopLanguagesSpiral"}
          component={PlanetScaleSpiral}
          schema={spiralSchema}
          durationInFrames={150}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          defaultProps={{
            language: { type: "designed", name: "Java", percent: 0.3 },
            showHelperLine: false,
            corner: "bottom-right",
            position: 1,
            rocket: "orange",
          }}
        />
        <Composition
          id={"FloatingOctocat"}
          component={FloatingOctocat}
          durationInFrames={150}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          defaultProps={{}}
        />
        <Composition
          id={"AllPlanets"}
          component={AllPlanets}
          schema={allPlanetsSchema}
          durationInFrames={500}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          calculateMetadata={({ props: { topLanguages } }) => {
            return {
              durationInFrames: getDurationOfAllPlanets({
                topLanguages,
                fps: VIDEO_FPS,
              }),
            };
          }}
          defaultProps={{
            corner: "top-right" as const,
            topLanguages: {
              language1: {
                type: "designed" as const,
                name: "C++" as const,
                percent: 0.4,
              },
              language2: {
                type: "designed" as const,
                name: "Go" as const,
                percent: 0.3,
              },
              language3: {
                type: "designed" as const,
                name: "Ruby" as const,
                percent: 0.2,
              },
            },
            showHelperLine: false,
            login: "JonnyBurger",
            rocket: "blue",
            octocatSeed: 0.4,
          }}
        />
      </Folder>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={60 * 30}
        fps={FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        schema={compositionSchema}
        calculateMetadata={mainCalculateMetadataScene}
        defaultProps={{
          login: "JonnyBurger",
          corner: "bottom-left",
          topLanguages: {
            language1: {
              type: "designed",
              name: "TypeScript",
              percent: 0.6348066751851184,
            },
            language2: {
              type: "other",
              color: "#fcb32c",
              name: "MDX",
              percent: 0.3204561738200702,
            },
            language3: {
              type: "designed",
              name: "JavaScript",
              percent: 0.03752374246343604,
            },
          },
          showHelperLine: false,
          planet: "Gold",
          starsGiven: 9,
          issuesClosed: 195,
          issuesOpened: 39,
          totalPullRequests: 873,
          topWeekday: "4",
          totalContributions: 9489,
          topHour: "10",
          graphData: [
            {
              productivity: 0,
              time: 0,
            },
            {
              productivity: 0,
              time: 1,
            },
            {
              productivity: 0,
              time: 2,
            },
            {
              productivity: 0,
              time: 3,
            },
            {
              productivity: 0,
              time: 4,
            },
            {
              productivity: 0,
              time: 5,
            },
            {
              productivity: 0,
              time: 6,
            },
            {
              productivity: 4,
              time: 7,
            },
            {
              productivity: 13,
              time: 8,
            },
            {
              productivity: 20,
              time: 9,
            },
            {
              productivity: 42,
              time: 10,
            },
            {
              productivity: 38,
              time: 11,
            },
            {
              productivity: 20,
              time: 12,
            },
            {
              productivity: 14,
              time: 13,
            },
            {
              productivity: 36,
              time: 14,
            },
            {
              productivity: 32,
              time: 15,
            },
            {
              productivity: 32,
              time: 16,
            },
            {
              productivity: 18,
              time: 17,
            },
            {
              productivity: 20,
              time: 18,
            },
            {
              productivity: 7,
              time: 19,
            },
            {
              productivity: 4,
              time: 20,
            },
            {
              productivity: 0,
              time: 21,
            },
            {
              productivity: 0,
              time: 22,
            },
            {
              productivity: 0,
              time: 23,
            },
          ],
          openingSceneStartAngle: "right",
          rocket: "yellow",
          contributionData: [
            3, 0, 0, 0, 6, 53, 48, 52, 36, 33, 5, 28, 17, 0, 53, 30, 37, 40, 37,
            40, 65, 27, 74, 36, 46, 37, 0, 12, 39, 34, 58, 30, 11, 0, 50, 49,
            36, 27, 36, 6, 18, 6, 39, 15, 27, 54, 32, 19, 52, 52, 10, 54, 38,
            22, 0, 0, 30, 34, 22, 18, 25, 1, 0, 0, 33, 29, 18, 41, 11, 7, 44,
            37, 12, 15, 8, 9, 2, 35, 37, 12, 26, 89, 15, 22, 9, 98, 47, 23, 7,
            22, 11, 19, 30, 48, 35, 60, 1, 27, 36, 28, 49, 45, 121, 0, 42, 116,
            101, 50, 56, 35, 48, 50, 70, 62, 31, 34, 43, 93, 27, 17, 39, 18, 70,
            33, 28, 37, 24, 37, 77, 23, 54, 40, 4, 6, 16, 13, 16, 25, 64, 16,
            17, 17, 64, 29, 27, 9, 38, 29, 71, 129, 38, 89, 0, 10, 36, 32, 26,
            37, 49, 13, 0, 14, 49, 24, 21, 27, 7, 13, 36, 28, 24, 36, 31, 8, 28,
            51, 56, 10, 0, 0, 0, 0, 7, 2, 0, 5, 4, 0, 2, 10, 32, 27, 0, 0, 0, 0,
            17, 25, 32, 11, 9, 3, 33, 45, 23, 47, 28, 38, 19, 15, 19, 27, 17, 6,
            45, 25, 6, 47, 35, 25, 24, 29, 7, 10, 32, 32, 29, 43, 22, 3, 8, 18,
            55, 12, 18, 8, 0, 20, 21, 31, 18, 10, 2, 30, 23, 47, 39, 30, 33, 50,
            31, 0, 22, 18, 22, 0, 6, 0, 0, 13, 13, 9, 6, 3, 0, 0, 14, 0, 8, 47,
            267, 21, 8, 15, 23, 50, 52, 63, 0, 0, 22, 39, 32, 26, 50, 29, 10,
            85, 25, 3, 13, 6, 0, 0, 5, 2, 38, 5, 2, 5, 1, 7, 34, 33, 23, 37, 58,
            16, 30, 22, 45, 59, 40, 0, 21, 24, 24, 22, 12, 15, 3, 0, 8, 66, 14,
            48, 33, 6, 12, 25, 18, 10, 16, 40, 33, 1, 50, 33, 28, 36, 42, 9, 0,
            47, 10, 32, 45, 31, 4, 32, 8, 10, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0,
          ],
          sampleStarredRepos: [
            {
              name: "remotion-templates",
              author: "reactvideoeditor",
            },
            {
              name: "react-scan",
              author: "aidenybai",
            },
            {
              name: "mp4-muxer",
              author: "Vanilagy",
            },
            {
              name: "core",
              author: "diffusionstudio",
            },
            {
              name: "ladybird",
              author: "LadybirdBrowser",
            },
            {
              name: "remotion-bar-race-chart",
              author: "hylarucoder",
            },
            {
              name: "mp4-h264-re-encode",
              author: "vjeux",
            },
            {
              name: "seamless-aac-split-and-stitch-demo",
              author: "wistia",
            },
            {
              name: "analyzer-public",
              author: "vtclab",
            },
          ],
          longestStreak: 48,
        }}
      />
      <Composition
        id="Stars"
        component={Stars}
        durationInFrames={10 * 30}
        fps={FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
      <Composition
        id="Noise"
        component={Noise}
        durationInFrames={10 * 30}
        fps={FPS}
        schema={noiseSchema}
        defaultProps={{
          translateX: 0,
          translateY: 0,
        }}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
      <Folder name="Gradients">
        {Object.keys(availableGradients).map((gradient) => {
          return (
            <Still
              key={gradient}
              id={`Gradients-${gradient}`}
              component={NativeGradient}
              width={VIDEO_WIDTH}
              height={VIDEO_HEIGHT}
              defaultProps={{
                gradient: gradient as GradientType,
              }}
            />
          );
        })}
      </Folder>
      <Folder name="StarsGiven">
        <Composition
          id="shine"
          component={Shine}
          fps={30}
          durationInFrames={100}
          height={1080}
          width={1080}
          schema={shineSchema}
          defaultProps={{
            rotation: 0.1,
            showHelpers: false,
          }}
        />
        <Composition
          id="shines"
          component={Shines}
          fps={30}
          durationInFrames={100}
          height={1080}
          width={1080}
          defaultProps={{
            rotationShake: 0,
            xShake: 0,
            yShake: 0,
          }}
        />
        <Composition
          id={"StarsGiven0"}
          component={StarsGiven}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={starsGivenSchema}
          defaultProps={{
            timeUntilTabletHides: 200,
            starsGiven: 9,
            showCockpit: true,
            topWeekday: "1" as const,
            topHour: "0" as const,
            graphData: [
              { productivity: 0, time: 0 },
              { productivity: 0, time: 1 },
              { productivity: 0, time: 2 },
              { productivity: 0, time: 3 },
              { productivity: 0, time: 4 },
              { productivity: 0, time: 5 },
              { productivity: 0, time: 6 },
              { productivity: 5, time: 7 },
              { productivity: 29, time: 8 },
              { productivity: 49, time: 9 },
              { productivity: 58, time: 10 },
              { productivity: 49, time: 11 },
              { productivity: 17, time: 12 },
              { productivity: 48, time: 13 },
              { productivity: 43, time: 14 },
              { productivity: 54, time: 15 },
              { productivity: 33, time: 16 },
              { productivity: 52, time: 17 },
              { productivity: 35, time: 18 },
              { productivity: 12, time: 19 },
              { productivity: 9, time: 20 },
              { productivity: 5, time: 21 },
              { productivity: 2, time: 22 },
              { productivity: 0, time: 23 },
            ],
            totalPullRequests: 614,
            login: "JonnyBurger",
            sampleStarredRepos: SAMPLE_STARRED_REPOS,
            timeUntilTabletHasEntered: 200,
          }}
          calculateMetadata={starsGivenCalculateMetadata}
        />
        <Composition
          id={"StarsGiven5"}
          component={StarsGiven}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={starsGivenSchema}
          defaultProps={{
            starsGiven: 504,
            showCockpit: true,
            topWeekday: "1" as const,
            topHour: "0" as const,
            graphData: [
              { productivity: 0, time: 0 },
              { productivity: 0, time: 1 },
              { productivity: 0, time: 2 },
              { productivity: 0, time: 3 },
              { productivity: 0, time: 4 },
              { productivity: 0, time: 5 },
              { productivity: 0, time: 6 },
              { productivity: 5, time: 7 },
              { productivity: 29, time: 8 },
              { productivity: 49, time: 9 },
              { productivity: 58, time: 10 },
              { productivity: 49, time: 11 },
              { productivity: 17, time: 12 },
              { productivity: 48, time: 13 },
              { productivity: 43, time: 14 },
              { productivity: 54, time: 15 },
              { productivity: 33, time: 16 },
              { productivity: 52, time: 17 },
              { productivity: 35, time: 18 },
              { productivity: 12, time: 19 },
              { productivity: 9, time: 20 },
              { productivity: 5, time: 21 },
              { productivity: 2, time: 22 },
              { productivity: 0, time: 23 },
            ],
            totalPullRequests: 614,
            login: "JonnyBurger",
            sampleStarredRepos: SAMPLE_STARRED_REPOS,
            timeUntilTabletHasEntered: 200,
            timeUntilTabletHides: 200,
          }}
          calculateMetadata={starsGivenCalculateMetadata}
        />
        <Composition
          id={"StarsGiven50"}
          component={StarsGiven}
          fps={VIDEO_FPS}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          schema={starsGivenSchema}
          defaultProps={{
            timeUntilTabletHides: 200,
            starsGiven: 50,
            showCockpit: true,
            topWeekday: "1" as const,
            topHour: "0" as const,
            graphData: GRAPH_DATA,
            totalPullRequests: 614,
            login: "JonnyBurger",
            sampleStarredRepos: SAMPLE_STARRED_REPOS,
            timeUntilTabletHasEntered: 200,
          }}
          calculateMetadata={starsGivenCalculateMetadata}
        />
      </Folder>
      <Composition
        id="PromoVideo"
        component={PromoVideo}
        width={1200}
        height={630}
        durationInFrames={15.5 * 30}
        fps={30}
        schema={promoVideoSchema}
        defaultProps={{ layout: "short" as const }}
        calculateMetadata={({ props: { layout } }) => {
          if (layout === "landscape") {
            return {
              width: 1200,
              height: 630,
            };
          }

          if (layout === "short") {
            return {
              width: 1080,
              height: 1920,
            };
          }

          throw new Error("invalid layout");
        }}
      />
      <Composition
        id="PromoGif"
        component={PromoGif}
        width={1200}
        height={630}
        durationInFrames={4 * 30}
        fps={30}
        schema={promoVideoSchema}
        defaultProps={{ layout: "landscape" as const }}
        calculateMetadata={({ props: { layout } }) => {
          if (layout === "landscape") {
            return {
              width: 1200,
              height: 630,
            };
          }

          if (layout === "short") {
            return {
              width: 1080,
              height: 1920,
            };
          }

          throw new Error("invalid layout");
        }}
      />
      <Composition
        id="PlanetPromo"
        component={Planets}
        width={1200}
        height={630}
        durationInFrames={20 * 30}
        fps={30}
        defaultProps={{
          layout: "landscape",
        }}
      />
      <Folder name="Stills">
        <Still
          width={1200}
          height={630}
          component={OgImageContent}
          id="og-image"
          schema={ogImageSchema}
          defaultProps={{
            topLanguage: {
              type: "designed",
              name: "PHP",
              percent: 0.3,
            },
            issues: 10,
            login: "JonnyBurger",
            pullRequests: 10,
            stars: 10,
            weekdays: [100, 200, 1, 0, 3, 400, 100],
            contributionData: [
              34, 0, 35, 57, 67, 57, 126, 0, 97, 39, 0, 0, 46, 0, 114, 0, 82,
              72, 95, 63, 92, 32, 0, 57, 109, 0, 98, 69, 44, 58, 99, 0, 107, 75,
              104, 97, 100, 125, 38, 122, 55, 102, 77, 70, 0, 47, 47, 56, 58,
              49, 0, 86, 66, 75, 0, 36, 36, 71, 98, 93, 113, 0, 126, 51, 0, 0,
              0, 0, 63, 36, 37, 55, 0, 69, 53, 0, 98, 56, 50, 0, 52, 75, 0, 65,
              0, 37, 0, 0, 37, 98, 0, 60, 0, 34, 124, 119, 69, 70, 60, 0, 125,
              0, 90, 99, 49, 36, 104, 43, 67, 0, 126, 112, 69, 113, 82, 106, 58,
              74, 122, 0, 119, 111, 0, 35, 46, 40, 120, 0, 101, 125, 86, 56, 69,
              100, 0, 94, 107, 108, 70, 56, 33, 0, 0, 87, 36, 68, 112, 39, 114,
              122, 72, 45, 124, 46, 77, 0, 126, 0, 0, 0, 48, 75, 124, 74, 97,
              105, 0, 77, 0, 54, 34, 72, 41, 74, 34, 81, 107, 104, 0, 47, 0, 42,
              60, 0, 108, 59, 97, 124, 117, 78, 42, 0, 112, 108, 103, 117, 100,
              0, 90, 35, 55, 96, 52, 0, 0, 57, 113, 100, 78, 0, 0, 0, 103, 71,
              0, 116, 105, 61, 60, 111, 104, 0, 66, 75, 65, 76, 37, 42, 0, 0,
              85, 76, 80, 99, 95, 0, 0, 59, 0, 108, 88, 74, 62, 109, 44, 0, 0,
              104, 94, 108, 124, 70, 0, 88, 0, 102, 58, 73, 86, 0, 45, 98, 94,
              84, 53, 0, 34, 76, 0, 122, 61, 80, 40, 105, 81, 88, 45, 108, 92,
              90, 64, 56, 85, 70, 62, 45, 71, 33, 98, 0, 103, 68, 120, 38, 55,
              0, 40, 0, 47, 0, 78, 94, 0, 42, 60, 57, 107, 46, 76, 80, 0, 119,
              0, 121, 43, 0, 116, 47, 0, 87, 82, 105, 0, 126, 38, 102, 75, 89,
              67, 109, 121, 70, 103, 116, 0, 33, 54, 66, 0, 36, 69, 124, 0, 0,
              83, 0, 0, 127, 127, 0, 0, 54, 93, 91, 0, 38, 54, 72, 0, 39, 58,
              82, 98, 127,
            ],
            longestStreak: 48,
            totalContributions: 9489,
          }}
        />
        <Still
          width={600}
          height={900}
          component={IgStoryContent}
          id="ig-story-content"
          schema={ogImageSchema}
          defaultProps={{
            topLanguage: {
              type: "other" as const,
              name: "dfasdfasdfsadfsadfsadfasdfdsfa" as const,
              color: "#ffffff",
              percent: 0.3,
            },
            issues: 10,
            login: "JonnyBurger",
            pullRequests: 10,
            stars: 10,
            weekdays: [265, 200, 1, 0, 3, 400, 976],
            contributionData: [
              34, 0, 35, 57, 67, 57, 126, 0, 97, 39, 0, 0, 46, 0, 114, 0, 82,
              72, 95, 63, 92, 32, 0, 57, 109, 0, 98, 69, 44, 58, 99, 0, 107, 75,
              104, 97, 100, 125, 38, 122, 55, 102, 77, 70, 0, 47, 47, 56, 58,
              49, 0, 86, 66, 75, 0, 36, 36, 71, 98, 93, 113, 0, 126, 51, 0, 0,
              0, 0, 63, 36, 37, 55, 0, 69, 53, 0, 98, 56, 50, 0, 52, 75, 0, 65,
              0, 37, 0, 0, 37, 98, 0, 60, 0, 34, 124, 119, 69, 70, 60, 0, 125,
              0, 90, 99, 49, 36, 104, 43, 67, 0, 126, 112, 69, 113, 82, 106, 58,
              74, 122, 0, 119, 111, 0, 35, 46, 40, 120, 0, 101, 125, 86, 56, 69,
              100, 0, 94, 107, 108, 70, 56, 33, 0, 0, 87, 36, 68, 112, 39, 114,
              122, 72, 45, 124, 46, 77, 0, 126, 0, 0, 0, 48, 75, 124, 74, 97,
              105, 0, 77, 0, 54, 34, 72, 41, 74, 34, 81, 107, 104, 0, 47, 0, 42,
              60, 0, 108, 59, 97, 124, 117, 78, 42, 0, 112, 108, 103, 117, 100,
              0, 90, 35, 55, 96, 52, 0, 0, 57, 113, 100, 78, 0, 0, 0, 103, 71,
              0, 116, 105, 61, 60, 111, 104, 0, 66, 75, 65, 76, 37, 42, 0, 0,
              85, 76, 80, 99, 95, 0, 0, 59, 0, 108, 88, 74, 62, 109, 44, 0, 0,
              104, 94, 108, 124, 70, 0, 88, 0, 102, 58, 73, 86, 0, 45, 98, 94,
              84, 53, 0, 34, 76, 0, 122, 61, 80, 40, 105, 81, 88, 45, 108, 92,
              90, 64, 56, 85, 70, 62, 45, 71, 33, 98, 0, 103, 68, 120, 38, 55,
              0, 40, 0, 47, 0, 78, 94, 0, 42, 60, 57, 107, 46, 76, 80, 0, 119,
              0, 121, 43, 0, 116, 47, 0, 87, 82, 105, 0, 126, 38, 102, 75, 89,
              67, 109, 121, 70, 103, 116, 0, 33, 54, 66, 0, 36, 69, 124, 0, 0,
              83, 0, 0, 127, 127, 0, 0, 54, 93, 91, 0, 38, 54, 72, 0, 39, 58,
              82, 98, 127,
            ],
            longestStreak: 48,
            totalContributions: 9489,
          }}
        />
        <Still
          width={1036}
          height={1973}
          component={IgStory}
          id="ig-story"
          schema={ogImageSchema}
          defaultProps={{
            topLanguage: {
              type: "other" as const,
              name: "dfasdfasdfsadfsadfsadfasdfdsfa" as const,
              color: "#ffffff",
              percent: 0.3,
            },
            issues: 10,
            login: "JonnyBurger",
            pullRequests: 10,
            stars: 10,
            weekdays: [265, 200, 1, 0, 3, 400, 976],
            contributionData: [
              34, 0, 35, 57, 67, 57, 126, 0, 97, 39, 0, 0, 46, 0, 114, 0, 82,
              72, 95, 63, 92, 32, 0, 57, 109, 0, 98, 69, 44, 58, 99, 0, 107, 75,
              104, 97, 100, 125, 38, 122, 55, 102, 77, 70, 0, 47, 47, 56, 58,
              49, 0, 86, 66, 75, 0, 36, 36, 71, 98, 93, 113, 0, 126, 51, 0, 0,
              0, 0, 63, 36, 37, 55, 0, 69, 53, 0, 98, 56, 50, 0, 52, 75, 0, 65,
              0, 37, 0, 0, 37, 98, 0, 60, 0, 34, 124, 119, 69, 70, 60, 0, 125,
              0, 90, 99, 49, 36, 104, 43, 67, 0, 126, 112, 69, 113, 82, 106, 58,
              74, 122, 0, 119, 111, 0, 35, 46, 40, 120, 0, 101, 125, 86, 56, 69,
              100, 0, 94, 107, 108, 70, 56, 33, 0, 0, 87, 36, 68, 112, 39, 114,
              122, 72, 45, 124, 46, 77, 0, 126, 0, 0, 0, 48, 75, 124, 74, 97,
              105, 0, 77, 0, 54, 34, 72, 41, 74, 34, 81, 107, 104, 0, 47, 0, 42,
              60, 0, 108, 59, 97, 124, 117, 78, 42, 0, 112, 108, 103, 117, 100,
              0, 90, 35, 55, 96, 52, 0, 0, 57, 113, 100, 78, 0, 0, 0, 103, 71,
              0, 116, 105, 61, 60, 111, 104, 0, 66, 75, 65, 76, 37, 42, 0, 0,
              85, 76, 80, 99, 95, 0, 0, 59, 0, 108, 88, 74, 62, 109, 44, 0, 0,
              104, 94, 108, 124, 70, 0, 88, 0, 102, 58, 73, 86, 0, 45, 98, 94,
              84, 53, 0, 34, 76, 0, 122, 61, 80, 40, 105, 81, 88, 45, 108, 92,
              90, 64, 56, 85, 70, 62, 45, 71, 33, 98, 0, 103, 68, 120, 38, 55,
              0, 40, 0, 47, 0, 78, 94, 0, 42, 60, 57, 107, 46, 76, 80, 0, 119,
              0, 121, 43, 0, 116, 47, 0, 87, 82, 105, 0, 126, 38, 102, 75, 89,
              67, 109, 121, 70, 103, 116, 0, 33, 54, 66, 0, 36, 69, 124, 0, 0,
              83, 0, 0, 127, 127, 0, 0, 54, 93, 91, 0, 38, 54, 72, 0, 39, 58,
              82, 98, 127,
            ],
            longestStreak: 48,
            totalContributions: 9489,
          }}
        />
      </Folder>
      <Still
        component={PinkHighlight}
        id="PinkHighlight"
        width={1080}
        height={1080}
      />
      <Still
        component={WhiteHighlight}
        id="WhiteHighlight"
        width={1080}
        height={540}
      />
    </>
  );
};
