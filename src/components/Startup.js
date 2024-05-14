import React from 'react'
import g from  "./doctorimg.jpg"

export default function Startup() {
  return (
   
    <section className="hero" style={{backgroundImage:`url(${g})`}}>
    <div className="content">
    <h1 className='text-cyan-300'>Book An appointments With Doctor Now </h1>
    <p>
   There are many variations passages of Lorem lpsum available, but the majority have suffered alteration in some form, by injected humour,
    </p>
    <a href="#">Get Started</a>
    </div>
    </section>
    
  )
}
