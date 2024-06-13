import React from 'react'

export default function Players() {
  return (
    <div className='Container'>
        <div className='Column'>
            <div className='Card'>
                <img src='images/cr.jpg' alt=''/>
                <h2>Christiano Ronaldo</h2>
                <p className='title'>Manchester Unitied</p>
                <button className='Detail' href='#Detail'>Detail</button>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='images/kante.jpg' alt=''/>
                <h2>N'Colo Kante</h2>
                <p className='title'>Chelsea</p>
                <button className='Detail' href='#Detail'>Detail</button>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='images/messi.jpg' alt=''/>
                <h2>Lionel messi</h2>
                <p className='title'>PSG</p>
                <button className='Detail' href='#Detail'>Detail</button>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='images/neymar.jpg' alt=''/>
                <h2>Neymar Junior</h2>
                <p className='title'>PSG</p>
                <button className='Detail' href='#Detail'>Detail</button>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='images/kane.jpg' alt=''/>
                <h2>Harry kane</h2>
                <p className='title'>Tottenham</p>
                <button className='Detail' href='#Detail'>Detail</button>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='images/haaland.jpg' alt=''/>
                <h2>Erling Haaland</h2>
                <p className='title'>Manchester City</p>
                <button className='Detail' href='#Detail'>Detail</button>
            </div>
        </div>
    </div>
  )
}
