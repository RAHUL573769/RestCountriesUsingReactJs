import React from 'react';
import './Country.css'
const Country = (country) => {

    console.log(country)
    return (
        <div className='single'>

        
            {

            <div>   <p>Country Name:{country.country.name.official}</p>
              <p>Capital:{country.country.capital}</p>
              <p>Population:{country.country.population}</p>
              <img src={country.country.flags.png} alt="" />
              
              
              </div>
             
            }
        </div>
    );
};

export default Country;