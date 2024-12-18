import React from "react";
import { Box, BoxInner } from "../Box/Box";
import { BoxHighlight, PinkHighlightBox } from "./BoxHighlight";
import { HomeBoxBottom } from "./HomeBoxBottom";
import { HomeBoxTop } from "./HomeBoxTop";

export const HomeBox: React.FC<{
  readonly userNotFound: boolean;
  readonly setUserNotFound: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  return (
    <Box style={{ maxWidth: 800, position: "relative" }}>
      <BoxHighlight />
      <PinkHighlightBox />
      <PinkHighlightBox />
      <HomeBoxTop />
      <BoxInner>
        <HomeBoxBottom {...props} />
      </BoxInner>
    </Box>
  );
};
