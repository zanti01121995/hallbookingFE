import { useEffect, useState } from "react";
import { getAllCustomer } from "../bookOps";
import "./showres.css";

function ShowCustomer() {
  const [data, setData] = useState([]);
  const checkAllBooks = async () => {
    await getAllCustomer().then((d) => {
      setData(d);
      console.log("data loaded", d);
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
                      <h4>{data._id}</h4>
                      {data.data.map(
                        (d, i) => (
                          i,
                          (
                            <>
                              <p>Room ID : {d.roomid}</p>
                              <p>Date: {d.date}</p>
                              <p>Start time : {d.starttime}</p>
                              <p>End time : {d.endtime}</p>
                              <p>------------------</p>
                            </>
                          )
                        )
                      )}
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

export default ShowCustomer;
