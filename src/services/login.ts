import RestClient from "@utils/RestClient";

export const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{ token: string }> =>
  RestClient.apiCaller(`/auth/login`, {
    username,
    password,
  });
