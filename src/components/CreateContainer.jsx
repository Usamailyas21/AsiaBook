import React, { useState } from 'react'
import { MdBook } from 'react-icons/md';
import { categories } from "../utils/Data";
import {motion} from  'framer-motion'

const CreateContainer = () => {
  const[title,setTitle] = useState('');
  const[price,setPrice] = useState('');
  const[category,setCategory] = useState(null);
  const[imageAsset,setImageAsset] = useState(null);
  const[fields,setFields] = useState(false);
  const[alertStatus,setAlertStatus] = useState("danger");
  const[msg,setMsg] = useState(null);
  const[isLoading,setIsLoading] = useState(false);


  return (
    <div className='w-full min-h-screen flex items-center justify-center '>
        <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
         {fields && (
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
            alertStatus === "danger"
            ? "bg-red-400 text-red-800"
            : "bg-emerald-400 text-emerald-800"
            }`}
            >
            {msg}
            </motion.p>
          )}
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdBook className='text-xl text-gray-700'/>
            <input  
            type='text't
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder='Give Me a Title'
            className='w-full h-full text-lg bg-transparent font-semibold 
            outline-none border-none placeholder:text-gray-400 text-textColor'
            />
          </div>
          <div className='w-full'>
            <select onChange={(e)=> setCategory (e.target.value)}
            className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
            >
              <option value='other' className='bg-white'>Select Publisher</option>
              {
                categories && categories.map(item=>(
                  <option key={item.id} className='text-base border-0 outline-none position-fixed capitalize bg-white text-headingColor' 
                  value={item.urlParaName}
                  >
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
    </div>
  );
}

export default CreateContainer