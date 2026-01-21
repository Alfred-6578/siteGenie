import React from 'react'

const Pill = ({title,className, fade, slide}:any) => {
  return (
    <div className={`${className} ${fade} ${slide} px-4 py-2 rounded-full text-white text-sm font-medium`}>
        {title}
    </div>
  )
}

export default Pill