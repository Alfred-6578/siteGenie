import React, { useEffect, useState } from 'react'

const IconsDemo = () => {
    const [editMode, setEditMode] = useState(true);
  

    useEffect(() => {
        const interval = setInterval(() => {
            setEditMode(prev => !prev);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className="mt-6 flex gap-5 vsm:gap-8">
        <div className={`flex-1 p-3 rounded-lg bg-white/5 border border-white/10 transition-all ${editMode ? 'scale-105 border-emerald-500/50' : 'scale-100'}`}>
            <div className="text-2xl mb-1">✏️</div>
            <div className="text-xs text-white/60">Edit</div>
        </div>
        <div className={`flex-1  p-3 rounded-lg bg-white/5 border border-white/10 transition-all ${!editMode ? 'scale-105 border-emerald-500/50' : 'scale-100'}`}>
            <div className="text-2xl mb-1">⬇️</div>
            <div className="text-xs text-white/60">Export</div>
        </div>
    </div>
  )
}

export default IconsDemo