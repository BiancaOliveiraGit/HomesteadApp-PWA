import React, { useState, useEffect } from "react";
import './season-notice.css';

const Seasons = () => {
  const [hasError, setErrors] = useState(false);
  const [seasons, setSeasons] = useState([]);
  //const [todaySeason, setTodaySeason] = useState('');

  async function fetchSeasonData() {
    const res = await fetch("https://homesteadfunctionapp.azurewebsites.net/homestead/api/v1/seasons");
    res
      .json()
      .then(res => setSeasons(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchSeasonData();
  },[]);
  
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
  //filter out all other seasons

  return(
      <div className='season-notice'>
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
            //<p>Loading...</p>
            <span>Has error: {JSON.stringify(hasError)}</span>
          )}
</div>
  );
};
export default Seasons;

//TODO -
/*
  [] funky text
  [] loading feature
  [] use localStorage
*/