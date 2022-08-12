import React, { useState } from 'react'
import { useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchColors = (pageNum) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNum}`);
}
function PginatedQueries() {
    const [page, setPage] = useState(1);
    const query = useQuery( ['colors', page], ()=>fetchColors(page), {
        keepPreviousData: true,
    });
    const data = query.data?.data;

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
        data.map(dt => (
            <h4 key={dt.id}>{dt.label}</h4>
        ))
    }
    <button onClick={()=>setPage(page => page - 1)} disabled={page === 1}>Previous page</button>
    <button onClick={()=> setPage(page => page + 1)} disabled={page === 4}>Next page</button>
    </div>
  )
}

export default PginatedQueries