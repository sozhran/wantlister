import { DiscogWantlistRecord } from "@/lib/DiscogWantlist";

export default function cookDiscogsInfo(data: DiscogWantlistRecord[]) {
	const processedData: {}[] = [];

	data.map((item: DiscogWantlistRecord) => {
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
