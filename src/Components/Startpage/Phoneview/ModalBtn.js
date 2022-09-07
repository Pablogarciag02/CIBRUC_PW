import React from 'react'
import { useState } from 'react'
import IMAGES from '../../Images'
import Modal from './Modal'



export default function ModalBtn() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className='flex justify-between'>
        <img className="mt-5 ml-5 h-40 " src={IMAGES.myLogo} alt=""></img>

        <div className =" mt-20 mr-8 lg:invisible ">
          <button id = "square" onClick ={() => {
            setOpenModal(true)
          }}
            className ="" href="">
              <div id = "burgerwrap" className="">
                <span> </span>
                
                <span> </span>
              </div>
          </button>
        </div> 
      </div>

      {openModal && <Modal closeModal = {setOpenModal} />}
    </>
  )
}

