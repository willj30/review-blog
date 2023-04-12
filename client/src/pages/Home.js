import React from 'react';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';


import { QUERY_REVIEWS } from '../utils/queries';
import MovieDetail from '../components/MovieComponents/MovieDetail';


const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (
    <main>
      
      <div className=" flex-row justify-center">
        <div><MovieDetail/></div>
        <div
          className=" col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          
        </div>
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
      </div>
    </main>
  );
};

export default Home;
