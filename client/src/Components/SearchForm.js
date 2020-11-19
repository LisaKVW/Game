import React from 'react'

const SearchForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      name="searchQuery"
      value={props.value} 
      placeholder="Search Games"
      onChange={props.onChange} 
    >
    </input>
    <button className="btn waves-effect waves-light indigo darken-4" name="action" >Search
                        <i className="material-icons right">send</i>
    </button>
  </form>
)

export default SearchForm
