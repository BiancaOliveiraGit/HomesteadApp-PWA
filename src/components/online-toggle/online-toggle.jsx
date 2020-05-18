// online-toggle
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import './online-toggle.css'

const OnlineToggle = () => {
  
    const [isStatusOnline, setIsStatusOnline] = useState(false);
       
    useEffect(() => {
      GetStatus();
      return () => {
        // Clean up       
      };
    },[isStatusOnline]);

    const GetStatus = () => {
      if ('serviceWorker' in navigator) {
        setIsStatusOnline(true);
      }else {
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