import React, { useEffect } from 'react'
import axios from "axios";
// import tokenvalue from "./Otp"
const Dashboard = ({token}) => {

// data.data.accessToken
// hitting the api for showing the user details in the dashboard component !!!
  

const payload={
  tokenvalue:token
}
    
    useEffect(()=>{
        axios.post(' http://13.50.172.202:3001/v0/getUser',payload,
          {
            headers: {
              "Content-Type": "application/json",
              "X-Access-Token": token,
            },
          }
        )
        .then((res)=>{
          console.log(res);

        })
        .catch((error)=>{
console.log(error);
        })
    },[token])

  return (
    <>
      <div>hello user </div>
    
       
    </>
  )
}

export default Dashboard