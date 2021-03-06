import "./App.css";
import Movies from "./components/movies";

// import { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Cutomers from "./components/cutomers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "../src/components/common/navbar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registration_form";

function App() {
  return (
    <main className="container">
      <NavBar />
      <br />
      <Switch>
        <Route path="/movies/:id" component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/regiration" component={RegistrationForm}></Route>
        <Route path="/cutomers" component={Cutomers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies"></Redirect>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>
  );
}

export default App;
