import react, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

// importing the store funcction
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './ReduxSlice/Slice'
function App() {



  // redux states 
  const countnew = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()



  const count = useSelector((state) => state.counter.value)
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmPasswordnew, setconfirmPasswordnew] = useState("");
  const [phone, setphone] = useState("");
  const [Datevalue, setDatevalue] = useState("");
  // const[ number,setnumber]=useState('')
  // payloading the api or sending the data to the server

  // otp store for user otp
  const [otp, setotp] = useState("");

  // user inputted otp for verification
  const [userotp, setuserotp] = useState("");

  const getname = (e) => {
    setUsername(e.target.value);
  };
  const getpassword = (e) => {
    setpassword(e.target.value);
  };
  const emailfunction = (e) => {
    setemail(e.target.value);
  };
  const datevalueget = (e) => {
    setDatevalue(e.target.value);
    // alert(Datevalue)
  };
  const getphone = (e) => {
    setphone(e.target.value);
  };

  //  final button code for showing the values of the user
  const button = (e) => {
    e.preventDefault();
    // console.log(username,password)
    const payload = {
      email: email,
      phone: phone,
      password: password,
      confirmPassword: confirmPasswordnew,
      terms_condition: 1,
      profilecreatedby: "Self",
      name: username,
      gender: true,
      dateofbirth: Datevalue,
      mobile_code: "+91",
    };

    axios
      .post("http://13.50.172.202:3001/v0/registrationForWeb", payload)
      .then((res) => {
        setotp(res.data.data);
        console.log(otp);

        setTimeout(() => {
          navigate("/Otp");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error:", error.response); // Log detailed error response
      });
  };

  // axios post request for the otp
  // const [otpvalue,setotpvalue]=useState('')

  const otpfunction = (e) => {
    e.preventDefault();

    const otppayload = {
      email: email,
      email_otp: userotp,
    };
    axios
      .post(
        " http://13.50.172.202:3001/v0/checkOtpVerificationForWeb",
        otppayload
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* form */}
      <div className="flex h-screen bg-indigo-700">
        <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5 h-[600px]  overflow-y-auto">
          <header>
            <img
              className="w-20 mx-auto mb-5"
              src="https://img.icons8.com/fluent/344/year-of-tiger.png"
            />
          </header>
          <form onSubmit={button}>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="username">
                Username
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                name="username"
                value={username}
                onChange={getname}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="password"
                name="password"
                value={password}
                onChange={getpassword}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                email
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="email"
                placeholder="email"
                value={email}
                onChange={emailfunction}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                Confirm Password
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="password"
                placeholder="confirm password"
                value={confirmPasswordnew}
                onChange={(e) => setconfirmPasswordnew(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                Date
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="date"
                placeholder="confirm password"
                value={Datevalue}
                onChange={datevalueget}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                Phone number
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="tel"
                placeholder="telephone number"
                maxLength={10}
                value={phone}
                onChange={getphone}
              />
            </div>
            <div>
              <button
                type="submit"
                className=" flex justify-center w-full bg-black text-white rounded-md p-3"
              >
                Click
              </button>
            </div>
          </form>
          <footer>
            <a
              className="text-indigo-700 hover:text-pink-700 text-sm float-left"
              href="#"
            >
              Forgot Password?
            </a>
            <a
              className="text-indigo-700 hover:text-pink-700 text-sm float-right"
              href="#"
            >
              Create Account
            </a>
          </footer>
        </div>
      </div>



<Link to={"/dashboard"}>Lazy</Link>

 <p>{countnew}</p>
 <button onClick={()=>dispatch(increment())}>Click</button>
      

    </>
  );
}

export default App;
