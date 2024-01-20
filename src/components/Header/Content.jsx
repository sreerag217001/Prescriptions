import React, { useRef } from 'react';
import Header from './Header';
import ReactToPrint from 'react-to-print';
import jsPDF from 'jspdf';



function Content(props, innerRef) {
  const contentRef = useRef();
  const generatePDF = () => {
    if (contentRef.current) {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.html(contentRef.current, {
        callback: function (pdf) {
          pdf.save('invoice.pdf');
        },
      });
    } else {
      console.error('contentRef is null');
    }
 };
  
  return (
    <div  >
      <div ref={contentRef}>

    
      <Header/>
  
    <div className=' flex flex-col items-center justify-center mt-2'>
    <div className=' w-full flex  justify-center items-center'>
     <div className=' w-60 flex justify-center items-center mr-48 ml-8'>
 <h1>Name: Pramitha Jena</h1>
     </div>
     <div className=' w-60 mr-24'>
      <h1>Date:18-12-2023 09:34AM
      </h1>
     </div>
    </div>
    <div className=' w-full flex  justify-center items-center'>
     <div className=' w-60 flex justify-center items-center mr-52'>
 <h1>Hosp No: 03115467</h1>
     </div>
     <div className=' w-60 mr-24'>
      <h1>Speciality: ORTHOPEIDICS
      </h1>
     </div>
    </div>
    <div className=' w-full flex  justify-center items-center'>
     <div className=' w-60 flex justify-center items-center mr-52'>
 <h1>Age: 32</h1>
     </div>
     <div className=' w-60 mr-24'>
      <h1>UnitName: ORT002
      </h1>
     </div>
    </div>
    <div className=' w-full flex  justify-center items-center'>
     <div className=' w-60 flex justify-center items-center mr-52'>
 <h1>Gender: F</h1>
     </div>
     <div className=' w-68 mr-4'>
      <h1>Doctor Name: DR KIRAN KUMAR V ACHARYA
      </h1>
     </div>
    </div>
    <div className=' w-full flex  justify-center items-center'>
     <div className=' w-76 flex justify-center items-center mr-48'>
 <h1>Address: NARENDRAPUR,SHIBA MANDIR SAHI,HINJILI,GANJAM DIST</h1>
     </div>
    </div>


    <table className=" bg-white border border-gray-300">
        <thead>
            <tr>
                <th class="py-2 px-1 border-b border w-20  border-black">SI NO</th>
                <th class="py-1 px-32 border-b border border-black">Name of the Medicine</th>
                <th class="py-2 px-4 border-b border border-black">Dosage</th>
                <th class="py-2 px-4 border-b border border-black">Duration</th>
                <th class="py-1 px-0 border-b border w-20 border-black">Qty</th>
                <th class="py-2 px-1 border-b border border-black">Instruction</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="py-2 px-4 border-b border border-black">1</td>
                <td class="py-2 px-4 border-b border border-black">SIS JOINT 15 CAPS STRIP
                <h6>Generic Name:ROSEHIP EXTRACT 275MG,DEVILS CLAW EXTRACT</h6>
                  <h6>100MG,BOSSWELLIA SERARA EXTRACT 307.5MG</h6>
                </td>
                <td class="py-2 px-4 border-b border border-black">0-1-0</td>
                <td class="py-2 px-4 border-b border border-black">1 YEAR</td>
                <td class="py-2 px-4 border-b border border-black">180</td>
                <td class="py-2 px-4 border-b border border-black">Alternate Days</td>
            </tr>
            <tr>
                <td class="py-2 px-4 border-b border border-black">2</td>
                <td class="py-2 px-4 border-b border border-black">ALOSTAR SR 200 MG
                <h6>Generic Name:ACECLOFENAC 200MG | SUSTAINED RELEASE</h6>
                </td>
                <td class="py-2 px-4 border-b border border-black">1-0-0</td>
                <td class="py-2 px-4 border-b border border-black">20 days</td>
                <td class="py-2 px-4 border-b border border-black">20</td>
                <td class="py-2 px-4 border-b border border-black">SOS FOR PAIN</td>
            </tr>
        </tbody>
    </table>


     <div className='w-full flex  items-center justify-center gap-5 border-b-5 border-black '>
    <div className=' flex flex-col justify-end items-end w-64'>
 <h1 className='font-bold' >Provisional diagnosis:</h1>
 <h1 className='ml-12 mt-12 font-bold'>Special Advice:</h1>
 <h1 className='ml-20 font-bold'>Next Visit:</h1>
 <h1 className='ml-8 font-bold'>Special Instruction:</h1>
 <h1 className='ml-32 font-bold'>Diet:</h1>
    </div>
    <div className=' flex justify-start flex-col items-center mt-2'>
  <p>Avascular Necrosis of Bilaterol Femoral Head (Status Post Left Core
   <p> Decompression) Right Total Hip ArtroPlasty on 22/12/2022 known case of Sickle</p>
   <p>Cell Anemia Biopsy report awaited (Biopsy number- S:20316/22) Scheme-ESI</p>
  </p>
  <h1 className='mr-16'>EXCERCISE AS ADVISED/DOD NOT SIT ON GROUND=DO NOT SQUAT</h1>
  
  <h1 className='mr-52 '>16/12/2024</h1>
  <h1 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur </h1>
  <h1 className='mr-72'>AVOID OILY AND SPICY FOOD </h1>
    </div>
    </div>
    <hr className='mt-2 border-t-2 border-black w-10/12  h-0 ' />



<div className=' w-full flex flex-col mr-56 '>


  <div className=' w-full flex items-center justify-center'>
 <div className=' w-4/12 flex justify-end items-center'>
 <h1 className='font-bold'>Date:</h1>
 </div>
 
 <hr className='ml-2 border-t-2 border-black w-24 mt-5 h-0' />
 <div className=' w-4/12 flex flex-col justify-center items-center'>
 <hr className='ml-2 border-t-2 border-black w-64 mt-10 h-0 ' />
 <div className=' flex justify-center items-start'>
<h1 className='text-sm font-bold'>Doctor Signature & Stamp</h1>
 </div>
  </div>

  
  
  </div>
  <div className=' flex justify-center items-center'>
<div className=' flex justify-end items-center w-4/12'>
<h1 className='font-bold'>Pharmasist Signature:</h1>
</div>
<hr className='ml-2 border-t-2 border-black w-24 mt-10 h-0 ' />
<div className=' w-4/12 flex justify-center items-center'>
<h1 className='font-bold'>Dr KIRAN KUMAR V ACHARYA</h1>
</div>
  </div>
  <div className=' flex justify-center items-center'>
<div className=' flex justify-start items-end w-4/12 ml-10 mt-5'>
<h1 className='font-bold'>Pharmasist Name:</h1>
<hr className='ml-2 border-t-2 border-black w-24 ml-68 h-0  ' />
</div>

  </div>
  
  </div>
  
 
  <hr className='ml-2 border-t-2 border-black w-10/12 mt-64 mb-5 h-0 ' />
  </div>
  </div>
  <div className=' w-full flex justify-end items-start'>
      <ReactToPrint
        trigger={() => (
          <button className='bg-red-500 text-white mt-5 px-8 py-2 rounded-md mr-44'onClick={() => generatePDF(contentRef.current)}>Download</button>
        )}
        content={() => contentRef.current}
      />
  
  </div>
  </div>
  
  )
}

export default React.forwardRef(Content);
