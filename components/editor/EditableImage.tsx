'use client'

import { useState } from 'react'
import { useLandingPage } from '@/context/LandingPageProvider'
import { Upload, Link as LinkIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface EditableImageProps {
  sectionId: string
  field: string
  value?: string
  className?: string
  alt?: string
}

export function EditableImage({
  sectionId,
  field,
  value,
  className = '',
  alt = 'Image',
}: EditableImageProps) {
  const { updateSection } = useLandingPage()
  const [isEditing, setIsEditing] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const handleUrlSubmit = () => {
    if (imageUrl.trim()) {
      updateSection(sectionId, { [field]: imageUrl } as any)
      setImageUrl('')
      setIsEditing(false)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        updateSection(sectionId, { [field]: reader.result as string } as any)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    updateSection(sectionId, { [field]: undefined } as any)
  }

  return (
    <div className="relative group w-full h-full">
      {value ? (
        <img src={value} alt={alt} className={className} />
      ) : (
        <div className={`${className} bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-400`}>
          <div className="text-center p-4">
            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <span className="text-gray-400 text-sm">Click to add image</span>
          </div>
        </div>
      )}

      {/* Edit overlay */}
      <div className="absolute inset-0 bg-black rounded-lg bg-opacity-60 opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center gap-2">
        <Button
          size="sm"
          onClick={() => setIsEditing(true)}
          className="bg-white text-gray-900 hover:bg-gray-10 opacity-100"
        >
          <LinkIcon className="w-4 h-4 mr-1" />
          URL
        </Button>
        {/* <label className="cursor-pointer">
          <Button
            size="sm"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            <Upload className="w-4 h-4 mr-1" />
            Upload
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
          </Button>

        </label> */}
        {value && (
          <Button
            size="sm"
            onClick={handleRemoveImage}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* URL input modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-[var(--color-surface)] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[var(--color-background)] p-6 rounded-lg max-w-md w-full shadow-xl">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-body-text)]">Add Image URL</h3>
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="mb-4 border-[var(--color-secondary)] placeholder:text-[var(--color-body-text-secondary)]/50 text-[var(--color-body-text)]"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleUrlSubmit()
                }
              }}
            />
            <p className="text-sm text-[var(--color-body-text-secondary)] mb-4">
              Tip: Use free stock photos from Unsplash, Pexels, or Pixabay
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" className='border-[var(--color-primary)] hover:bg-[var(--color-accent)]/60 text-[var(--color-primary)]' onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleUrlSubmit} className='bg-[var(--color-primary)] cursor-pointer' disabled={!imageUrl.trim()}>
                Add Image
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}