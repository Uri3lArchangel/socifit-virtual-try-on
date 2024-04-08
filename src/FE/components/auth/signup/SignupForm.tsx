'use client'
import Loading from '@/app/loading';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'

const SignupForm = () => {
 // states
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [loading,setLoading]=useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
 // routers 
 const router = useRouter();

  // functions

/**
 * Calculates the strength of each feature of the password
 * @param {string} pass 
 * @returns {number} score 
 */

const calculateStrength = (pass: string) => {
    let score = 0;

    // Check for length
    if (pass.length>0) {

      score += 1;
    }
    if (pass.length >= 8 ) {
      score += 1;
    }

    // Check for lowercase and uppercase letters
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) {
      score += 1;
    }

    // Check for digits
    if (/\d/.test(pass)) {
      score += 1;
    }

    // Check for special characters
    if (/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(pass)) {
      score += 1;
    }

    return score;
  };

  /**
   * Handles the on change event on the password input
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const p = document.getElementById("pass_display") as HTMLParagraphElement;
    let d = document.getElementById('password_display') as HTMLParagraphElement;

    p.innerHTML=""

    
    const pass = e.target.value;
    setPassword(pass);
    const strengthScore = calculateStrength(pass);
    setStrength(strengthScore);
    if(confirmPasswordRef.current?.value != pass){
        d.innerText = "Passwords do not match"
        d.style.color="red"
      }else{
        d.innerText = ""
      }
  };

  /**
   * Picks a specific color based on the strength level
   * @returns 
   */

  const getColor = () => {
    
    if (strength === 0) return 'red';
    if (strength === 1) return 'red';
    if (strength <= 2) return 'orange';
    if (strength <= 3) return 'yellow';
    if (strength <= 4) return 'yellowgreen';
    if (strength <= 5) return 'green';
    return '';
  };

  /**
   * Checks when the confirm password input changes in order to compare it with the password input field
   * @param e 
   */
  const confirmPasswordCheck = (e:React.ChangeEvent<HTMLInputElement>)=>{
    let d = document.getElementById('password_display') as HTMLParagraphElement;
  
  if(e.currentTarget.value != passwordRef.current!.value){
    d.innerText = "Passwords do not match"
    d.style.color="red"
  }else{
    d.innerText = ""
  }
  }
/**
 * Changes the visibility state of password
 * @param e 
 */
  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword2(!showPassword2);
  };


  // Inputs refs
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const unameRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

 // Credentials sign up function
//  const SignupSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (
//       !emailRef ||
//       !passwordRef ||
//       !confirmPasswordRef ||
//       !emailRef.current ||
//       !passwordRef.current ||
//       !confirmPasswordRef.current ||
//       !unameRef.current
//     ) {
//       return;
//     }
//     let email_display=(document.getElementById("email_display") as HTMLParagraphElement)
//     let uname_display=(document.getElementById("uname_display") as HTMLParagraphElement)
//     let d = document.getElementById('password_display') as HTMLParagraphElement;
//     const terms = document.getElementById("termsAndConditions") as HTMLInputElement;
//     const pass = document.getElementById("pass_display") as HTMLDivElement;

    

//     email_display.innerText="";
//     uname_display.innerText=""
//     d.innerText=""
//     terms.innerText=""
//     pass.innerText=""

//     if(unameRef.current.value.length == 0){
//       uname_display.innerText="Provide a username";
//      uname_display.style.color="red"

//       return
//     }
//     if(emailRef.current.value.length == 0){
//       email_display.innerText="Provide an email address";
//       email_display.style.color="red"

//       return
//     }
//     let s = validateEmail(emailRef.current.value)
//     if(s.status == "error")
//     {
//       email_display.innerText="Invalid email address";
//       email_display.style.color="red"

//       return
//     }
//     if(strength == 0){
//       pass.innerText="Provide a password"
//       pass.style.color="red"
//       return

//     }
//     if(passwordRef.current.value.length ==0){
//       d.innerText="Confirm your password"
//       d.style.color="red"
//       return

//     }
//     if(strength <3){

//       return
//     }
//     if(passwordRef.current.value != confirmPasswordRef.current.value){
//       d.innerText = "Passwords do not match"
//       d.style.color="red"
//       return
//     }
//     const body = {
//       email: emailRef.current.value,
//       password: passwordRef.current.value,
//       username:unameRef.current.value,
//       confirmPassword: confirmPasswordRef.current.value,
//     };
//     if(!terms.checked){
//      (document.getElementById("terms_display") as HTMLInputElement ).innerText="Please check the terms and conditions box";
//      (document.getElementById("terms_display") as HTMLInputElement ).style.color='red'
//      return

//     }
//     email_display.innerText="";
//     uname_display.innerText=""
//     d.innerText=""
//     terms.innerText=""
//     pass.innerText=""
//     setLoading(true)
//     const res = await fetch(URLRESOLVE("/api/auth/sign-up"), {
//       method: "POST",
//       mode: "no-cors",
//       cache: "no-cache",
//       body: JSON.stringify(body),
//     });
//     setLoading(false)
//     if (res.status == 201) {
//       notification({
//         message:'Account created successfully',
//         type:"success",
//         description:""
//       })
//       setTimeout(()=>{router.push("/auth/signin")},2000)
//     }
//     const data = (await res.json()) as baseResponseType;
//     if(res.status == 400 || res.status == 500){
//       notification({
//         message:data.message,
//         type:"error",
//         description:""
//       })
//     }
//     // Handle error using status codes, from the response,data.data is always null on error
//     // e.g if(res.status == 400){ ...do something... }
//     // data.message which is the message to be displayed to users
//   };


  return (
    <>
    {loading? <Loading  />:null}
    <form
      action=""
      id="form_signup"
      className={`border shadow-div w-[95%] rounded-[15px] max-w-[450px]  border-none my-12 py-12 px-10 text-black mx-auto`}
    >
    
      <div className="text-center mb-8">
        <h2 className="font-bold text-[19px] my-3 text-[#DBD1F7] sm:text-2xl">Create a new account</h2>
        <p className="text-sm italic text-[#c9c1c1c9] ">&quot;engage yourself with the virtual try on experience&quot;</p>
      </div>
      <div>
        <label htmlFor="uname" className="mb-2 block sm:text-xl" >Username *</label>
        <input
        ref={unameRef}
          type="text"
          name="uname"
          required
          id="uname"
          placeholder="Enter username"
          className="border-b-2 border-[#B58419] w-full mb-5 bg-transparent placeholder:text-[#c9c1c1c9] pb-2 focus:outline-none"
        />
      </div>
      <p id="uname_display"></p>

      <div>
        <label htmlFor="email" className="block text-sm mb-3 sm:text-xl">
          Email *
        </label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          required
          id="email"
          placeholder="Enter email"
          className="border-b-2 border-[#B58419] w-full mb-5 bg-transparent placeholder:text-[#c9c1c1c9] focus:outline-none pb-2"
        />
      </div>
      <p id="email_display"></p>
      <div>
        <label htmlFor="password" className="block text-sm mb-3 sm:text-xl">
          Password "
        </label>
        <div>
          <div className="flex border-b-2 border-[#B58419] mb-6">  
        <input
          ref={passwordRef}
          type={showPassword ? 'text' : 'password'}
          name="password"
          required
          id="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter password"
          className=" w-full mb-2  bg-transparent placeholder:text-[#c9c1c1c9] focus:outline-none"
        />
      {showPassword ?  <EyeOffIcon className="cursor-pointer" onClick={togglePasswordVisibility} /> :  <EyeIcon className="cursor-pointer" onClick={togglePasswordVisibility} />}
</div>
    <div style={{ color: getColor() }} >
    {strength === 1 && 'Very Weak'}
      {strength === 2 && 'Weak'}
      {strength === 3 && 'Moderate'}
      {strength === 4 && 'Strong'}
      {strength === 5 && 'Very Strong'}
    </div>
    <p id="pass_display"></p>
  </div>
        
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-sm mb-3 sm:text-xl">
          Confirm Password *
        </label>
        <div className="flex border-b-2 border-[#B58419] mb-6">  

        <input
          ref={confirmPasswordRef}
          type={showPassword2 ? 'text' : 'password'}
          name="confirmPassword"
          onChange={confirmPasswordCheck}
          id="confirmPassword"
          required
          placeholder="Confirm password"
          className=" w-full  bg-transparent placeholder:text-[#c9c1c1c9] focus:outline-none pb-2"
        />
                {showPassword2 ?  <EyeOffIcon className="cursor-pointer" onClick={toggleConfirmPasswordVisibility} /> :  <EyeIcon className="cursor-pointer" onClick={toggleConfirmPasswordVisibility} />}

        </div>
      </div>
      <p id="password_display"></p>
      {/* <div className="mb-3 flex items-center">
        <input
          type="checkbox"
          name="termsAndConditions"
          id="termsAndConditions"
          className="bg-transparent cursor-pointer border-[#B58419] border-2 w-3 h-3 mr-2 focus:outline-none"
        />
        <label
          htmlFor="termsAndConditions"
          className="text-[#c9c1c1c9] text-sm cursor-pointer"
          
        >
          Accept <Link href="#" className="underline text-[#EDC211]">Terms and Conditions</Link>
        </label>
      </div> */}
      <p id="terms_display"></p>
      <div>
        <button
          type="submit"
          className={
            " text-base text-white font-bold p-2 my-12  rounded mb-3 block w-[100%] mx-auto sm:w-[200px] bg-black " 
          }
        //   onClick={SignupSubmit}
        >
          Submit
        </button>
        {/* <button
          type="button"
          className={
            "border-2 border-[#edc211] text-[#edc211] text-base font-bold  p-2 rounded  w-[200px] mx-auto flex items-center justify-center " +
            signin.GoogleBtn
          }
          onClick={googleSignin}
        >
          <FcGoogle size={20} className="mx-[2px]" />
          <p className=""> Google Sign in</p>
        </button> */}
      </div>
      <p className="text-center mt-3 text-sm line-break sm:text-lg">
        Already have an account?{" "}
        <Link className=" underline text-[#DBD1F7]" href={"/auth/signin"}>
          <span className="">Sign in</span>
        </Link>
      </p>
    </form>
  </>  )
}

export default SignupForm