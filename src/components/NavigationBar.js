import React from 'react'
export default function NavigationBar() {
  return (
    <div>
        <nav>
            <ul>
                <li className='active' href='#Home'>Home</li>
                <li href='#News'>News</li>
                <li href='#About'>About</li>
                <li href='#Contact'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}
