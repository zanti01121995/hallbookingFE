import { useEffect, useState } from "react";
import { deleteRoom, getRoom } from "../roomCrud";
import "./cards.css";
import { Link } from "react-router-dom";
function Card() {
  const [Room, setRoom] = useState([]);

  const loadRoom = async () => {
    return getRoom().then((d) => setRoom(d));
  };
  const deleteroom = async (data) => {
    return deleteRoom(data);
  };
  useEffect(() => {
    loadRoom();
  }, []);
  return (
    <>
      {Room.map(
        (data, i) => (
          i,
          (
            <div className="col-xs-12 col-sm-3">
              <div className="card">
                <div className="details">
                  <p>Room ID : {data.room_id}</p>
                  <p>No of Seats : {data.no_of_seats}</p>
                  <p>Amenities : {data.amenities}</p>
                  <p>Cost per hour : {data.price_per_hour}</p>
                </div>

                <div
                  className="delete"
                  onClick={() => {
                    deleteroom(data.room_id);
                  }}
                >
                  <a>
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </div>
                <Link to={`/edit?room_id=${data.room_id}`}>
                  <div className="edit">
                    <a>
                      <i className="fa-solid fa-edit"></i>
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          )
        )
      )}
      ;
    </>
  );
}

export default Card;
