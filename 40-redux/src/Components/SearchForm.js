import React from 'react' 

function SearchForm(props){
    
    return (
        <>
    <h1>Search Form</h1>
    <form>
        <input type="text" value={props.searchTerm} onChange={props.changeHandler}/>
    </form>
        </>
    )
}

export default SearchForm