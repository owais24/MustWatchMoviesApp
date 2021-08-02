import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Cards = ({ movies, index, deleteMovie }) => {
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleDelete = (index) => {
    deleteMovie();
  };

  return (
    <div className="card-wrapper mr-10">
      <Card>
        <div
          class="card-top"
          style={{ "background-color": colors[index % 5].primaryColor }}
        ></div>
        <CardBody className="task-holder">
          <CardTitle tag="h5" style={{ color: "darkred" }}>
            {" "}
            Movie Name:-{movies.Movie}
          </CardTitle>
          <CardSubtitle
            tag="h6"
            className="mb-2 text-muted"
            style={{ color: "blanchedalmond" }}
          >
            Cast:- {movies.Cast}
          </CardSubtitle>
        </CardBody>
        <img
          width="100%"
          src={movies.Photo}
          alt="Card  cap"
          style={{
            width: 219,
            height: 100,
            marginLeft: 23,
            marginBottom: 10,
            border: "3px solid blue",
          }}
        />
        <CardText
          style={{
            color: "black",
            backgroundColor: "whitesmoke",
            marginTop: "5px",
            marginBottom: "5px",
            border: "2px solid thistle",
          }}
        >
          {" "}
          Release Date:- {movies.Date}
        </CardText>
        <CardBody>
          <CardText
            style={{
              color: "blanchedalmond",
              backgroundColor: "coral",
              marginBottom: "5px",
              border: "2px solid thistle",
            }}
          >
            {" "}
            Synopsis:- {movies.Description}
          </CardText>
          <div
            style={{
              position: "absolute",
              right: "20px",
              bottom: "0px",
              justifyContent: "space-between",
            }}
          >
            <i
              class="fas fa-trash-alt mr-3"
              style={{
                color: colors[index % 5].primaryColor,
                border: "solid",
                cursor: "pointer",
                marginRight: "30px",
                justifyContent: "space-between",
              }}
              onClick={handleDelete}
            ></i>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
