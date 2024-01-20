import React from 'react'

function Header() {
 
  return (
   <header className='  flex '>
   <div className='w-8/12 flex flex-col justify-center items-center'>
 <div className=' w-6/12 flex items-center justify-center gap-2'>
 <div className=' w-2/12 p-2 flex justify-center items-center'>
<img  className='rounded-lg'src="https://media.istockphoto.com/id/1226884190/vector/white-medical-hospital-building-with-cross-icon-isolated-with-long-shadow-medical-center.jpg?s=612x612&w=0&k=20&c=MpI4nxPRGakSuMKqVm7cxKjzaB5_H35CKXJ1zf0dnTU=" alt="" />
 </div>
 <div className=' flex flex-col justify-start'>
<div>
<h1 className='font-bold text-lg'>KASTHURBA HOSPITAL</h1>
</div>
<div className='flex justify-start items-start'>
<h4 className='font-bold text-md'>MANIPAL</h4>
</div>
<div>
<h6 className='font-bold text-sm'>Hospital of KMC Manipal,a unit of Mahe</h6>
</div>
 </div>
 </div>

 <div className=' w-full flex flex-col justify-end items-end'>
<div className=' w-8/12 px-10'>
<h1 className='font-bold text-2xl '>OP DRUGS PRESCRIPTION</h1>
</div>
<div className=' flex justify-center items-center w-5/12'>
<h1 className='text-sm font-bold'>PH-0820-4566-7848-9033</h1>
</div>
 </div>
 
   </div>
<div className=' w-3/12 flex flex-col justify-end items-end mb-12'>
<div className='w-6/12 flex justify-center items-center'>
<img className='w-5/12 rounded-lg'src="https://static.vecteezy.com/system/resources/previews/020/273/696/original/hospital-icon-for-your-website-design-logo-app-ui-free-vector.jpg" alt="" />
</div>
<div className=' w-6/12 flex justify-center items-center'>
<h1 className='font-bold '>KH/PRESC/859194</h1>
</div>
</div>
   
   </header>
   
  )
}

export default Header
