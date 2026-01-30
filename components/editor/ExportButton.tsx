'use client'

import { useState } from 'react'
import { useLandingPage } from '@/context/LandingPageProvider'
import { generateFullHTML, generateSeparateFiles } from '@/lib/export'
import { Download, Copy, Check, FileCode, FileCode2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ExportButton() {
  const { landingPage } = useLandingPage()
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  if (!landingPage) return null

  const handleCopyHTML = async () => {
    const html = generateFullHTML(landingPage)
    await navigator.clipboard.writeText(html)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadHTML = () => {
    const html = generateFullHTML(landingPage)
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${landingPage.businessName.toLowerCase().replace(/\s+/g, '-')}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleDownloadSeparate = () => {
    const { html, css } = generateSeparateFiles(landingPage)
    
    // Download HTML
    const htmlBlob = new Blob([html], { type: 'text/html' })
    const htmlUrl = URL.createObjectURL(htmlBlob)
    const htmlLink = document.createElement('a')
    htmlLink.href = htmlUrl
    htmlLink.download = 'index.html'
    document.body.appendChild(htmlLink)
    htmlLink.click()
    document.body.removeChild(htmlLink)
    URL.revokeObjectURL(htmlUrl)

    // Download CSS
    setTimeout(() => {
      const cssBlob = new Blob([css], { type: 'text/css' })
      const cssUrl = URL.createObjectURL(cssBlob)
      const cssLink = document.createElement('a')
      cssLink.href = cssUrl
      cssLink.download = 'styles.css'
      document.body.appendChild(cssLink)
      cssLink.click()
      document.body.removeChild(cssLink)
      URL.revokeObjectURL(cssUrl)
    }, 100)
  }

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        Export
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl p-4 min-w-[300px] z-50 border border-gray-200">
            <h3 className="font-semibold mb-3 text-sm">Export Options</h3>
            
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyHTML}
                className="w-full justify-start"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy HTML
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadHTML}
                className="w-full justify-start"
              >
                <FileCode className="w-4 h-4 mr-2" />
                Download Single File
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadSeparate}
                className="w-full justify-start"
              >
                <FileCode2 className="w-4 h-4 mr-2" />
                Download HTML + CSS
              </Button>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                Export includes all visible sections with your chosen color palette and content.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}