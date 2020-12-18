import React from 'react'
import {Route, Switch} from 'react-router-dom'
import BlogsContainer from './Containers/BlogsContainer'
import SavedBlogs from './Containers/SavedBlogs';
import './App.css';


// Route => listen for the url path

class App extends React.Component{

  render(){
    return (
      <div className="App">
      <Switch>
        <Route path="/home" render={()=> <h1>Welcome!</h1>}/>
        <Route path="/blogs" component={BlogsContainer}/>
      </Switch>

      </div>
    );
  }
}



export default App;
