import React from 'react'
import players from '../shared/ListOfPlayers'
export default function Players() {
  return (
    <div className='Container'>
        {players.map((player)=>(
            <div className='Column'>
                <div className='Card'>
                    <img src={player.img} alt=''/>
                    <h2>{player.name}</h2>
                    <p className='title'>{player.club}</p>
                    <button>Detail</button>
                </div>
            </div>
        ))}
    </div>
  )
}
