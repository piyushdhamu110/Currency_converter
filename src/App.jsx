import { useState } from "react";
import { InputBox } from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

// import './App.css'

function App() {
  const initialAmount = 0;
  const initialFrom = "usd";
  const initialTo = "inr";

  const [amount, setAmount] = useState(initialAmount);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);

  const currencyInfo = useCurrencyInfo(from);
  // console.log("CurrencyInfo")
  // console.log(currencyInfo);
  // console.log("options");
  const options = Object.keys(currencyInfo);
  // console.log(options)

  const swap = () => {
    // const currentAmount = amount;
    // setAmount(currentAmount);
    // setAmount(amount);
    // setConvertedAmount(convertedAmount);
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const reset = () => {
    setAmount(initialAmount);
    setFrom(initialFrom);
    setTo(initialTo);
    setConvertedAmount(0);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-slate-600 ">
      <div className="w-full bg-red-400">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-black ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-2">
              <InputBox
                label="from"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convert}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
              <button
                type="button"
                className="w-1/2 bg-red-600 text-white px-4 py-3 rounded-lg"
                onClick={reset}
              >
                RESET
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
