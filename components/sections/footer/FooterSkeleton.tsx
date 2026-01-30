import React from 'react'

function SkeletonLine({ width = 'w-full', height = 'h-4' }: { width?: string; height?: string }) {
  return (
    <div className={`${width} ${height} bg-gradient-to-r from-gray-400 to-gray-500 rounded animate-pulse`}></div>
  )
}

export function FooterSkeleton() {
  return (
    <footer className="py-12 px-4 bg-[var(--color-body-text)] text-white">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <SkeletonLine width="w-48 mx-auto" height="h-6" />
        <SkeletonLine width="w-96 mx-auto" height="h-4" />
        <SkeletonLine width="w-56 mx-auto" height="h-4" />
      </div>
    </footer>
  )
}
