import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { UseCreateMyUser } from "@/api/MyUserAPI";

type Props = {
  children: React.ReactNode;
};

function Auth0ProviderWithNavigate({ children }: Props) {
  const { createUser } = UseCreateMyUser();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUrl) {
    throw new Error("Unable to initialise auth");
  }

  const onRedirectCallBack = (appState?: AppState, user?: User) => {
    console.log("User", user);
    if (user?.sub && user.email) {
      createUser({
        auth0Id: user.sub,
        email: user.email,
      });
    }
  };
  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: redirectUrl }} onRedirectCallback={onRedirectCallBack}>
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;
