'use client'

import { useLandingPage } from "@/context/LandingPageProvider"
import { useEffect, useRef, useState } from "react"

interface EditableTextProps {
  sectionId: string
  field: string
  value: string
  className?: string
  placeholder?: string
  multiline?: boolean
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  onSave?: (value:string)=> void
}

const EditableText = ({
  sectionId,
  field,
  value,
  className = '',
  placeholder = 'Click to Edit',
  multiline = false,
  tag: Tag = 'p', 
  onSave
}: EditableTextProps) => {

  const { updateSection } = useLandingPage()
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(value)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  // Auto-resize logic
  useEffect(() => {
    if (isEditing && multiline && inputRef.current) {
      const textarea = inputRef.current as HTMLTextAreaElement;
      // Reset height to shrink if text was deleted
      textarea.style.height = 'auto';
      // Set height to scrollHeight (content height)
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text, isEditing, multiline]);

  useEffect(() => {
    setText(value)
  }, [value])

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      // Note: inputRef.current.select() might be annoying for long text, 
      // but keeping it as per your original logic
    }
  }, [isEditing])

  const handleSave = () => {
    if (text !== value) {
        if (onSave) {
            onSave(text)
        }else{
            updateSection(sectionId, { [field]: text } as any)
        }
    }
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault()
      handleSave()
    }
    if (e.key === 'Escape') {
      setText(value)
      setIsEditing(false)
    }
  }

  if (!isEditing) {
    return (
      <Tag
        className={`${className} cursor-pointer whitespace-pre-line wrap-break-word hover:outline hover:outline-2 hover:outline-blue-500 hover:outline-offset-2 transition-all rounded`}
        onClick={() => setIsEditing(true)}
        title="Click to edit"
      >
        {value || placeholder}
      </Tag>
    )
  }

  if (multiline) {
    return (
      <textarea
        ref={inputRef as React.RefObject<HTMLTextAreaElement>}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={`${className} w-full! border-2 border-blue-500 rounded px-1 py-2 focus:outline-none resize-none overflow-hidden`}
      />
    )
  }

  return (
    <input
      ref={inputRef as React.RefObject<HTMLInputElement>}
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={handleSave}
      onKeyDown={handleKeyDown}
      className={`${className} border-2 border-blue-500 rounded px-3 py-2 focus:outline-none`}
    />
  )
}

export default EditableText