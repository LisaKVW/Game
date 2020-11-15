
import React, { Component } from 'react'
import Axios from 'axios'
import TextForm from '../components/TextForm'
import ShowSearchGame from '../components/ShowSearchGame'


class GameReads extends Component {
  constructor() {
    super()
    this.state = {
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }
  }

  // componentDidMount() {
  //   this.getGenres()  //we did this to show the genres immediatly. We got the info from the APi and in
  // } //  componentDidMount() is loading it and showing our genres - as we are in a class its this.

  // getGenres = async () => {
  //   const res = await Axios.get('https://api.rawg.io/api/genres')
  //   console.log(res.data.results) //console log this- cause now we know that .results gives all the genres
  //   this.setState({ genres: res.data.results })
  // }

  getSearchResults = async (event) => {
    event.preventDefault()
    const res = await Axios.get(
      `https://api.rawg.io/api/games?search=${this.state.searchQuery}` // using template literal as we ${}
    )
    console.log(res.data.results) //this so we know what info to grab
    this.setState({
      searchResults: res.data.results,
      searched: true,  //this is a toggle
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
        <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action"> Search game
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