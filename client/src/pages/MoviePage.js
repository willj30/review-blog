import React from 'react';
import { useState, useEffect } from 'react';
import Container from '../components/MovieComponents/Container';
import Row from '../components/MovieComponents/Row';
import Col from '../components/MovieComponents/Col';
import Card from '../components/MovieComponents/Card';
import { useLocation , useParams} from 'react-router-dom';
import { QUERY_REVIEWS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import MovieInfo from '../components/MovieComponents/MovieInfo';
import API from '../utils/API';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';



const OmdbContainer = () => {
  // Set state for the search result and the search query
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');
  const { movieId } = useParams();

  // When the search form is submitted, use the API.search method to search for the movie(s)
  const searchMovie = (query) =>
   
  API.search(query)
    
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
     

  // When the component loads, use the API.search method to render a default search result
  // The empty optional array [] will cause the hook to only run one time after the component loads
  // Refer to https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    searchMovie(movieId);
  }, [movieId]);

  // Handler for input changes to the search form


  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(search);
  };

  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];
  
  // Destructure the result object to make the code more readable, assign them to empty strings to start
  const {
    Title = '',
    Poster = '',
    Director = '',
    Genre = '',
    Released = '',
    imdbRating = '',
    imdbID = '',
  } = result;


  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card >
            {Title ? (
              <><MovieInfo
              src={Poster}
                 title={Title}
                   
                  director={Director}
                  genre={Genre}
                  released={Released}
                  imdbRating={imdbRating}
                  
                  />
                  <br/>
                  <ReviewForm></ReviewForm>
                  </>
            ) : (
              <h3>No Results to Display</h3>
            )}


            
          </Card>
          
        </Col>
   
      </Row>
      <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewList
              reviews={reviews}
              title="Latest Reviews:"
            />
          )}
        </div>
    </Container>
  
  );
};

export default OmdbContainer;