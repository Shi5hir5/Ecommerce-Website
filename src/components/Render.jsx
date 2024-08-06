import React from "react";


const Render = ({hName,inputName, value , onChange, placeholder, className, eName , message}) => {
  return (
    <div>
      <h1 className="m-2">{hName}</h1>
      <input
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-slate-200   p-4 focus: outline-none rounded-md border ${className}`}
      />
      <div>
      {
        eName && message ? (
          <div className="text-red-700 mt-2 w-96">{message}</div>
        ): null
      }
    </div>
    
    </div>
  );
};

export default Render;