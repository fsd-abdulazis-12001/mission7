/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Button } from '@mui/material'
import React , { useState } from 'react'
 
import DialogModal from '../DialogModal'
import useDaftarSayaStore from '../../../stores/daftarsaya/useDaftarSayaStore';

const CardThumbnail = ({idf, image, top10, neweps, title,ignore,removeDaftarSaya}) => {
  
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClickOpenConfirm = () => {
   
    setOpenConfirm(true);
    console.log(openConfirm)
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };
   
  return (
    <>
        <DialogModal openConfirm={openConfirm} onClose={handleCloseConfirm} handleAgreConfirm={() => {removeDaftarSaya(idf) 
          setOpenConfirm(false) }} title={title} image={image} modalTitle={`Hapus ${title} dari Daftar Kamu?`}>
        
        </DialogModal>
        <div className='relative group rounded-md w-[95px] h-[143px]  sm:w-[200px] sm:h-[300px] transition-transform duration-300 hover:scale-110 '>
          <img src={image} alt={title} className='w-full h-full object-cover rounded-md ' />
          {top10 === true && <span className="absolute top-0 right-2 p-2 w-6 sm:w-8 sm:h-18 rounded-md text-center bg-[#B71F1D] text-white text-[6px] sm:text-xs font-bold">Top 10</span>}
          {neweps === true && <span className="absolute top-1 sm:top-3 left-1 sm:left-3 p-2 w-auto h-auto rounded-xl text-center bg-[#0F1E93] text-white text-[6px] sm:text-xs font-bold">Episode Baru</span>}
          {ignore !== true && <div className='absolute w-auto h-auto flex justify-center items-center z-120 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 trainsition-opacity duration-300 opacity-0 group-hover:opacity-100'>
            <Button variant="contained"  color="error" className=' rounded-xl text-center text-white text-[6px] sm:text-xs font-bold' onClick={() => handleClickOpenConfirm()}>Delete</Button>
          </div>}
          
          
        </div>
    </>
  
  )
}

export default CardThumbnail
