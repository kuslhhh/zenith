import React from 'react'
import TeamSwitcher from './teamSwitcher'

export default function Navbar() {
   return (
      <nav className='flex justify-between items-center px-4 py-2'>
         <div className='flex items-center gap-12'>
            <TeamSwitcher/>
         </div>
      </nav>

   )
}
