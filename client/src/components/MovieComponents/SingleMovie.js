import React from 'react';
import { useState, useEffect } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import MoviePoster from './MoviePoster';
import API from '../../utils/API';
import { Link } from 'react-router-dom';

const OmdbContainer = (props) => {
  // Set state for the search result and the search query
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');

  // When the search form is submitted, use the API.search method to search for the movie(s)
  const searchMovie = (query) =>
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));

  // When the component loads, use the API.search method to render a default search result
  // The empty optional array [] will cause the hook to only run one time after the component loads
  // Refer to https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    searchMovie('The Matrix');
  }, []);


  // Destructure the result object to make the code more readable, assign them to empty strings to start
  const {
    Title = '',
    Poster = '',
    imdbID = '',
  } = result;



  return (
    <Container>
      <Row>
        <Col size="md-12">    
            {Title ? (
                <><>    </>
                              <Link to={`/movies/${Title}`}>
                                
                              <MoviePoster
                                
                                  src={Poster}
                                   /></Link></> 
            ) : (
              <h3>No Results to Display</h3>
            )}
          
        </Col>
        <Col size="md-4">
        
        </Col>
      </Row>
    </Container>
  );
};

export default OmdbContainer;