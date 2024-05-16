import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Hero1() {
  return (<>
    <div className='mt-24'>
        <h1 className='text-4xl  text-center mt-10 font-bold '>Meet our Doctors</h1>
        <h1 className='text-center mt-5'>Our focus is on, offering a wide range of programs and events aimed at fostering a deeper understanding and appreciation of Ayurveda.

</h1>
    </div>


    <div className='lg:columns-3 md:columns-2 lg:mt-14 lg:mb-20 lg:ml-28 columns-1 w-full  '>

    <div className=' ml-9  '>
          <img  src={require('./WhatsApp Image 2024-04-25 at 8.54.48 PM.jpeg')} alt="" class="md:size-40 size-72 rounded-full  " />
          <h1 className=' lg:mt-10 lg:ml-14  '>Samir</h1>
          <h2 className=' '>Ayurveda Practitioner</h2>
          <Link className=""><FaInstagram color='#E1306C' className ="mt-2 ml-14 "size={30} /></Link>

    </div>
    <div className='sm:mt-10   '>
          <img  src={require('./Screenshot (34).png')} alt="" class="md:size-40 size-72 rounded-full " />
          <h1 className='mt-10 lg:ml-14 '>Aditi</h1>
          <h2 className=''>Ayurveda Practitioner</h2>
          <Link className=""><FaInstagram color='#E1306C' className ="mt-2 ml-14 "size={30} /></Link>

    </div>
    <div className='sm:mt-10'>
          <img  src={require('./d05ac2e3-14f4-4d48-808e-a910650ae371.jpg')} alt="" class="md:size-40 size-72 rounded-full " />
          <h1 className='mt-10 lg:ml-14'>Prajwal</h1>
          <h2 className=''>Ayurveda Practitioner</h2>
          <Link className=""><FaInstagram color='#E1306C' className ="mt-2 ml-14 "size={30} /></Link>

    </div>
    {/* <div className='sm:mt-10 '>
          <img  src={require('./79ada274-18c7-4d45-9c42-66cd6095931a.jpeg')} alt="" class="md:size-40 size-72 rounded-full " />
          <h1 className='mt-10 lg:ml-14 '>Name</h1>
          <h2 className=' '>Ayurveda Practitioner</h2>
    </div> */}




    </div>
    </>
  )
}
