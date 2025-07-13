import {jwtDecode} from "jwt-decode";

interface JwtPayload {
  email: string;
  role: string;
  exp: number;
}

export const saveToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const decodeToken = (): JwtPayload | null => {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode<JwtPayload>(token);
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  if (!token) return false;
  const decoded = decodeToken();
  if (!decoded) return false;

  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

export const logout = () => {
  localStorage.removeItem("token");
};
