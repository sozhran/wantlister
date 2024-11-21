import { Pagination, BasicInformation } from "./DiscogWantlist";

export interface DiscogCollectionResponse {
	pagination: Pagination;
	releases: DiscogRecord[];
}

export interface DiscogRecord {
	id: number;
	instance_id: number;
	date_added: string;
	rating: number;
	basic_information: BasicInformation;
  }