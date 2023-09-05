import "./App.css";
import { useState } from 'react';

const countryArrays = [
  {
    country: "India",
    value: "In",
    cities: ["Telangana", "AndhraPradesh", "Rajasthan", "Maharashtra"]
  },
  {
    country: "Pakistan",
    value: "Pak",
    cities: ["Pak-One", "Pak-Two", "Pak-Three"]
  }
]


export default function App() {
  const [array, setArray] = useState(countryArrays);
  const [state, setState] = useState([])

  const changeStates = (e) => {
    const filtered = array.filter((item) => item.value == e)
    setState(filtered[0].cities)
    console.log(state)
  }

  return (
    <div className="App">
      <select onChange={(e) => changeStates(e.target.value)}>
        {
          array.map((item, index) => (
            <option value={item.value}>{item.country}</option>
          ))
        }
      </select>
      <select>
        {
          state.map((item) => (
            <option value={item}>{item}</option>
          ))
        }
      </select>
    </div>
  );
}