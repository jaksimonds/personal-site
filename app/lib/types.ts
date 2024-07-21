export interface ITech {
	id: number
	name: string
	label: string
	content?: string
	cta?: {
		text?: string
		href: string
		target?: string
	}
}

export interface IProject {
	id: number
	slug: string
	title: string
	excerpt: string
	url?: string
	thumbnail?: string
	year: number
	hero?: {
		image?: string
		intro?: string
	}
	tech: ITech[]
}
