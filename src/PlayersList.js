import React from "react";
import PlayerDetails from './PlayerDetails';
import Player from './Player';


class PlayersList extends React.Component {

  state = {
    players: []
  };


  componentDidMount() {
    this.setState({
      players: PlayerDetails
    });
  }

  voteHandler = playerId => {
    const votePlayer = this.state.players.map(player => {
      if (playerId === player.id) {
        return Object.assign({}, player, {
          votes: player.votes + 1
        });
      } else {
        return player;
      }
    });
    this.setState({
      players: votePlayer
    });
  };

  render() {
    const sortedPlayer = this.state.players.sort((a, b) => {
        return b.votes - a.votes;
    });

    const players = sortedPlayer.map(player => (
      <Player
      key={player.id}
      id={player.id}
      name={player.name}
      votes={player.votes}
      imageUrl={player.imageUrl}
      clubUrl={player.clubUrl}
      votePlayer={this.voteHandler}
      />
    ));

     return <div className="ui divided unstackable items main">  {players}</div> 
       
       
       
     
  }
}

export default PlayersList;