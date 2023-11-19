import { Link } from "react-router-dom";
import "./home.css";
import { useEffect, useState } from "react";
import { getCustomer } from "../bookOps";
function Home() {
  const [customer, setCustomer] = useState([]);
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    const val = event.target.value;
    setQuery(val);
  };
  const handleClick = () => {
    getCustomer(query).then((d) => {
      setCustomer(d);
      console.log("data received", d);
    });
  };
  useEffect(() => {}, [query, customer]);
  console.log(customer, "customer");
  if (customer.length == 0) {
    return (
      <div className="container1">
        <div className="card1">
          <img src="src\assets\calenderbooking.jpg" alt="First Image" />
          <div className="card1-body">
            <h2 className="card1-title">Title Three</h2>
            <Link to={"/Showall"}>
              <button className="btn">Check All Bookings</button>
            </Link>
          </div>
        </div>
        <div className="card1">
          <img src="src\assets\singlecustomer.jpeg" alt="First Image" />
          <div className="card1-body">
            <h2 className="card1-title">Title Three</h2>
            <Link to={"/Showcustomer"}>
              <button className="btn">Check all Customers</button>
            </Link>
          </div>
        </div>
        <div className="card1">
          <img src="src\assets\customersimage.jpeg" alt="First Image" />
          <div className="card1-body">
            <h2 className="card1-title">Title Three</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Customername"
              aria-label="Customername"
              aria-describedby="addon-wrapping"
              value={query}
              onChange={handleChange}
            />

            <button className="btn" onClick={handleClick}>
              Check Customer
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="customercard">
        <h1>{customer.name}</h1>
        <p>{`${customer.name} has ${customer.data.length} booking history data and  check the logs for the data`}</p>
      </div>
    );
  }
}

export default Home;
