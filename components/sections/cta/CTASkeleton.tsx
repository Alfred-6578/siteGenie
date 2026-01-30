import React from 'react'

function SkeletonLine({ width = 'w-full', height = 'h-4' }: { width?: string; height?: string }) {
  return (
    <div className={`${width} ${height} bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse`}></div>
  )
}

export function CTASkeleton() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-300 to-gray-400">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <SkeletonLine width="w-2/3 mx-auto" height="h-10" />
        <SkeletonLine width="w-1/2 mx-auto" height="h-8" />
        <div className="pt-4">
          <SkeletonLine width="w-48 mx-auto" height="h-10" />
        </div>
      </div>
    </section>
  )
}
