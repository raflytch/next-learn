import { useMutation } from "@tanstack/react-query";
import { UserType } from "@/lib/types/user";

const registerUser = async (formData: UserType): Promise<UserType> => {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.status === 400) {
    throw new Error("Email already exist");
  }

  return response.json();
};

export const useRegisterMutation = () => {
  return useMutation<UserType, Error, UserType>({
    mutationFn: registerUser,
  });
};
