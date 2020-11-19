import React, { Component } from 'react'
import SearchForm from '../Components/SearchForm'
import Axios from 'axios'
import SearchCard from '../Components/SearchCard'

export default class SearchGames extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      searchResults: [],
      searched: false
    }
  }


  getSearchResults = async (event) => {
    event.preventDefault()
    const res = await Axios.get(
      `https://api.rawg.io/api/games?search=${this.state.searchQuery}` 
    )
    console.log(res.data.results) 
    this.setState({
      searchResults: res.data.results,
      searched: true, 
      searchQuery: ''  
    })
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value }) 
  } 

  render() {
    console.log(this.props)
    return (
      <div 
        style={{
        backgroundImage: "url('https://images.pexels.com/photos/4522996/pexels-photo-4522996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
        backgroundSize: "cover", minHeight: "91vh", paddingTop: "5vh"
        }}>
        <SearchForm
          onChange={this.handleChange}
          value={this.state.searchQuery}
          onSubmit={this.getSearchResults}
        />
        {this.state.searched ? (  
          <div className="search">
            <h2>Search Results</h2>
            <section className="search-results container-grid">
              {this.state.searchResults.map((result) => (
                <SearchCard
                  key={result.id}
                  name={result.name}
                  rating={result.rating}
                  image={result.background_image}
                />
              ))}
            </section>
          </div>
        ) : null}
      </div>
    )
  }
}

