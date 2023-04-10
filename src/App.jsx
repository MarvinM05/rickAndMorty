import { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location'
import Residents from './components/Residents';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Loader from './components/Loader';

function App() {

  const random = Math.round(Math.random() * 126)

  const [location, setLocation] = useState({})
  const [idLocation, setIdLocation] = useState(random)
  const [loaderR, setLoaderR] = useState(true)

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then((res) => setLocation(res.data))
      .catch((error) => console.error(error))
      .finally(() => {

        setTimeout(() => {
          setLoaderR(false)
        }, 2000)
      })
    
    
    // console.log(location);
  }, [idLocation]);


  const newId = (id) => {
    setIdLocation(id)
  }

  return (
    <div className="App">
      {loaderR && <Loader />}
      <Header />
      <div className="app-components">
        <h2 className="app-tittle">¡Welcome to the crazy universe!</h2>
        <Form submitSearch={newId} />
        <Location locationData={location} />
        <ul className="residents">
          {location?.residents?.map((resident) => (
            <Residents key={resident} rickData={resident} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
