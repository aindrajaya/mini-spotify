import fetcher from "./fetcher";

interface AuthRequest {
  email: string;
  password: string;
}

export const auth = (mode: "signin" | "signup", body: AuthRequest) => {
  return fetcher(`/${mode}`, body);
};
