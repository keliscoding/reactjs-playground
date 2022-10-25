import React, { useEffect, useMemo, useState } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);
  
  //  const premiumNumbers = ["0", "100", "200"];
  
  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Premium number foi alterado");
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      {premiumNumbers.includes(number) ? <p>acertou o número</p> : ""}
      <hr />
    </div>
  );
};

export default HookUseMemo;
