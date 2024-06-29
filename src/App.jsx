import { useState } from 'react';
import './App.css';
import useCurrencyInfo from './components/hooks/useCurrencyInfo';
import {InputBox} from './components/index.js';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const currencyInfo = useCurrencyInfo(from);
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    // setFrom(to);
    // setTo(from);
    // setConvertedAmount(amount);      // VALUES CHANGING WHILE SWAPPING.
    // setAmount(convertedAmount);
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
    setAmount(0);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]["value"]);   ////////
  }

  return (
    <>
      <div className="w-full h-screen overflow-hidden relative flex flex-wrap justify-center items-center bg-gray-800"
      // style={{backgroundImage: `url(../assets/the-greenback.jpg)`}}
      >
        <img src="../assets/the-greenback.jpg" alt="bg-image" className='absolute top-0 left-0 w-screen h-[110vh] opacity-[.6]' />
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
              <div className='w-full mb-1'>
                <InputBox
                label="from"
                amount={amount}
                currencyOptions = {currencyOptions}
                onCurrencyChange={(currency) => {
                  setFrom(currency)
                }}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                selectedCurrency={from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
                >Swap</button>
              </div>
              <div className='w-full mb-1'>
                <InputBox
                label="to"
                amount={convertedAmount}
                amountDisabled
                currencyOptions = {currencyOptions}
                onCurrencyChange={(currency) => {
                  setTo(currency)
                }}
                onAmountChange={(amount) => {
                  setConvertedAmount(amount);
                }}
                selectedCurrency={to}
                />
              </div>
              <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >
                Convert from {from} to {to}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
