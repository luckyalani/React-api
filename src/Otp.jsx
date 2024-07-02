import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Otp = () => {

  // use navigate hook for redirection 
  const nextpage=useNavigate()

  // ! get the email value from the user
  const [email, setemail] = useState("");
  const [otp, setotp] = useState("");
  // verfiying the otp with given payload from server

  // storing the token in the token state variable 
  const [token ,settoken]=useState("")

  const verifyotp=(e)=>{
    e.preventDefault()
    const otppayload={
       "email": email,
         "email_otp":otp 
    }
    axios.post(' http://13.50.172.202:3001/v0/checkOtpVerificationForWeb',otppayload)
    .then((res)=>{
      settoken(res.data.data.accessToken)
      console.log(token);
     
     
    })
    .catch((error)=>{
        console.log(error.response)
    })
    
  }


  

  return (
    <>
      <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
          <p className="text-md md:text-xl">Enter the OTP we just sent you.</p>
        </div>
        <div className="flex flex-col max-w-md space-y-5">
  <form onSubmit={verifyotp} className="flex flex-col gap-3">
  <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
          />
          <input
            type="text"
            placeholder="otp"
            value={otp}
            onChange={(e)=>setotp(e.target.value)}
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
          />

          <button type="submit" className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
            Confirm
          </button>
  </form>
        </div>
      </div>


      {/* displaying the dashoboad component in conditional rendering format  */}
          {/* <Dashboard token={token}/> */}

        
    </>
  );
};

export default Otp;
