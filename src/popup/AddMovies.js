import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const AddMovies = ({ modal, toggle, save }) => {
  const [values, setValues] = useState({
    movieName: "",
    description: "",
    cast: "",
    date: "",
  });

  const [photo, setPhoto] = useState();

  const { movieName, description, cast, date } = values;

  let wrapper = React.createRef();

  const handleimagechange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhoto(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSave = () => {
    let movieObj = {};
    movieObj["Movie"] = movieName;
    movieObj["Description"] = description;
    movieObj["Cast"] = cast;
    movieObj["Date"] = date;
    movieObj["Photo"] = photo;

    save(movieObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Movie</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Movie name</label>
            <input
              type="text"
              className="form-control"
              value={movieName}
              onChange={handleChange("movieName")}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              rows="5"
              onChange={handleChange("description")}
              value={description}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Cast</label>
            <textarea
              className="form-control"
              rows="3"
              value={cast}
              onChange={handleChange("cast")}
            ></textarea>
          </div>

          <div>
            <Label for="exampleDate">Release Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              onChange={handleChange("date")}
            />
          </div>

          <div ref={wrapper} className="form-group mt-2">
            <Label for="exampleFile">File</Label>
            <Input type="file" accept="image/*" onChange={handleimagechange} />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Add
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddMovies;
