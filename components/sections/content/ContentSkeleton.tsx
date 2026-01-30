import React from 'react'

interface ContentSkeletonProps {
  layout: 'single' | 'two-col' | 'image'
}

function SkeletonLine({ width = 'w-full', height = 'h-4' }: { width?: string; height?: string }) {
  return (
    <div className={`${width} ${height} bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse`}></div>
  )
}

export function ContentSkeleton({ layout }: ContentSkeletonProps) {
  if (layout === 'single') {
    return (
      <section className="py-20 px-5 bg-[var(--color-background)] flex justify-center relative">
        <div className="flex flex-col lg:flex-row-reverse gap-12 w-full max-w-7xl vsm:px-4 lg:items-center justify-center">
          {/* Text Content Skeleton */}
          <div className="mb-12 max-w-4xl mx-auto md:text-center space-y-4">
            <SkeletonLine width="w-3/4" height="h-10" />
            <SkeletonLine width="w-full" height="h-6" />
            <SkeletonLine width="w-5/6" height="h-6" />
            <div className="pt-4">
              <SkeletonLine width="w-40 mx-auto" height="h-10" />
            </div>
          </div>

          {/* Image Skeleton */}
          <div className="bg-[var(--color-surface)] rounded-lg flex items-center justify-center w-full h-110">
            <SkeletonLine width="w-full" height="h-full" />
          </div>
        </div>
      </section>
    )
  }

  if (layout === 'two-col') {
    return (
      <section className="py-20 px-4 bg-[var(--color-background)] flex justify-center relative">
        <div className="max-w-7xl w-full">
          {/* Header Skeleton */}
          <div className="text-center mb-16 space-y-4">
            <SkeletonLine width="w-2/3 mx-auto" height="h-10" />
            <SkeletonLine width="w-1/2 mx-auto" height="h-6" />
          </div>

          {/* Two Columns Skeleton */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Card */}
            <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-accent)]/40">
              <SkeletonLine width="w-2/3" height="h-6" />
              <div className="mt-6 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-4 h-4 bg-gray-300 rounded flex-shrink-0 mt-1 animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <SkeletonLine width="w-3/4" height="h-4" />
                      <SkeletonLine width="w-full" height="h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-[var(--color-primary)]/90 rounded-xl p-6 border border-[var(--color-secondary)]">
              <SkeletonLine width="w-2/3" height="h-6" />
              <div className="mt-6 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-4 h-4 bg-gray-400 rounded flex-shrink-0 mt-1 animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <SkeletonLine width="w-3/4" height="h-4" />
                      <SkeletonLine width="w-full" height="h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (layout === 'image') {
    return (
      <div className="min-h-screen bg-[var(--color-background)] relative">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Skeleton */}
            <div className="text-center mb-16 space-y-4">
              <SkeletonLine width="w-2/3 mx-auto" height="h-10" />
              <SkeletonLine width="w-1/2 mx-auto" height="h-6" />
            </div>

            {/* Alternating Image-Text Sections */}
            <div className="space-y-20">
              {[1, 2,3].map((idx) => (
                <div
                  key={idx}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    idx % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image Skeleton */}
                  <div className={`${idx % 2 === 1 ? '' : 'md:col-start-2'}`}>
                    <div className="relative group">
                      <div className="relative bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-2xl aspect-video flex items-center justify-center border border-[var(--color-primary)]/30 overflow-hidden">
                        {/* <SkeletonLine width="w-5/6" height="h-4/5" /> */}
                      </div>
                    </div>
                  </div>

                  {/* Text Skeleton */}
                  <div
                    className={`${
                      idx % 2 === 1
                        ? ''
                        : 'md:col-start-1 md:row-start-1'
                    } space-y-4`}
                  >
                    <SkeletonLine width="w-3/4" height="h-8" />
                    <SkeletonLine width="w-full" height="h-4" />
                    <SkeletonLine width="w-5/6" height="h-4" />
                    <SkeletonLine width="w-4/5" height="h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Skeleton */}
            <div className="text-center mt-16">
              <SkeletonLine width="w-40 mx-auto" height="h-12" />
            </div>
          </div>
        </section>
      </div>
    )
  }

  return null
}
