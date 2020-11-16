
import React, { Component } from 'react'
import Axios from 'axios'
import TextForm from '../components/TextForm'
// import ShowSearchGame from '../components/ShowSearchGame'


class GameReads extends Component {
  constructor() {
    super()
    this.state = {
      upcoming: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }
  }


  getSearchResults = async (event) => {
    event.preventDefault()
    const res = await Axios.get(
      `https://api.rawg.io/api/games?search=${this.state.searchQuery}` // using template literal as we ${}
    )
    console.log(res.data.results) //this so we know what info to grab
    this.setState({
      searchResults: res.data.results,
      searchQuery: ''  //what you are actually searching- this will clear your search results
    })
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value }) //this is setting your value of our search bar
  } // this give our empty searchQuery array its value which goes to our function getSearchResults

  render() {
    return (
      <div>
        <TextForm
          onChange={this.handleChange}
          value={this.state.searchQuery}
          onSubmit={this.getSearchResults}
        />
        <h3> Search results: </h3>
        <button className="btn waves-effect waves-light indigo darken-4"
        > Search game
        <i className="material-icons right">send</i>
        </button>
        
      </div>
    )
  }
}
export default GameReads


//          onClick= {this.state.searchResults.map((result) => (
// key = { result.id }
// name = { result.name }
// rating = { result.rating }
// released = { result.released }
// platforms = { result.platforms }
// description = { result.description }
// image = { result.background_image }
