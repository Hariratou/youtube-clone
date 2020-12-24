import React from "react";

const Player = (props) => {
    return (
        <div className="item">
             <div>
                 <img 
                 className="ui medium circular image centred" 
                 src={props.imageUrl} 
                 alt={props.name} />
             </div>

              <div className=" bottom aligned">
                 <div className="description">
                    <a> 
                        <i 
                        onClick={props.votePlayer.bind(this, props.id)} className="large up caret icon" />
                        {props.votes}
                    </a>
                    <p>{props.name}</p>
                 </div>

                    <div className="extra">
                        <span className="club">langage</span>
                        <img 
                            className="ui avatar image" 
                            src={props.clubUrl} 
                            alt={props.name} />
                    </div>
             </div>
        </div> 
    )
}

export default Player;