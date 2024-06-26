import React from 'react'
import './tour.css'
import { useState } from 'react'
export default function Tour({id,image,info,name,price,removeTour
}) {
  
  
    const [readMore,setReadMore] = useState(false)
  
    return (
     

    <article className='single-tour'>
        <img src={image} alt={name}></img>
        <footer> <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
            </div>
            <div>
            <p>
              {/*   {info} */}

              {readMore ? info : `${info.substring(0,200)}...s`}
              <button onClick={()=> setReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
              </button>
            </p>
            <button className='delete-btn' onClick={()=> removeTour(id)}>
                not interested
            </button>
            
            </div>
            
            
            </footer>
    </article>
  )
}
