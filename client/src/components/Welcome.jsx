import React, {useContext} from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsFillAlarmFill, BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);


function Welcome() {
  const {connectWallet, currentAccount,formData, sendTransaction, handleChange,isLoading} = useContext(TransactionContext);
  // console.log(value);

  const handleSubmit = (e) => {
    const {addressTo, amount, keyword, message} = formData;

    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  }

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className="flex flex-1 justify-start flex-col mf:mr-10 text-white">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Crypto <br />Around The World</h1>
          <p className="text-left text-white mt-4 font-light md:w-9/12 w-11/12 text-base">Explore the crypto world. Buy and Sell cryptocurrencies easily on Krypt. </p>
          {! currentAccount && (
            <button type="button" onClick={connectWallet} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"><p className="text-white text-base font-semibold">Connect Wallet</p></button>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className= 'rounded-tl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'> Reliability </div>
            <div className= 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Security </div>
            <div className= 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white sm:rounded-tr-2xl rounded-none'>Etherium </div>
            <div className= 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white sm:rounded-bl-2xl rounded-none '>WEB 3.0 </div>
            <div className= 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Low fees</div>
            <div className= 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white rounded-br-2xl'>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#ffff"/>
                </div>
                <BsInfoCircle fontSize={17} color="#ffff"/>
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Etherium
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full justify-start items-start blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange}/>
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange}/>
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange}/>
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}/>

            <div className="h-[1px] bg-gray-400 my-2 w-full"/>

            { isLoading ? (
                <Loader/>
              ) : (
                <button type="button" className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#1c2035]" onClick={handleSubmit}>
                  Send Now
                </button>
              )
            }
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Welcome
