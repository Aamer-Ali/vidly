// import React from "react";
// // import { propTypes } from "prop-types";
// const MovieForm = ({ match, history }) => {
//   return (
//     <div>
//       <h1>MovieForm -- id = {match.params.id}</h1>
//       <button
//         className="btn btn-primary"
//         onClick={() => history.push("/movies")}
//       >
//         Save
//       </button>
//     </div>
//   );
// };

// export default MovieForm;

import { Joi } from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import Form from "./common/form";
import React from "react";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genre: [],
    error: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  componentDidMount() {
    const genre = getGenres();
    this.setState({ genre });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie.id,
      title: movie.title,
      genre: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div className="container col-xl-4 col-sm-4	col-md-4	col-lg-4 loginContainer">
        <h4 className="text-center font-italic">
          <u>Register</u>
        </h4>
        <form onSubmit={this.handleSubmit}>
          {/* Insted of using Input markup here we have created the method renderinput 
          with arguments name and label we call method from here with name and label we want,
          and that function will return a button markup with that name and label. 
          [Check the function defination for that]  */}
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genre)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}

          {/* Insted of using button markup here we have created the method renderButton with argument label 
          we call method from here with label we want. and that function will return a button markup with 
          that label. [Check the function defination for that]  */}
          <div className="text-center">{this.renderButton("Save")}</div>
        </form>
      </div>
    );
  }
}

export default MovieForm;
