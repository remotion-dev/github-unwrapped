import type { ReactNode } from "react";
import React from "react";
import type { CompositionParameters, ProfileStats } from "../src/config";
import { NotFound } from "./NotFound/NotFound";
import type { RenderStatus } from "./VideoPage/useVideo";
import { useVideo } from "./VideoPage/useVideo";
import { useCompositionParams } from "./VideoPage/user-page";

type ContextType = {
  compositionParams: CompositionParameters;
  setRocket: React.Dispatch<
    React.SetStateAction<CompositionParameters["rocket"] | null>
  >;
  status: RenderStatus;
};

const UserVideoContext = React.createContext<ContextType | null>(null);

const UserVideoProvider: React.FC<{
  readonly children: ReactNode;
  readonly user: ProfileStats;
}> = ({ children, user }) => {
  const { compositionParams, setRocket } = useCompositionParams(user);
  const status = useVideo({
    theme: compositionParams.rocket,
    username: compositionParams.login,
  });

  const contextValue: ContextType = React.useMemo(() => {
    return {
      compositionParams,
      setRocket,
      status,
    };
  }, [compositionParams, setRocket, status]);

  return (
    <UserVideoContext.Provider value={contextValue}>
      {children}
    </UserVideoContext.Provider>
  );
};

export const UserVideoContextProvider: React.FC<{
  readonly children: ReactNode;
}> = ({ children }) => {
  const user = window.__USER__;

  if (user === "not-found") {
    return <NotFound code="404" />;
  }

  return <UserVideoProvider user={user}>{children}</UserVideoProvider>;
};

export const useUserVideo = () => {
  const context = React.useContext(UserVideoContext);
  if (context === undefined || context === null) {
    throw new Error("useUserVideo must be used within a UserVideoProvider");
  }

  return context;
};
