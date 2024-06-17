import React, { Component } from 'react'
import players from '../shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation'
export  class Main extends Component {
 constructor() {
    super();
    this.state= {
        player: players
        };
    }
    render() {
        return <PlayersPresentation player={this.state.player}/>
    }
 }
 export default Main
