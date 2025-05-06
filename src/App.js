import React, { useEffect, useState } from 'react';
import './index.css';
import List from './list';
import spinner from './Spinner-3.gif';
import errorIcon from './icons8-error.gif';


function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => {
          return res.json()
          });
      setData(response);
      setLoading(false);
      setError(null);
    } 
    catch (err) {
      setLoading(false);
      setError(err.message);
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading"><div><img src={spinner} alt="spinner" /></div> Loading...</div>
  }


  return (
    <div className="App">
      <div className="header"><h1>COMPANY STAFF BIODATA</h1></div>
      <div className='content'>
        {error &&
        <div className="errorMessage"><div><img src={errorIcon} alt="error" /></div>{ error }</div>
        }
        {data &&
        data.map((data, i) => {
          return (
          <List 
          key={i}
          names={data.name}
          emailAddress={data.email}
          phoneNumber={data.phone}
          website={data.website}
          />
          
        )})}
      </div>
      
    </div>
  );
}

export default App;
