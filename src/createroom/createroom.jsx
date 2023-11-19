import { useState } from "react";
import "./createroom.css";
import { createRoom } from "../roomCrud";

function CreateRoom() {
  const initialValues = {
    room_id: "",
    no_of_seats: "",
    amenities: "",
    price_per_hour: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    createRoom(formData);
    setFormData(initialValues);
  };
  const handleClear = async () => {
    setFormData(initialValues);
  };

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
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateRoom;
