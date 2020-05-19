import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './season-notice.css';

const Seasons = () => {
  const [hasError, setErrors] = useState(false);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchSeasonData = async() => {
      const res = await fetch("https://homesteadfunctionapp.azurewebsites.net/homestead/api/v1/seasons");    

      // so here working out if have data saved in localStorage
      const savedData = localStorage.getItem("homestead-seasonal-todo");
      if(savedData) {
        // set mount as false so it doesn't call azure
        mounted = false;
        setSeasons(JSON.parse(savedData));     
      }

      if(mounted) {
        res.json()
          .then(res => {
            let data = res;
            // save to state
            setSeasons(data);
            // save to localstorage
            localStorage.setItem("homestead-seasonal-todo",JSON.stringify(data));           
          })
          .catch(err => setErrors(err));
      }
    };
    // due to useEffect you put function to get data within useEffect
    fetchSeasonData();

    return () => {
      mounted = false;
    }
  },[]);
  
  // loading
  if(seasons.length === 0) {
      return <div id="loader" className="text-center text-light" >
             <FontAwesomeIcon className ='font-awesome' icon={faSpinner} />        
              <span>Loading data ...</span>
             </div>
  }  

  // icon image sizes
  const height = 80;
  const width = 80;
  // what season is it
  const seasonMonths = new Map()
  seasonMonths.set(1, 'summer') //jan
  seasonMonths.set(2, 'summer') // feb
  seasonMonths.set(3, 'autumn') //mar
  seasonMonths.set(4, 'autumn') //apr
  seasonMonths.set(5, 'autumn') //may
  seasonMonths.set(6, 'winter') //jun
  seasonMonths.set(7, 'winter') //jul
  seasonMonths.set(8, 'winter') //aug
  seasonMonths.set(9, 'spring') //sep
  seasonMonths.set(10, 'spring') //sep
  seasonMonths.set(11, 'spring') //nov
  seasonMonths.set(12, 'summer') //dec
  //getdate
  const today = new Date().getMonth() + 1;
  const todaySeason = seasonMonths.get(today);

  //filters out all other seasons
  return(
      <div className='season-notice'>
        <div className='title'><h2>{todaySeason.toUpperCase()}</h2></div>
          {!hasError ? (
            seasons.filter(data => data.season === todaySeason)
                  .map(data => {
                  const { id, iconUrl, crop, sow, seeding, harvest, complete } = data;
                    return (
                      <div  key={id} className={complete ? 'season-notice-completed' : 'season-notice-todo'}>
                          <img  className='season-url' src={`/images/${iconUrl}`} alt='vegpic' style={{height, width}}/>
                          <div className='season-crop'>{crop}</div>
                          <div className='season-sow'>{sow ? 'Sow' : ''}</div>
                          <div className='season-plant'>{seeding ? 'Plant' : ''}</div>
                          <div className='season-harvest'>{harvest ? 'Harvest' : ''}</div>
                      </div>
                    );
                  })
          ) : (
            <span>Has error: {JSON.stringify(hasError)}</span>
          )}
  </div>
  );
};
export default Seasons;

//TODO -
/*
  [] funky text
  [x] loading feature
  [x] use localStorage
  [] Title with current season & background pic of corresponding season
  [] animate spinner on loading feature
*/