import { ITech, IProject, IPageData } from 'lib/types'

export const tech: ITech[] = [
	{
		id: 0,
		name: 'next',
		label: 'NextJS',
		content:
			'Front-end React web framework. This site utilizes the App router for navigation.',
		cta: {
			text: 'Learn about NextJS',
			href: 'https://nextjs.org/',
			target: '_blank',
		},
	},
	{
		id: 1,
		name: 'typescript',
		label: 'TypeScript',
		content: 'Strongly typed language that builds ontop of JavaScript.',
		cta: {
			text: 'Learn about TypeScript',
			href: 'https://www.typescriptlang.org/',
			target: '_blank',
		},
	},
	{
		id: 2,
		name: 'graphql',
		label: 'GraphQL',
		content:
			'Query language for handling and resolving a variety of network requests.',
		cta: {
			text: 'Learn about GraphQL',
			href: 'https://graphql.org/',
			target: '_blank',
		},
	},
	{
		id: 3,
		name: 'vercel',
		label: 'Vercel',
		content: 'Frontend cloud infrastructure.',
		cta: {
			text: 'Learn about Vercel',
			href: 'https://vercel.com',
			target: '_blank',
		},
	},
	{
		id: 4,
		name: 'github',
		label: 'GitHub',
		content: 'Cloud-based code repository service.',
		cta: {
			text: 'Learn about GitHub',
			href: 'https://github.com/',
			target: '_blank',
		},
	},
	{
		id: 5,
		name: 'dotnet',
		label: '.Net',
		content: 'Open source framework built by Microsoft.',
		cta: {
			text: 'Learn about .Net',
			href: 'https://dotnet.microsoft.com/',
			target: '_blank',
		},
	},
	{
		id: 6,
		name: 'agilitycms',
		label: 'AgilityCMS',
		content: 'API first headless CMS platform.',
		cta: {
			text: 'Learn about AgilityCMS',
			href: 'https://agilitycms.com/',
			target: '_blank',
		},
	},
	{
		id: 7,
		name: 'react',
		label: 'React',
		content: 'JavaScript framework built by Meta.',
		cta: {
			text: 'Learn about React',
			href: 'https://react.dev/',
			target: '_blank',
		},
	},
	{
		id: 8,
		name: 'faust',
		label: 'Faust.js',
		content:
			'Front-end JavaScript framework built to work alongside headless WordPress solutions.',
		cta: {
			text: 'Learn about Faust.js',
			href: 'https://faustjs.org/',
			target: '_blank',
		},
	},
	{
		id: 9,
		name: 'wpengine',
		label: 'WP Engine',
		content: 'WordPress hosting provider with a suite of product offerings.',
		cta: {
			text: 'Learn about WP Engine',
			href: 'https://wpengine.com/',
			target: '_blank',
		},
	},
	{
		id: 10,
		name: 'contentstack',
		label: 'Contentstack',
		content: 'Headless CMS platform.',
		cta: {
			text: 'Learn about Contentstack',
			href: 'https://www.contentstack.com/',
			target: '_blank',
		},
	},
	{
		id: 11,
		name: 'scss',
		label: 'Sass',
		content:
			'CSS Preprocessor that allows for more reusable and maintainable styles.',
		cta: {
			text: 'Learn about Sass',
			href: 'https://sass-lang.com/',
			target: '_blank',
		},
	},
	{
		id: 12,
		name: 'wordpress',
		label: 'WordPress',
		content: 'Open source personal publishing system built on PHP and MySQL.',
		cta: {
			text: 'Learn about WordPress',
			href: 'https://wordpress.org/',
			target: '_blank',
		},
	},
	{
		id: 13,
		name: 'gitlab',
		label: 'GitLab',
		content: 'Git-centric DevOps platform.',
		cta: {
			text: 'Learn about GitLab',
			href: 'https://about.gitlab.com/',
			target: '_blank',
		},
	},
	{
		id: 13,
		name: 'pantheon',
		label: 'Pantheon',
		content: 'WebOps platform with a focus on WordPress and Drupal hosting.',
		cta: {
			text: 'Learn about Pantheon',
			href: 'https://pantheon.io/',
			target: '_blank',
		},
	},
	{
		id: 14,
		name: 'armor',
		label: 'Armor',
		content: 'Security first cloud-based hosting solutions.',
		cta: {
			text: 'Learn about Armor',
			href: 'https://www.armor.com/',
			target: '_blank',
		},
	},
	{
		id: 15,
		name: 'drupal',
		label: 'Drupal',
		content: 'Security first cloud-based hosting solutions.',
		cta: {
			text: 'Learn about Drupal',
			href: 'https://www.armor.com/',
			target: '_blank',
		},
	},
	{
		id: 16,
		name: 'bitbucket',
		label: 'Bitbucket',
		content: "Atlassian's DevOps solution.",
		cta: {
			text: 'Learn about Bitbucket',
			href: 'https://bitbucket.org/product',
			target: '_blank',
		},
	},
	{
		id: 17,
		name: 'azuredevops',
		label: 'Azure DevOps',
		content: "Microsoft's cloud-based DevOps solution.",
		cta: {
			text: 'Learn about Azure DevOps',
			href: 'https://azure.microsoft.com/en-us/products/devops',
			target: '_blank',
		},
	},
	{
		id: 18,
		name: 'docker',
		label: 'Docker',
		content:
			'Containerized development system to ease complexity of development.',
		cta: {
			text: 'Learn about Docker',
			href: 'https://www.docker.com/',
			target: '_blank',
		},
	},
]

export const projects: IProject[] = [
	{
		id: 0,
		slug: 'mmoca-redesign',
		title: 'MMoCA Redesign',
		excerpt: 'Contemporary Art Museum site to showcase Galleries and Artists.',
		url: 'https://www.mmoca.org/',
		year: 2018,
		hero: {
			intro:
				'The Madison Museum of Contemporary Art is an art gallery located in downtown Madison Wisconsin. Their website acts as a digital event calendar as well as a location for users to browse the various artists and galleries on display.',
		},
		tech: tech.filter((item) =>
			['wordpress', 'scss', 'pantheon'].includes(item.name),
		),
	},
	{
		id: 1,
		slug: 'karavan-trailers',
		title: 'Karavan Trailers',
		excerpt: 'Online catalog and information site.',
		url: 'https://www.karavantrailers.com/',
		thumbnail: '/assets/karavan-thumbnail.webp',
		year: 2018,
		hero: {
			image: '/assets/karavan-hero.webp',
			intro:
				'Karavan Trailers is a trailer manufacturer that supplies utility, marine, and industrial trailers. The website acts as a product catalog for their collection of trailers and provides information about the variety of types.',
		},
		tech: tech.filter((item) =>
			['wordpress', 'scss', 'wpengine'].includes(item.name),
		),
	},
	{
		id: 2,
		slug: 'abc-supply-careers',
		title: 'ABC Supply Careers',
		excerpt: 'Careers site with a location based search.',
		url: 'https://careers.abcsupply.com/',
		thumbnail: '/assets/abcsupply-hero.webp',
		year: 2019,
		hero: {
			image: '/assets/abcsupply-hero.webp',
			intro:
				'ABC Supply is a nation-wide provider of exterior and interior building products. Their careers site offers a wide-range of driving and corporate positions across the country.',
		},
		tech: tech.filter((item) =>
			['wordpress', 'scss', 'wpengine', 'gitlab'].includes(item.name),
		),
	},
	{
		id: 3,
		slug: 'abc-lw-search',
		title: 'ABC/LW Supply Search Package',
		excerpt: 'A reusable NPM package built for ease of maintenance.',
		url: 'https://careers.abcsupply.com/search',
		thumbnail: '/assets/abcsupply-hero.webp',
		year: 2022,
		hero: {
			image: '/assets/abclocator-hero.webp',
			intro:
				'Due to the similar nature of the ABC Supply and LW Supply careers search we built a custom NPM package for use on both sites. This custom package allows for ease of maintenance as the code is shared while also providing different styles and datasets for the two sites.',
		},
		tech: tech.filter((item) =>
			['wordpress', 'scss', 'wpengine', 'gitlab'].includes(item.name),
		),
	},
	{
		id: 4,
		slug: 'acis-redesign',
		title: 'ACIS Redesign',
		excerpt: 'A simple site rebuild from the ground up.',
		url: 'https://www.americanclassicvinylsiding.com/',
		thumbnail: '/assets/acis-thumbnail.webp',
		year: 2020,
		hero: {
			image: '/assets/acis-hero.webp',
			intro:
				'American Classic Vinyl Siding is a supplier and manufacturer of siding and windows. This site acts as a product catalog for users to browse and gather information before contacting for a purchase.',
		},
		tech: tech.filter((item) =>
			['wordpress', 'scss', 'wpengine', 'gitlab'].includes(item.name),
		),
	},
	{
		id: 5,
		slug: 'hiusa',
		title: 'HI USA',
		excerpt:
			"Hostelling International's site for finding and booking a Hostel in the US.",
		url: 'https://www.hiusa.org/',
		thumbnail: '/assets/hiusa-thumbnail.webp',
		year: 2020,
		hero: {
			image: '/assets/hiusa-hero.webp',
			intro:
				"Hostelling International's U.S. branch where users can search and browse a variety of hostels. The site also acts as a travel planning hub by informing users of things to do around the area they are researching and blog posts to give them more information.",
		},
		tech: tech.filter((item) =>
			['wordpress', 'scss', 'react', 'docker', 'azuredevops'].includes(
				item.name,
			),
		),
	},
	{
		id: 6,
		slug: 'qtigroup',
		title: 'The QTI Group',
		excerpt: 'Job Recruiter site built for candidates as well as hiring teams.',
		url: 'https://www.qtigroup.com/',
		thumbnail: '/assets/qti-thumbnail.webp',
		year: 2020,
		hero: {
			image: '/assets/qti-hero.webp',
			intro:
				'The QTI Group is a job recruiter and HR consultation firm based out of Wisconsin. Their website acts as a job board for both people looking for a job and for companies looking to post open positions.',
		},
		tech: tech.filter((item) =>
			['dotnet', 'agilitycms', 'scss', 'gitlab'].includes(item.name),
		),
	},
	{
		id: 7,
		slug: 'summit',
		title: 'Summit Credit Union',
		excerpt:
			'Custom Drupal theme development with a wide range of product offerings.',
		url: 'https://www.summitcreditunion.com/',
		thumbnail: '/assets/summit-thumbnail.webp',
		year: 2022,
		hero: {
			image: '/assets/summit-hero.webp',
			intro:
				'Summit Credit Union is one of the largest credit unions in the state of Wisconsin. Their site serves as an online banking portal for members as well as an information hub for users at any point in their financial journey.',
		},
		tech: tech.filter((item) =>
			['drupal', 'armor', 'scss', 'bitbucket'].includes(item.name),
		),
	},
	{
		id: 8,
		slug: 'wain-roy',
		title: 'Wain-Roy',
		excerpt:
			'Construction Equipment product catalog site with a custom dealer locator.',
		url: 'https://wainroy.com/',
		thumbnail: '/assets/wainroy-thumbnail.webp',
		year: 2022,
		hero: {
			image: '/assets/wainroy-hero.webp',
			intro:
				'Wain-Roy produces construction equipment attachments for a wide range of functions. Users can search for a specific product using the custom WooCommerce search or find a nearby dealer using the custom dealer locator plugin.',
		},
		tech: tech.filter((item) =>
			['wordpress', 'scss', 'wpengine', 'gitlab'].includes(item.name),
		),
	},
	{
		id: 9,
		slug: 'culvers',
		title: "Culver's",
		excerpt:
			'Restaurant franchise website that provides information on their locations and menu items.',
		url: 'https://www.culvers.com/',
		thumbnail: '/assets/culvers-thumbnail.webp',
		year: 2023,
		hero: {
			image: '/assets/culvers-hero.webp',
			intro:
				"Culver's is nation-wide restaurant franchise based out of Sauk City Wisconsin. Their website provides users information about their various locations, menu items, and other informative content.",
		},
		tech: tech.filter((item) =>
			['dotnet', 'agilitycms', 'react', 'scss', 'github'].includes(item.name),
		),
	},
	{
		id: 10,
		slug: 'schneider-jobs',
		title: 'Schneider Jobs',
		excerpt: 'Careers website for driver and corporate positions.',
		url: 'https://schneiderjobs.com/',
		thumbnail: '/assets/schneiderjobs-thumbnail.webp',
		year: 2020,
		hero: {
			image: '/assets/schneiderjobs-hero.webp',
			intro:
				'Schneider is an enterprise level trucking company that supports a variety of digital properties. Schneider Jobs is their primary careers site with an emphasis on driver and corporate positions across the country.',
		},
		tech: tech.filter((item) =>
			['next', 'graphql', 'scss', 'contentstack', 'github'].includes(item.name),
		),
	},
	{
		id: 11,
		slug: 'hiebing',
		title: 'Hiebing',
		excerpt: 'The Hiebing.com site built on NextJS with WPEngine Atlas.',
		url: 'https://www.hiebing.com/',
		thumbnail: '/assets/hiebing-thumbnail.webp',
		year: 2021,
		hero: {
			image: '/assets/hiebing-hero.webp',
			intro: 'Hiebing is an advertising agency based out of Madison Wisconsin.',
		},
		tech: tech.filter((item) =>
			['next', 'faust', 'scss', 'wpengine', 'github'].includes(item.name),
		),
	},
]

export const pages: IPageData[] = [
	{
		slug: 'home',
		tech: tech.filter((item) =>
			['next', 'typescript', 'scss', 'vercel', 'github'].includes(item.name),
		),
	},
]
