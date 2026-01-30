import React from 'react'

interface HeroSkeletonProps {
  layout: 'centered' | 'split' | 'background'
}

function SkeletonLine({ width = 'w-full', height = 'h-4' }: { width?: string; height?: string }) {
  return (
    <div className={`${width} ${height} bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse`}></div>
  )
}

export function HeroSkeleton({ layout }: HeroSkeletonProps) {
  if (layout === 'centered') {
    return (
      <section className="flex flex-col gap-10 items-center py-20 px-4 pt-25 bg-white min-h-screen">
        <div className="max-w-4xl text-center space-y-6">
          <SkeletonLine width="w-3/4 mx-auto" height="h-12" />
          <SkeletonLine width="w-full mx-auto" height="h-8" />
          <SkeletonLine width="w-5/6 mx-auto" height="h-8" />
          <div className="pt-4">
            <SkeletonLine width="w-48 mx-auto" height="h-10" />
          </div>
        </div>

        <div className="bg-[var(--color-surface)] rounded-lg flex items-center justify-center max-w-5xl w-full h-100 tny:h-110">
          <SkeletonLine width="w-full" height="h-full" />
        </div>
      </section>
    )
  }

  if (layout === 'split') {
    return (
      <section className="flex items-center py-20 px-4 pt-25 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6">
            <SkeletonLine width="w-5/6" height="h-12" />
            <SkeletonLine width="w-full" height="h-8" />
            <SkeletonLine width="w-5/6" height="h-8" />
            <div className="pt-4">
              <SkeletonLine width="w-full md:w-xs" height="h-10" />
            </div>
          </div>

          <div className="bg-[var(--color-surface)] rounded-lg h-100 tny:h-110 vsm:h-126 flex items-center justify-center">
            <SkeletonLine width="w-full" height="h-full" />
          </div>
        </div>
      </section>
    )
  }

  if (layout === 'background') {
    return (
      <section className="flex justify-center items-center relative py-32 px-4 bg-gray-300 min-h-screen">
        <div className="absolute inset-0 bg-black/80 opacity-60"></div>

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <SkeletonLine width="w-2/3 mx-auto" height="h-12" />
          <SkeletonLine width="w-full mx-auto" height="h-8" />
          <SkeletonLine width="w-5/6 mx-auto" height="h-8" />
          <div className="pt-4">
            <SkeletonLine width="w-56 mx-auto" height="h-10" />
          </div>
        </div>
      </section>
    )
  }

  return null
}
