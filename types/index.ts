export type Post = {
	slug: string;
	title: string;
	date: string;
	category: string;
	featuredImage: string;
	content: string;
};

export type MusicExperienceItem = {
	slug: string;
	title: string;
	order: number;
	label: string;
	years: string;
	link: string;
	content: string;
};

export type PageContext = {
	currentPage: number;
	itemsPerPage: number;
	nextPage: number;
	numPages: number;
	prevPage: number;
};

export type PortfolioItem = {
	slug: string;
	title: string;
	description: string;
	demoLink: string;
	githubLink: string;
	screenshot: string;
	order: number;
	content: string;
};
