import { useQueries } from '@tanstack/react-query'
import React from 'react';
import axios from 'axios';

const heroDetails = ({queryKey}) => {
    const id = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}
function DynamicParallel({ ids }) {
    const results = useQueries({
        queries: 
        ids.map(id=> {
            return {
                queryKey:['heroes', id], queryFn: heroDetails, staleTime: Infinity
            }
    }
        )
    });
    console.log(results);
  return (
    <div>DynamicParallel</div>
  )
}

export default DynamicParallel