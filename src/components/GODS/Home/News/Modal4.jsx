import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Modal4({open4, onClose, children}) {
  return (
    <div onClick={onClose} className={`fixed inset-0 
    justify-center flex items-center transition-colors z-50
    ${open4 ? "visible bg-black/80" : "invisible"}`}>
        <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl p-4 transition-all ${open4 ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faX} className='absolute top-2 right-2
            p-1 rounded-lg'/>
          </button>
          {children}
        </div>
    </div>
  )
}

export default Modal4