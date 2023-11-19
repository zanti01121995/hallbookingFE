import { useEffect, useState } from "react";
import { getAllBooks } from "../bookOps";
import "./showres.css";

function ShowRes() {
  const [data, setData] = useState([]);
  const checkAllBooks = async () => {
    await getAllBooks().then((d) => {
      setData(d);
    });
  };
  useEffect(() => {
    checkAllBooks();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          {data.map(
            (data, i) => (
              i,
              (
                <div className="col-xs-12 col-sm-3">
                  <div className="card">
                    <div className="details">
                      <p>Room ID : {data.roomid}</p>
                      <p>Name of Customer : {data.customername}</p>
                      <p>Date: {data.date}</p>
                      <p>Start time : {data.starttime}</p>
                      <p>End time : {data.endtime}</p>
                      <p>Status : {data.status}</p>
                    </div>
                  </div>
                </div>
              )
            )
          )}
          ;
        </div>
      </div>
    </>
  );
}

export default ShowRes;
