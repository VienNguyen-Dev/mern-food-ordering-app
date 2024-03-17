import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const UseCreateMyUser = () => {
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user/createUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
