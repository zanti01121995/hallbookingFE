import { useEffect, useState } from "react";
import "./createroom.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getRoom2, updateRoom } from "../roomCrud";

function EditRoom() {
  const [params] = useSearchParams();

  const navigate = useNavigate();

  const initialValues = {
    room_id: "",
    no_of_seats: "",
    amenities: "",
    price_per_hour: "",
  };
  const [formData, setFormData] = useState(initialValues);
  console.log("================================", formData);
  const loadRoom = async () => {
    const response = await getRoom2(params.get("room_id"));
    setFormData(response);
    console.log("formData", formData);
    // return getRoom2(params.get("id")).then((d) => setFormData(d));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateRoom(params.get("room_id"), formData);
    navigate(params.get("room_id"));
  };
  //   const handleClear = async () => {
  //     setFormData(initialValues);
  //   };

  useEffect(() => {
    loadRoom();
  }, []);
  return (
    <div className="container">
      <h2 style={{ padding: "20px" }}>Room Creation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-ls-12 roominp form-group">
            <label htmlFor="room_id">Room ID</label>
            <input
              type="number"
              className="form-control"
              id="roomid"
              name="room_id"
              value={formData.room_id}
              onChange={handleChange}
            />
          </div>
          <div className="col-ls-12 roominp form-group">
            <label htmlFor="no_of_seats">No of Seats</label>
            <input
              type="number"
              className="form-control"
              id="seats"
              name="no_of_seats"
              value={formData.no_of_seats}
              onChange={handleChange}
            />
          </div>
          <div className="col-ls-12 roominp form-group">
            <label htmlFor="amenities">Amenities</label>
            <input
              type="text"
              className="form-control"
              id="amenities"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
            />
          </div>
          <div className="col-ls-12 roominp form-group">
            <label htmlFor="price_per_hour">Price Per Hour</label>
            <input
              type="number"
              className="form-control"
              id="cost"
              name="price_per_hour"
              value={formData.price_per_hour}
              onChange={handleChange}
            />
          </div>
          <div className="col-ls-12 roombtn">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {/* <button
              type="button"
              className="btn btn-danger"
              onClick={handleClear}
            >
              Clear
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditRoom;
