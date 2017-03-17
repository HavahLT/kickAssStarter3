import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import Pagecreateproject from './pages/Create-project/Create-project.js';
import Homeconnected from './pages/Home-connected/Home-connected.js';
import Pageprojet from './pages/Pageprojet/Pageprojet.js';
import EditAllProjects from './pages/Edit-all-projects-user/Edit-all-projects.js';
import Editprojet from './pages/Edit-projet/Edit-projet.js';
import Profile from './pages/Profile/Profile.js';
import Home from './Home.js';

//Routes
class App extends React.Component {


 render() {
     return (
       <Router history={browserHistory}>
           <Route path="/" component={Home}/>
           <Route path="home-connected" component={Homeconnected}/>
           <Route path="create-project" component={Pagecreateproject}/>
           <Route path="edit-project" component={Editprojet}/>
           <Route path="project" component={Pageprojet}/>
           <Route path="all-projects" component={EditAllProjects}/>
           <Route path="profile" component={Profile}/>
       </Router>
   );
 }

}

export default App;
