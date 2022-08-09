import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TraditionalHeroes() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            try{
                const res = await axios.get('http://localhost:4000/superheroes');
                setData(res.data);
                setLoading(false);
            }
            catch(e) {
                setError(e.message);
                setLoading(false);
            }
            
        }
        fetchData();
    },[]);

    if(loading) {
        return <h6>loading...</h6>
    }

    if(error) {
        return <h6>{error}</h6>
    }

  return (
    <div>
        <h3>Super heroes list</h3>
        {data.map(rs=> (
            <h4 key={rs.id}>{rs.name}</h4>
        ))}
    </div>
  )
}

export default TraditionalHeroes