import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateRoom from "./createroom/createroom";
import ShowAll from "./showallrooms/showall";
import EditRoom from "./createroom/editroom";
import NavBar from "./navbar/navbar";
import Home from "./home/home";
import Book from "./bookroom/book";
import ShowRes from "./showresponse/showres";
import ShowCustomer from "./showresponse/showcustomer";
import Customer from "./showresponse/customer";

function App() {
  // const [data, setData] = useState([]);
  // const fetchInfo = () => {
  //   return fetch("http://localhost:3000/api/createroom")
  //     .then((res) => res.json())
  //     .then((d) => setData(d));
  // };
  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path="/home" element={<Home />}></Route>
          <Route path="/add" element={<CreateRoom />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/rooms" element={<ShowAll />}></Route>
          <Route path="/edit" element={<EditRoom />}></Route>
          <Route path="/Showall" element={<ShowRes />}></Route>
          <Route path="/ShowCustomer" element={<ShowCustomer />}></Route>
          <Route path="/Customer" element={<Customer />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
