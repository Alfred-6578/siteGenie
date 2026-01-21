import { cn } from '@/lib/utils'
import React, { useEffect } from 'react'
import { X } from 'lucide-react'

type PopupProps = {
    isOpen: boolean
    error: string
    onClose: () => void
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const Popup = ({isOpen, error, position, onClose}:PopupProps) => {
    useEffect(()=>{
        if (!isOpen) return

        const timer = setTimeout(()=> onClose(), 6000)
        return ()=> clearTimeout(timer)
    },[isOpen, onClose])

  return (
    <div className={cn(
        'flex justify-between w-100 transition-all ease-in-out duration-300 translate-x-[1000%] gap-4 m-30 mb-10 mx-5 p-2 py-3 text-body-text text-sm fixed rounded-lg border border-red-300/50 bg-red-400/20 backdrop-blur-2xl', 
        {
            'top-0 left-0 -translate-x-[1000%]' : position === 'top-left',
            'top-0 right-0' : position === 'top-right',
            'bottom-0 left-0 -translate-x-[1000%]' : position === 'bottom-left',
            'bottom-0 right-0' : position === 'bottom-right',
            'translate-x-0' : isOpen
        }

    )}>
        <p className="pl-2">{error}</p>
        <X size={20} className='text-sm' onClick={onClose}/>
    </div>
  )
}

export default Popup