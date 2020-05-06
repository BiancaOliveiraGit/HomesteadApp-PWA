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

/*
      <div id="loader" className="text-center text-light" >
      <FontAwesomeIcon className ='font-awesome' icon={faSpinner} />        
        <p>Loading data ...</p>
      </div>
      */

/*
 <div className="App" fluid={true}>
    <div id="loader" className="text-center text-light" >
    */
//search={search}
/*
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="mobile-web-app-capable" content="yes">

    <!-- Styles -->
    <link rel="stylesheet" href="/modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">

  </head>
  <body class="bg-info">

    <main class="p-2">
      <div id="messages" class="container-fluid">
        <div id="loader" class="text-center text-light" style="margin-top:10rem;">
          <i class="fas fa-spinner fa-2x fa-pulse"></i>
          <p>Loading Messages</p>
        </div>
      </div>
    </main>

    <div class="container-fluid fixed-bottom">
      <div id="toolbar" class="row bg-dark">
        <div class="col p-2 d-flex">

          <button data-toggle="modal" data-target="#viewfinder" id="camera" class="fas fa-camera fa-lg px-3 mr-2 text-light border-light bg-dark rounded-circle"></button>
          <textarea id="caption" placeholder="Image Caption..." style="resize:none;" maxlength="120" class="flex-grow-1 w-100 rounded border-light align-middle pr-5"></textarea>
          <a id="send" style="right:1.25rem; bottom:1.25rem; padding: 0.5rem;" class="fas fa-paper-plane fa-lg position-absolute text-dark"></a>

        </div>
      </div>
    </div>

    <!-- Camera Modal -->
    <div id="viewfinder" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog fixed-bottom" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-body p-1 text-center">

            <video id="player" autoplay class="w-100 rounded bg-white" style="height:300px;"></video>
            <button data-dismiss="modal" type="button" id="shutter" class="fas fa-circle fa-3x rounded-circle bg-white text-danger p-1 my-2"></button>

          </div>
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <script src="/modules/jquery/dist/jquery.min.js"></script>
    <script src="/modules/bootstrap/dist/js/bootstrap.min.js"></script>

  </body>
</html>
*/