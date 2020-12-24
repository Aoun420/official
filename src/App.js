import logo from './logo.svg';
import './App.css';
import Forex from './WebsiteFiles/Forex'
import Videos from './WebsiteFiles/Videos'
 import {BrowserRouter as Router,Switch, Route,Link,Redirect} from 'react-router-dom'
import Header from './WebsiteFiles/Header';
import notFoundPage from './WebsiteFiles/notFoundPage'
import Chat from './WebsiteFiles/Chat'
function App() {
  return (
    <div className="App">
      {/* <Forex/> */}
      {/* <Videos/> */}
      {/* <Chat/> */}
      <Router>
       
      <Route path="/" component={Forex}/>
        <Route exact path="/videos" component={Videos}/>
        <Route exact path="/notFoundPage" component={notFoundPage}/>
       
        
       </Router>  

    </div>
  );
}

export default App
