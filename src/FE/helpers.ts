import crypto from "crypto";

export function validateEmail(email: string): { status: string } {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return { status: "error" };
  }

  return { status: "success" };
}

export const URLRESOLVE = (a: string) => {
  if (process.env.NODE_ENV == "production") {
    return window.location.origin + a;
  } else {
    return a;
  }
};

export function code_generator() {
  return Math.ceil(Math.random() * 1000000);
}
export const passwordHasher = (password: string) => {
  const passSalt = process.env.passwordSalt;
  const digest = crypto
    .createHash("sha512")
    .update(passSalt + password + passSalt)
    .digest("hex");
  return digest;
};
export const formatTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
};
