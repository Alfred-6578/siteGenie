export type FeatureCard = {
  id: string
  title: string
  description: string
  icon: {
    emoji: string
    altEmojis?: string[]
    size: number
    containerSize: number
    gradient: string
  }
  features: string[]
  visuals?: {
    colorDots?: number
  }
  animations?: {
    idle: string
    hover: string
    special?: string
  }
}
