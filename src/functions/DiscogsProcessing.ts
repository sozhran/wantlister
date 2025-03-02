import { WantlistRecord, WantlistResponse } from "@/lib/DiscogsInterfaces";
import localData from "@/localdata/localdata1.json";

const discogsUrl = "https://api.discogs.com/users/sozhran/wants";
const secret = process.env.NEXT_PUBLIC_CONSUMER_SECRET;
const key = process.env.NEXT_PUBLIC_CONSUMER_KEY;

export async function getDiscogsInfo(pageLimit: number) {
	try {
		const response = await fetch(`${discogsUrl}` + `?per_page=${pageLimit}&sort=rating&sort_order=desc&key=${key}&secret=${secret}`, { method: "GET", headers: {} });
		const data = (await response.json()) as WantlistResponse;

		return data.wants;
	} catch (error) {
		return [];
	}
}

export function cookDiscogsInfo(data: WantlistRecord[]) {
	const processedData: {}[] = [];

	data.map((item: WantlistRecord) => {
		const processedItem = {
			id: item.id,
			//"artist_id": item.basic_information.artists.map
			artist: item.basic_information.artists.map((artist) => artist.name).join(" / "),
			album: item.basic_information.title,
			year: item.basic_information.year,
		};

		processedData.push(processedItem);
	});

	return processedData;
}
