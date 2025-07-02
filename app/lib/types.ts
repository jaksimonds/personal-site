export interface ITech {
	id: number
	name: string
	label: string
	content?: string
	cta?: ICTA
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

export interface ICTA {
	href: string
	text?: string
	target?: '_blank' | '_self'
}

export interface IPageData {
	slug: string
	tech: ITech[]
}

export interface IPage {
	params: {
		slug: string
	}
}
