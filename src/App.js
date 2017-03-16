import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import Pagecreateproject from './pages/Create-project/Create-project.js';
import Home from './Home.js';

//Routes
class App extends React.Component {


 render() {
     return (
       <Router history={browserHistory}>
           <Route path="/" component={Home}/>
           <Route path="Home-connected" component={Pagecreateproject}/>
           <Route path="create-a-project" component={Pagecreateproject}/>
           <Route path="all-projects" component={Pagecreateproject}/>
           <Route path="project" component={Pagecreateproject}/>
           <Route path="edit-project" component={Pagecreateproject}/>
           <Route path="profile" component={Pagecreateproject}/>
           <Route path="my-projects" component={Pagecreateproject}/>
       </Router>
   );
 }

}

export default App;
