import React, { useState, useEffect } from "react";

const GetAdvice = () => {
  const [advice, setAdvice] = useState("");
  const [adviceCount, setAdviceCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setAdviceCount((adviceCount) => adviceCount + 1);
  }

  useEffect(() => {
    getAdvice();
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Time:{time}</h1>
      <br />
      <button onClick={getAdvice}>GET ADVICE</button>
      <br />
      Advice: {advice}
      <p>
        You have read <strong>{adviceCount}</strong> of advices
      </p>
      <Message adviceCount={adviceCount} />
    </div>
  );
};

export default GetAdvice;

function Message(props) {
  return (
    <p>
      You have read <strong>{props.adviceCount}</strong> of advices
    </p>
  );
}
