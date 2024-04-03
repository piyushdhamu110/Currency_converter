import React from "react";
import { useId } from "react";  // used to generates unique id's

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const amountInputId = useId();  // generates unique id's

  return (
    <div
      className={`bg-white p-2 rounded-xl text-sm flex ${className} border-solid border-4 border-red-500 `}
    >
      <div className="w-1/2 border-solid border-2 border-orange-700 ">
        <label // from/to
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block 
          border-solid border-2 border-sky-500 "
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 
          border-solid border-2 border-sky-500  "
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            (onAmountChange && onAmountChange(Number(e.target.value)))
          }
          // onChange={(e) =>
          //   onAmountChange ? onAmountChange(Number(e.target.value)) : null
          // }
        />
      </div>
      <div className=" w-1/2 flex flex-wrap justify-end text-right border-solid border-2 border-yellow-500 ">
        <p className=" text-black/40 mb-2 w-full">Currency type</p>
        <select
          className=" rounded-none-lg px-1 py1
                bg-gray-100 cursor-pointer outline-none border-solid border-2 border-sky-500 "
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
