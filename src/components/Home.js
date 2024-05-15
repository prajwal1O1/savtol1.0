import React from 'react'
import Vision from './Vision'
import Teams from './Teams'
import Contactus from './Contactus'
import Services from './Services'
import Paragraph from './Paragraph'
import Aboutus from './Aboutus'
import Startup from './Startup'
import Hero1 from './Hero1'
export default function Home() {
  return (
    <div>
      <Vision/>
      <Hero1/>
      {/* <Teams/> */}
      <Contactus/>
      {/* <Services/> */}
      <Paragraph/>
      <Aboutus/>
      <Startup/>
      
    </div>
  )

}
