import React, { useState } from 'react';
import { Link, Outlet} from 'react-router-dom';
import useCustomQuery from './useCustomQuery';
function QueryHeroes() {
    const [time, setTime] = useState(3000);
    const onSuccess = (data) => {
        console.log('data fetching', data);
        if(data.length >= 4){
            setTime(false)
        }
    };

    const onError = (error) => {
        console.log('Error occured', error);
        setTime(false);
    }
    const {isLoading, data, isError, error, isFetching, refetch} = useCustomQuery({ onSuccess, onError})
    if(isFetching){
        return <h4>loading...</h4>
    }

    if(isError) {
        return <h3>{error.message}</h3>
    }
  return (
    <div>
        <h2>Super heroes List</h2>
        <button onClick={refetch}>Fetch Heroes</button>
        {
            data?.data.map( rs => (
                <h5 key={rs.id}>
                    <Link to={`/heroes/${rs.id}`}>{rs.name}</Link>
                </h5>
            ))
        }
        {/* {
            data.map(hero=>(
                <h3 key={hero}>{hero}</h3>
            ))
        } */}
    </div>
  )
}

export default QueryHeroes