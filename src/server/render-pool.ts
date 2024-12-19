export type RenderInProgress = {
  username: string;
  theme: string;
};

const renders: RenderInProgress[] = [];

export const addRenderInProgress = ({
  theme,
  username,
}: {
  theme: string;
  username: string;
}) => {
  renders.unshift({
    theme,
    username,
  });

  // only 100 renders at a time
  renders.splice(100);
};

export const getRenderInProgress = ({
  username,
  theme,
}: {
  username: string;
  theme: string;
}) => {
  return renders.find((r) => r.username === username && r.theme === theme);
};

export const removeRenderInProgress = ({
  username,
  theme,
}: {
  username: string;
  theme: string;
}) => {
  const index = renders.findIndex(
    (r) => r.username === username && r.theme === theme,
  );
  if (index >= 0) {
    renders.splice(index, 1);
  }
};
