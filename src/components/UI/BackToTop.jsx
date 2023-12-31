import React from 'react'

import '../../styles/backToTop.css'

import { useEffect, useState } from 'react'

const BackToTop = () => {

const [BackToTop, setBackToTop] = useState(false);

useEffect(()=> {
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 100) {
            setBackToTop(true)
        } else{
            setBackToTop(false)
        }
    })
},[])

const scrollUp = () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

  return (
    <div>
        {BackToTop && (
            <button className='backToTop' style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                width: "50px",
                height: "50px",
                fontSize: "50px",
            }}
            onClick={scrollUp}
            >^</button>
        )}

    </div>
  )
}

export default BackToTop