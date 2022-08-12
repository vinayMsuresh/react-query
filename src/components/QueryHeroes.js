import React, { useState } from 'react';
import { Link, Outlet} from 'react-router-dom';
import {useCustomQuery, useAddSuperHero} from './useCustomQuery';
function QueryHeroes() {
    const [time, setTime] = useState(3000);
    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('');
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

    const { mutate } = useAddSuperHero();
    const {isLoading, data, isError, error, isFetching, refetch} = useCustomQuery({ onSuccess, onError});

    const addHero = () => {
        const hero = { name, alterEgo};
        mutate(hero);
    }
    if(isFetching){
        return <h4>loading...</h4>
    }

    if(isError) {
        return <h3>{error.message}</h3>
    }
  return (
    <div>
        <h2>Super heroes List</h2>
        <input type='text' placeholder='Enter name' onChange={e=>setName(e.target.value)} />
        <input type='text' placeholder='Enter alterEgo' onChange={e=>setAlterEgo(e.target.value)} />
        <button onClick={addHero}>Add hero</button>
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