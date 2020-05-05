// online-toggle
import React, { useState } from 'react';
import './online-toggle.css'
import Button from 'react-bootstrap/Button'


export default function OnlineToggle(status) {
  
    const [isStatusOnline, setStatusOnline] = useState(false);
    setStatusOnline(status);
    // useEffect(() => {
    //     if (status) {
    //         setOnline(status)
    //     }
    //   }, [isOnline, status]);


	return (
        <div>
            <Button id="online-btn" variant={isStatusOnline? "success" : "warning"}>
            {isStatusOnline ? 'Online' : 'Offline'}
            </Button>
        </div>

   
		)
}

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