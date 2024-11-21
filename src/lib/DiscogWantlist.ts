export interface DiscogWantlistResponse {
	pagination: Pagination;
	wants: DiscogWantlistRecord[];
}

export interface Pagination {
	page: number;
	pages: number;
	per_page: number;
	items: number;
	urls: { last: string; next: string };
}

export interface DiscogWantlistRecord {
	id: number;
	resource_url: string;
	date_added: string;
	rating: number;
	basic_information: BasicInformation;
}

export interface BasicInformation {
	id: number;
	master_id?: number;
	master_url: string;
	resource_url: string;
	thumb: string;
	cover_image: string;
	title: string;
	year: number;
	genres: string[];
	styles: string[];
	artists: Artist[];
	formats: Formats[];
}

interface Formats {
	descriptions: string[];
	name: string;
	qty: string;
	text?: string;
}

export interface Artist {
	anv: string;
	id: string;
	name: string;
	resource_url: string;
	role: string;
	tracks: string;
	join?: string;
}
