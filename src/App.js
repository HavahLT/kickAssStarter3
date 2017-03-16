import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import Pagecreateproject from './pages/Create-project/Create-project.js';
import Homeconnected from './pages/Home-connected/Home-connected.js';
import Pageprojet from './pages/Pageprojet/Pageprojet.js';
import Home from './Home.js';

//Routes
class App extends React.Component {


 render() {
     return (
       <Router history={browserHistory}>
           <Route path="/" component={Home}/>
           <Route path="home-connected" component={Homeconnected}/>
           <Route path="create-project" component={Pagecreateproject}/>
           <Route path="all-projects" component={Pagecreateproject}/>
           <Route path="project" component={Pageprojet}/>
           <Route path="edit-project" component={Pagecreateproject}/>
           <Route path="profile" component={Pagecreateproject}/>
           <Route path="my-projects" component={Pagecreateproject}/>
       </Router>
   );
 }

}

export default App;
