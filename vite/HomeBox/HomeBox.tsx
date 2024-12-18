import React from "react";
import { Box } from "../Box/Box";
import { HomeBoxBottom } from "./HomeBoxBottom";
import { HomeBoxTop } from "./HomeBoxTop";

export const HomeBox: React.FC<{
  readonly userNotFound: boolean;
  readonly setUserNotFound: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  return (
    <Box style={{ maxWidth: 800, position: "relative" }}>
      <HomeBoxTop />
      <HomeBoxBottom {...props} />
    </Box>
  );
};
