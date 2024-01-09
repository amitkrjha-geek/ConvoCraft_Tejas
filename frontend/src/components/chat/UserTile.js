import React, { useState } from 'react'

const UserTile = () => {
  return (
    
    
    <div className="bg-white px-3 flex items-center hover:bg-green-300 bg-slate-100 cursor-pointer">
         <div>
          <img className="h-12 w-12 rounded-full"
           src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjE4MTY0NzQ3/harrison-ford-9298701-1-sized.jpg"/>
          </div>
          <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
          <div className="flex items-bottom justify-between">
           <p className="text-grey-darkest">
             Harrison Ford
           </p>
           <p className="text-xs text-grey-darkest">
             12:45 pm
            </p>
            </div>
           <p className="text-grey-dark mt-1 text-sm">
            Tell Java I have the money
             </p>
           </div>
   
  </div>
                
    
                    
  )
}

export default UserTile