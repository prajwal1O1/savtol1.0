import React from 'react'

export default function Hero1() {
  return (<>
    <div>
        <h1 className='text-4xl  text-center mt-10 font-bold '>Meet our Doctors</h1>
        <h1 className='text-center mt-5'>Our focus is on, offering a wide range of programs and events aimed at fostering a deeper understanding and appreciation of Ayurveda.

</h1>
    </div>


    <div className='lg:columns-4 md:columns-2 lg:mt-14 lg:mb-20 lg:ml-20 columns-1 w-full  '>

    <div className=' ml-9  '>
          <img  src={require('./79ada274-18c7-4d45-9c42-66cd6095931a.jpeg')} alt="" class="md:size-40 size-72 rounded-full  " />
          <h1 className=' lg:mt-10 lg:ml-14  '>Name</h1>
          <h2 className=' '>Ayurveda Practitioner</h2>
    </div>
    <div className='sm:mt-10   '>
          <img  src={require('./79ada274-18c7-4d45-9c42-66cd6095931a.jpeg')} alt="" class="md:size-40 size-72 rounded-full " />
          <h1 className='mt-10 lg:ml-14 '>Name</h1>
          <h2 className=''>Ayurveda Practitioner</h2>
    </div>
    <div className='sm:mt-10 '>
          <img  src={require('./79ada274-18c7-4d45-9c42-66cd6095931a.jpeg')} alt="" class="md:size-40 size-72 rounded-full " />
          <h1 className='mt-10 lg:ml-14 '>Name</h1>
          <h2 className=''>Ayurveda Practitioner</h2>
    </div>
    <div className='sm:mt-10 '>
          <img  src={require('./79ada274-18c7-4d45-9c42-66cd6095931a.jpeg')} alt="" class="md:size-40 size-72 rounded-full " />
          <h1 className='mt-10 lg:ml-14 '>Name</h1>
          <h2 className=' '>Ayurveda Practitioner</h2>
    </div>




    </div>
    </>
  )
}
