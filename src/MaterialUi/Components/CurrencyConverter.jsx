import React, { useEffect, useState,useRef  } from 'react'
import axios from 'axios'
const CurrencyConverter = () => {

    // currency state for storing the api response in this state
    const [currency,setcurrency]=useState([])
    // const optionref = useRef();



    // ------------------------------------

    // const button state
    const[button,setbutton]=useState(false)
    const buttonclick=(e)=>{
        e.preventDefault()
        setbutton(!button)
        // showelement()
    }

    // state for displaying the currency value in the console 
    // const [currvalue,setcurrvalue]=useState("")

    // select option function to get the keys value from the array





   
    // api calling from the api 

    useEffect(() => {
        axios
          .get("https://v6.exchangerate-api.com/v6/f1566ca2d68159c543b9c00e/latest/USD")
          .then((res) => {
            const currencyCodes = Object.keys(res.data.conversion_rates);
            // console.log(res)
            setcurrency(currencyCodes);
            console.log(currency);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [button]);
      
      
      
      
      



    // states for storing user input value 
    // it should be a blank value so it can prevent the error of undefined to defined 
    const [userinput,setuserinput]=useState("")
  return (
    <>
      <div className='flex flex-col justify-center items-center h-[100vh]'>
        <form action="" className='flex flex-col gap-3' >
            <div className="fromdiv flex gap-3 flex-col">
                <label htmlFor="">

                From (India)
                

                </label>
                <input type="number" className='border border-black' value={userinput} onChange={(e)=>{
                    setuserinput(e.target.value)
                    // console.log(userinput)
                }} />
                <select name="" id="" >
                    <option value="">Select the currency</option>
                    {currency.map((ele) => (
        <option key={ele} className="flex flex-col" value={ele}     >
          {ele}
        </option>
      ))}
                </select>
            </div>


            {/* output div  */}
            

            <button  className='border border-black mt-8' onClick={buttonclick}>submit</button>
        </form>
      </div>
          
    </>
  )
}

export default CurrencyConverter