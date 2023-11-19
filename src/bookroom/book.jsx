import { useState } from "react";
import "./book.css";
import { bookRoom } from "../bookOps";

function Book() {
  const initialValues = {
    roomid: "",
    customername: "",
    date: "",
    starttime: "",
    endtime: "",
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
    // createRoom(formData);
    bookRoom(formData);
    setFormData(initialValues);
  };
  const handleClear = async () => {
    setFormData(initialValues);
  };

  return (
    <div className="container">
      <h2 style={{ padding: "20px" }}>Room Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-ls-12 roominp form-group">
            <label htmlFor="roomid">Room ID</label>
            <input
              type="number"
              className="form-control"
              id="roomid"
              name="roomid"
              value={formData.roomid}
              onChange={handleChange}
            />
          </div>
          <div className="col-ls-12 roominp form-group">
            <label htmlFor="customername">Customer Name</label>
            <input
              type="text"
              className="form-control"
              id="customername"
              name="customername"
              value={formData.customername}
              onChange={handleChange}
            />
          </div>
          <div className="col-ls-12 roominp form-group">
            <label htmlFor="date">Booking Date</label>
            <input
              type="text"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="col-ls-12 roominp form-group">
            <label htmlFor="starttime">Start Time</label>
            <input
              type="number"
              className="form-control"
              id="starttime"
              name="starttime"
              value={formData.starttime}
              onChange={handleChange}
            />
          </div>
          <div className="col-ls-12 roominp form-group">
            <label htmlFor="endtime">End Time</label>
            <input
              type="number"
              className="form-control"
              id="endtime"
              name="endtime"
              value={formData.endtime}
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

export default Book;
