import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const UseCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accesToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user/createUser`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accesToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("User create error");
    }
  };
  const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(createMyUserRequest);
  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
