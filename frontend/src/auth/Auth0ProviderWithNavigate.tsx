import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { UseCreateMyUser } from "@/api/MyUserAPI";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function Auth0ProviderWithNavigate({ children }: Props) {
  const { createUser } = UseCreateMyUser();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const navigate = useNavigate();

  if (!domain || !clientId || !redirectUrl) {
    throw new Error("Unable to initialise auth");
  }

  const onRedirectCallBack = (appState?: AppState, user?: User) => {
    navigate("/auth-callback");
  };
  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: redirectUrl }} onRedirectCallback={onRedirectCallBack}>
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;
