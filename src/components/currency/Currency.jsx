import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Currency.css";
import { MdOutlineCurrencyExchange } from "react-icons/md";

function Currency() {
  const [activate, setActivate] = useState("USD");
  const [activate2, setActivate2] = useState("UZS");
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);

  const states = [
    { name: "USD", id: 1 },
    { name: "UZS", id: 2 },
    { name: "EUR", id: 3 },
    { name: "RUB", id: 4 },
    { name: "AED", id: 5 },
  ];

  const apikey = "9e9a358106675fa80d70f6d8";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`
        );
        setRates(response.data.conversion_rates || {});
      } catch (err) {
        setError("Xatolik yuz berdi! Valyuta kurslari yuklanmadi.");
      }
    };

    fetchRates();
  }, []);

  const onChangeToPrice = (value) => {
    const price = Number(value) / rates[activate];
    const result = price * rates[activate2];
    setValue1(value); 
    setValue2(result);
  };

  return (
    <div className="currency">
      <div className="currency-card">
        <div className="buttons-currency">
          {states.map((item) => (
            <button
              className={item.name === activate ? "currency-activate" : ""}
              onClick={() =>
                 setActivate(item.name) 
              }
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
        <input
          value={value1}
          onChange={(e) => onChangeToPrice(parseFloat(e.target.value) || 0)}
          type="text"
          className="currency-input"
        />
      </div>

      <button className="exchange-btn">
        <MdOutlineCurrencyExchange className="exchange" />
      </button>

      <div className="currency-card">
        <div className="buttons-currency">
          {states.map((item) => (
            <button
              className={item.name === activate2 ? "currency-activate" : ""}
              onClick={() =>
                setActivate2(item.name) 
              }
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
        <input
          value={value2}
          onChange={(e) => setValue2(parseFloat(e.target.value) || 0)}
          type="text"
          className="currency-input"
        />
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Currency;
