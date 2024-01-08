import React, { useState } from 'react'

const UserTile = () => {
  return (
    
    <div class="bg-grey-lighter flex-1 overflow-auto">
    <div class="bg-white px-3 flex items-center hover:bg-green-300 bg-slate-100 cursor-pointer">
         <div>
          <img class="h-12 w-12 rounded-full"
           src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjE4MTY0NzQ3/harrison-ford-9298701-1-sized.jpg"/>
          </div>
          <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
          <div class="flex items-bottom justify-between">
           <p class="text-grey-darkest">
             Harrison Ford
           </p>
           <p class="text-xs text-grey-darkest">
             12:45 pm
            </p>
            </div>
           <p class="text-grey-dark mt-1 text-sm">
            Tell Java I have the money
             </p>
           </div>
   </div>
  </div>
                
    
                    
  )
}

export default UserTile