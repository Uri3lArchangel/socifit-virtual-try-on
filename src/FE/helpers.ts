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
  if(`${Math.ceil(Math.random() * 1000000)}`.length != 6){
    code_generator()
  }
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




export const servicescardcalculation = (x:number,y:number,width:number,height:number)=>{
  let topleft = (x>=0 && x <= width/3) && (y>=0 && y <= height/3)
  let topcenter = (x >= width/3 && x<= (2*width)/3 )&& (y>=0 && y <= height/3)
  let topright = (x >= (2*width)/3  && x<= width )&& (y>=0 && y <= height/3)
  let midleft = (x>=0 && x <= width/3) && ( y >= height/3 && y <= (2*height)/3)
  let midcenter = (x >= width/3 && x<= (2*width)/3 )&& ( y >= height/3 && y <= (2*height)/3)
  let midright = (x >= (2*width)/3  && x<= width )&& ( y >= height/3 && y <= (2*height)/3)
  let bottomleft = (x>=0 && x <= width/3) && ( y >= (2*height)/3 && y <= height)
  let bottomcenter = (x >= width/3 && x<= (2*width)/3 )&& ( y >= (2*height)/3 && y <= height)
  let bottomright = (x >= (2*width)/3  && x<= width ) && ( y >= (2*height)/3 && y <= height)
  
  if(topleft) return "tl"
  if(topcenter) return "tc"
  if(topright) return "tr"
  if(midleft) return "ml"
  if(midcenter) return "mc"
  if(midright) return "mr"
  if(bottomleft) return "bl"
  if(bottomcenter) return "bc"
  if(bottomright) return "br"
  }