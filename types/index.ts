export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  tags?: string[]
  title?: string
  image?: string
}

export interface Project{
	title?: string
  description?: string
  date?: string
  repository?: string
};