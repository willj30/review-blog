import React from 'react';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';


import { QUERY_REVIEWS } from '../utils/queries';
import SingleMovie from '../components/MovieComponents/SingleMovie';
import SecondMovie from '../components/MovieComponents/SecondMovie';
import ThirdMovie from '../components/MovieComponents/ThirdMovie';
import FourthMovie from '../components/MovieComponents/FourthMovie';
import FifthMovie from '../components/MovieComponents/FifthMovie';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (
    <main>
      
      <div className=" flex-row justify-center">
        <div className="posters img-poster">
        <div><SingleMovie>
          
          </SingleMovie>
        </div>
        <div><SecondMovie>
          
          </SecondMovie>
        </div>
        <div><ThirdMovie>
          
          </ThirdMovie>
        </div>
        <div><FourthMovie>
          
          </FourthMovie>
        </div>
        <div><FifthMovie>
          
          </FifthMovie>
        </div>
        </div>
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
