import { React, useState } from "react";
import "./styles.css";

export default function App() {
  var arr = [];
  let arr1 = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 80];
  var namee = [];
  var seatl = [];
  const [name, setName] = useState("");
  const [seat, setSeat] = useState();
  var seatt;
  const names = (e) => {
    setName(e.target.value);
  };
  const books = (e) => {
    setSeat(e.target.value);
  };

  const bookingTicket = (e) => {
    namee.push(name);
    let temp = Math.ceil(seat % 7);
    temp = temp - 1;
    seatt = parseInt(e, seat);
    //  if(typeof seatt==='string')alert("is string")
    //  else alert("no")
    if (!arr1.includes(seat)) {
      if (seatt > 77) {
        arr.push(80);
        seatl.push("78 TO 80");
        setName("");
        setSeat("");
      } else {
        arr.push(temp);
        seatl.push("{arr1[temp]-6} TO {arr1[temp]}");
        setName("");
        setSeat("");
      }
    } else {
      alert("error");
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Ticket Booking</h1>
      <input type="text" onChange={names} />
      <br /> <br />
      <input type="number" onChange={books} />
      <br /> <br />
      <button className="button" onClick={bookingTicket}>
        Book Ticket
      </button>
      <div>
        {seatt}
        {namee}
      </div>
    </div>
  );
}
