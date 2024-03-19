import { User } from "@/type";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

//Lưu ý: khi chúng ta cần truy vấn dưx liệu từ server như GET thì chúng ta sẽ sử dụng Query. Khi chúng ta muốn cập nhập dữ liệu cho Database của chúng ta, việc sử dụng useMutation sex rất hữu hiệu.
export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserRequest = async (): Promise<User> => {
    // Return an Object with type User
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user/getUser`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failt to fetch user");
    }
    return response.json();
  };
  const { data: currentUser, isLoading, error } = useQuery("fetchCurrentUser", getMyUserRequest);

  if (error) {
    toast.error(error.toString());
  }
  return { currentUser, isLoading };
};

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user/createUser`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

type UpdateMyUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user/updateUser`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Faild update user");
    }
    return response.json();
  };
  const { mutateAsync: updateUser, isLoading, isError, isSuccess, error, reset } = useMutation(updateMyUserRequest);
  if (isSuccess) {
    toast.success("User profile updated!");
  }
  if (error) {
    toast.error(error.toString());
    reset();
  }
  return { updateUser, isLoading, isError, isSuccess, error, reset };
};
