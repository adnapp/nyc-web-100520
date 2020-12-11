import React from 'react'
import BlogsList from './Containers/BlogsList'
import SavedBlogs from './Containers/SavedBlogs';
import './App.css';

class App extends React.Component{

  state={
    savedBlogs: []
  }

  addSavedBlog = (blogObject)=>{
    console.log("Inside of App click handler", blogObject)

    // Why spread operator?

    this.setState({savedBlogs: [...this.state.savedBlogs, blogObject]})

  }

  render(){
    return (
      <div className="App">
        <SavedBlogs savedBlogs={this.state.savedBlogs}/>
        <BlogsList addSavedBlog={this.addSavedBlog}/>
      </div>
    );
  }
}


export default App;
