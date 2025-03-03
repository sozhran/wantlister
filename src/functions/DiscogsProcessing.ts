import { WantlistRecord, WantlistResponse } from "@/lib/DiscogsInterfaces";

const discogsUrl = "https://api.discogs.com/users/sozhran/wants";
const token = process.env.DISCOGS_TOKEN;
const key = process.env.NEXT_PUBLIC_CONSUMER_KEY;
const secret = process.env.NEXT_PUBLIC_CONSUMER_SECRET;
const pageLimit = 12;

export async function retrieveRatedList() {
	if (!token) {
		return;
	}

	const ids: string[] = [];

	for (let i = 1; i < pageLimit; i++) {
		//const response = await fetch(
		//	`${discogsUrl}` +
		//		new URLSearchParams({
		//			page: i.toString(),
		//			per_page: "100",
		//			sort: "rating",
		//			sort_order: "desc",
		//			token: token,
		//		})
		//);
		const response = await fetch(`${discogsUrl}` + `?page=${i.toString()}&per_page=100&sort=rating&sort_order=desc&token=${token}`, { method: "GET", headers: {} });
		const data = (await response.json()) as WantlistResponse;

		if (data.wants) {
			data.wants.map((item: WantlistRecord) => {
				if ((item.rating = 5)) {
					ids.push(item.id.toString());
				}
			});
		}
	}

	return ids;
}

export async function getDiscogsInfo(pageLimit: number) {
	try {
		const response = await fetch(`${discogsUrl}` + `?per_page=${pageLimit}&sort=rating&sort_order=desc&token=${token}`, { method: "GET", headers: {} });
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
