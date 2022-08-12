import React, { useState } from 'react'
import { useInfiniteQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchColors = ({pageParam = 1}) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
}
function InfiniteQueries() {
    const query = useInfiniteQuery( ['colors'], fetchColors, {
        getNextPageParam: (_lastPage, pages) => {
            if(pages.length < 4) {
                return pages.length + 1;
            } else {
                return undefined;
            }
        }
    });
    const data = query.data;

    if(query.isLoading) {
        return <h2>Loading....</h2>
    }
    if(query.isError) {
        return <h2>{query.error.message}</h2>
    }
  return (
    <div>
        <h2>Colors list</h2>
    {
        data?.pages.map((group, index) => (
            <React.Fragment key={index}>
                {
                    group.data?.map(dt => (
                        <h4 key={dt.id}>{dt.label}</h4>
                    ))
                }
                </React.Fragment>
           
        ))
    }
    <button onClick={query.fetchNextPage} disabled={!query.hasNextPage}>Load more</button>
    </div>
  )
}

export default InfiniteQueries