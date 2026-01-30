import React from 'react'

interface FeaturesSkeletonProps {
  layout: 'grid' | 'cards' | 'alternating'
}

function SkeletonLine({ width = 'w-full', height = 'h-4' }: { width?: string; height?: string }) {
  return (
    <div className={`${width} ${height} bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse`}></div>
  )
}

export function FeaturesSkeleton({ layout }: FeaturesSkeletonProps) {
  if (layout === 'grid') {
    return (
      <section className="py-20 px-4 bg-[var(--color-surface)]" id="features">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <SkeletonLine width="w-2/3 mx-auto" height="h-10" />
            <SkeletonLine width="w-1/2 mx-auto" height="h-6" />
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center py-4 space-y-4">
                <div className="text-5xl mb-4 h-12 w-12 mx-auto bg-gray-300 rounded animate-pulse" />
                <SkeletonLine width="w-3/4 mx-auto" height="h-6" />
                <SkeletonLine width="w-full" height="h-4" />
                <SkeletonLine width="w-5/6 mx-auto" height="h-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (layout === 'cards') {
    return (
      <section className="py-20 px-4 bg-[var(--color-surface)]" id="features">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <SkeletonLine width="w-2/3 mx-auto" height="h-10" />
            <SkeletonLine width="w-1/2 mx-auto" height="h-6" />
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/80 rounded-lg p-6 shadow-md space-y-4">
                <div className="text-4xl h-10 w-10 bg-gray-300 rounded animate-pulse" />
                <SkeletonLine width="w-3/4" height="h-6" />
                <SkeletonLine width="w-full" height="h-4" />
                <SkeletonLine width="w-5/6" height="h-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (layout === 'alternating') {
    return (
      <section className="py-20 px-4 bg-[var(--color-surface)]" id="features">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <SkeletonLine width="w-2/3 mx-auto" height="h-10" />
            <SkeletonLine width="w-1/2 mx-auto" height="h-6" />
          </div>

          {/* Alternating Sections */}
          <div className="space-y-16">
            {[1, 2].map((idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div className="space-y-4">
                  <div className="text-5xl h-10 w-10 bg-gray-300 rounded animate-pulse mb-4" />
                  <SkeletonLine width="w-3/4" height="h-8" />
                  <SkeletonLine width="w-full" height="h-4" />
                  <SkeletonLine width="w-5/6" height="h-4" />
                </div>

                {/* Image */}
                <div className="bg-[var(--color-accent)]/20 rounded-lg h-74 flex items-center justify-center">
                  <SkeletonLine width="w-5/6" height="h-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return null
}
