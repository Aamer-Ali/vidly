import React from "react";
import { propTypes } from "prop-types";
const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>MovieForm -- id = {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
