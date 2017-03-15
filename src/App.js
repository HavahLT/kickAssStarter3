import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import Partenaires from './Partenaires/Partenaires';
import Home from './Home.js';

//Routes
class App extends React.Component {


 render() {
     return (
       <Router history={browserHistory}>
           <Route path="/" component={Home}/>
           <Route path="Home-connected" component={Partenaires}/>
           <Route path="create-a-project" component={Partenaires}/>
           <Route path="all-projects" component={Partenaires}/>
           <Route path="project" component={Partenaires}/>
           <Route path="edit-project" component={Partenaires}/>
           <Route path="profile" component={Partenaires}/>
           <Route path="my-projects" component={Partenaires}/>
       </Router>
   );
 }

}

export default App;
