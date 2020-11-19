import React, { Component } from 'react';
import Axios from 'axios'
import GameCard from '../Components/GameCard'

class AllGames extends Component {
  constructor() {
    super()
    this.state = {
      game: null,
      genres: []
    }
  }

  componentDidMount() {
    this.findAllGames()
  }

  findAllGames = async () => {
    try {
      const res = await Axios.get('https://api.rawg.io/api/genres')
      console.log(res.data.results)
      this.setState({ genres: res.data.results })
    } catch (error) {
      throw error
    }
  }
  // find game by genre
  findGame = async (gameId) => {
    console.log(gameId)
    try {
      const res = await Axios.get(`https://api.rawg.io/api/games/${gameId}`)
      console.log(res.data)
      this.setState({ game: res.data })
    } catch (error) {
      throw error
    }
  }

  render() {
    console.log(this.props)
    let genreCards = this.state.genres.map((genre, index) => {
      return (
        <div className="col s12 m4" key={index} >
          <div className="card">
            <div className="card-image">
              <img src={genre.image_background} style={{ height: "200px", objectFit: "cover" }} />
              <span className="card-title"> {genre.name}</span>
            </div>
            <div className="card-content">
              <ul>
                <li onClick={() => this.findGame(genre.games[0].id)}> {genre.games[0].name}</li>
                <li onClick={() => this.findGame(genre.games[1].id)}> {genre.games[1].name}</li>
                <li onClick={() => this.findGame(genre.games[2].id)}> {genre.games[2].name}</li>
                <li onClick={() => this.findGame(genre.games[3].id)}> {genre.games[3].name}</li>
                <li onClick={() => this.findGame(genre.games[4].id)}> {genre.games[4].name}</li>
                <li onClick={() => this.findGame(genre.games[5].id)}> {genre.games[5].name}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        { this.state.game !== null ?
          <GameCard {...this.props}
            game={this.state.game}
            authenticated={this.props.authenticated}
            currentUser={this.props.currentUser}
          />
          :
          <div>
            <h4> Current top 6 - Games by genre </h4>
            <div className="row ">
              {genreCards}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default AllGames