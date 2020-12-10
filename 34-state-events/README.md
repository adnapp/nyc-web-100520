# State and Events 

## Questions
- Event handling 
  - forms 
- ref
- state v setState
- event handler
  - form.addEventListener
  - <button onChange={submitHandler}>
 - callback function 
  - form.addEventListener("submit", submitHandler())

functional setState: this.setState(function(){return {}})

this.setState({
  count: this.state.count + 1
});

updateCount() {
  this.setState((currentState) => {
    return { count: prevState.count + 1 }
  });
}

`${}`
 function submitHandler(){}