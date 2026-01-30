import { useLandingPage } from '@/context/LandingPageProvider'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { PaletteSwitcher } from './PaletteSwitcher'
import { Button } from '../ui/Button'
import { Download } from 'lucide-react'
import { ExportButton } from './ExportButton'

const EditorPanel = () => {
    const {landingPage} = useLandingPage()

  return (
    <div className='fixed bg-background z-100 w-screen '>
      <div className="flex justify-between items-center px-3 lg:px-6 h-20">
        <Link href={'/generate'} className="text-headings flex gap-2">
            <ArrowLeft />
            Back
        </Link>
        <h2 className="text-white font-bold text-xl max-lg:hidden">{landingPage?.businessName}</h2>
        <div className="flex gap-1 vsm:gap-4 items-center">
          <PaletteSwitcher />
          {/* <Button className='flex gap-1 vsm:gap-3' variant='secondary'>
            <Download />
            Export
          </Button> */}
          <ExportButton />
        </div>

      </div>

    </div>
  )
}

export default EditorPanel