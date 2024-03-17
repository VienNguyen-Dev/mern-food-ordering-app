import { UseCreateMyUser } from "@/api/MyUserAPI";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallBackPage() {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { createUser } = UseCreateMyUser();
  const hasCreateUser = useRef(false);
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreateUser.current) {
      createUser({
        auth0Id: user.sub,
        email: user.email,
      });
      hasCreateUser.current = true;
      navigate("/");
    }
  }, [createUser, navigate, user?.sub, user?.email]);
  return <>Loading...</>;
}
