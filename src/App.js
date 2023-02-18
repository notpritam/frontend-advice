import "./styles.css";
import { BsFillDice5Fill, BsFillPauseFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let demoQuote = {};
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      setLoading(false);
      setQuote(res.data.slip);
      demoQuote = res.data.slip;
      console.log(demoQuote);
    });
  }

  return (
    <div className="App">
      <div className="card">
        <p>Advice #{quote.id}</p>
        <h1>{quote.advice}</h1>
        <div className="line">
          <BsFillPauseFill className="icon" />
        </div>

        <button onClick={getData}>
          <BsFillDice5Fill className="dice" />
        </button>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.twitter.com/notpritamsharma">Pritam Sharma</a>.
      </div>
    </div>
  );
}
