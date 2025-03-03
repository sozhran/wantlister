export interface Pagination {
	page: number;
	pages: number;
	per_page: number;
	items: number;
	urls: { last: string; next: string };
}

export interface BasicInformation {
	id: number;
	master_id?: number;
	master_url: string | null;
	resource_url: string;
	thumb: string;
	cover_image: string;
	title: string;
	year: number;
	genres: string[];
	styles: string[];
	artists: Artist[];
	formats: Format[];
	labels: Label[];
}

export interface Format {
	descriptions: string[];
	name: string;
	qty: string;
	text?: string;
}

export interface Artist {
	anv: string;
	id: number;
	name: string;
	resource_url: string;
	role: string;
	tracks: string;
	join?: string;
}

export interface Label {
	name: string;
	catno: string;
	entity_type: string;
	entity_type_name: string;
	id: number;
	resource_url: string;
}

// WANTLIST INTERFACES

export interface WantlistResponse {
	pagination: Pagination;
	wants: WantlistRecord[];
}

export interface WantlistRecord {
	id: number;
	resource_url: string;
	date_added: string;
	rating: number;
	basic_information: BasicInformation;
}

// USER COLLECTION INTERFACES

export interface CollectionResponse {
	pagination: Pagination;
	releases: CollectionRecord[];
}

export interface CollectionRecord {
	id: number;
	instance_id: number;
	date_added: string;
	rating: number;
	basic_information: BasicInformation;
}

// MARKETPLACE INTERFACES
