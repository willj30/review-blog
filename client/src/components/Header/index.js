import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Auth from "../../utils/auth";
import API from "../../utils/API";
import SearchForm from "../MovieComponents/SearchForm";

const Header = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchMovie = (query) =>
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));

  useEffect(() => {
    if (result.Title) {
      navigate(`/movies/${result.Title}`);
    }
  }, [result.Title]);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3">
      <div className="container flex-row justify-space-between-lg ">
        <div>
          <Link className="text-light" to="/">
            <h1>Movie Snackers Blog</h1>
          </Link>
          <p>Where the best movie reviews earn snacks.</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              
              <Link className="btn btn-lg btn-info m-2" to="/me">
                My Profile
              </Link>
              <button className="btn btn-lg btn-log m-2" onClick={logout}>
                Logout
              </button>
              <SearchForm
                handleInputChange={(e) => setSearch(e.target.value)}
                handleFormSubmit={(e) => {
                  e.preventDefault();
                  searchMovie(search);
                }}
              />
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-log m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
