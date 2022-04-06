import React, { useState } from 'react';

//Parent Component

interface Props {
    title:string;
    thought:string;
}

function SocialPosts({title, thought}:Props) {
   const [newThought, setnewThought] =useState ('')

   


   function deleteThought(title:string, thought:string) {
     setnewThought(prev => ...prev.slice(0), index),
   }
   

    
   setnewThought(prev => [...prev, newThought]);

    return (
      <div className="SocialPosts">
          
          <header>
              <h1>My Thoughts</h1>
          </header>

         <p>
                <button type='submit' onClick = {()=> setnewThought("New Thought")}>New Thought</button>
         </p>

         

         



         

          
        
      </div>
    );
  }
  
  export default SocialPosts;
  