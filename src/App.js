import React from 'react';
import Header from './components/header';
import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Navfooter from './components/footer-nav';
import Seasons from './components/season-notice';

function App() {
  //const [isOnline, setOnline] = useState(false);
 // setOnline(false);
 const onlineValue = false;
 console.log('app value ' + onlineValue);

  return (
    <div className="main">
      <Header status={onlineValue}/>
      <Seasons />
      <Navfooter />
      </div>
  );
}

export default App;
