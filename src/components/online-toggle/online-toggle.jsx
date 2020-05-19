// online-toggle
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import './online-toggle.css'

const OnlineToggle = () => {
  
    const [isStatusOnline, setIsStatusOnline] = useState(false);
       
    useEffect(() => {
      GetStatus();
    },[]);

    // TODO check if this is correct when deploy & turn off wifi
    const GetStatus = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration('/app').then(function(registration) {
          if(registration) {
            setIsStatusOnline(true);
          }else{
            setIsStatusOnline(false);
          }
        });
      } else {
        setIsStatusOnline(false);
      }
    }

	return (
        <div>
            <Button id="online-btn" variant={isStatusOnline? "success" : "warning"}
            onClick={GetStatus}>
            {isStatusOnline ? 'Online' : 'Offline'}
            </Button>
        </div>
		)
};export default OnlineToggle

//not in use
/*
function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );
  }
  
  render(<LoadingButton />);
  */