import Image from "next/image";
import { DiscogWantlistResponse, DiscogWantlistRecord } from "@/lib/DiscogWantlist";
import DiscogRecordTile from "@/components/DiscogRecordTile";

const discogsUrl = "https://api.discogs.com/users/sozhran/wants";

const pageLimit = 2; // depends on the Wantlist size and may be changed later 12
const secret = process.env.NEXT_PUBLIC_CONSUMER_SECRET;
const key = process.env.NEXT_PUBLIC_CONSUMER_KEY;

async function getDiscogsInfo() {
	const records: DiscogWantlistRecord[] = [];

	for (let i = 1; i < pageLimit; i++) {
		try {
			const response = await fetch(`${discogsUrl}` + `?per_page=20&sort=rating&sort_order=desc&key=${key}&secret=${secret}`, { method: "GET", headers: {} });
			const data = (await response.json()) as DiscogWantlistResponse;

			data.wants.map((item: DiscogWantlistRecord) => records.push(item));
		} catch (error) {
			console.log(error);
		}
	}
	return records;
}

export default async function Home() {
	const records = await getDiscogsInfo();
	return (
		<>
			<section className="main">
				<section className="top">
					<h1>
						<b>Discogs Verlanglijstje</b>
					</h1>
					<p>
						<i>Werk in uitvoering</i>
					</p>
					<h1>Total: {records ? records.length : "¯_(ツ)_/¯"}</h1>
				</section>

				<section className="collection">{records ? records.map((record: DiscogWantlistRecord, i: number) => <DiscogRecordTile record={record} i={i} />) : <></>}</section>
			</section>

			<section className="footer">
				<div className="github-share">
					<a href="https:/github.com/sozhran/wantlister" target="_blank">
						<img alt="github share icon" src="https://i.imgur.com/5Qr1cEC.png" width="25" height="25" />
					</a>
				</div>
			</section>
		</>
	);
}

{
	/*<title>Verlanglijst</title>
<meta name="description" content="Verlanglijst" />*/
}

// BATTLEPLAN
// import basic Discogs data without auth by button
// add auth
// map basic data and cook list of rated records
// request marketplace for these records, display on page
// improved display, art, distinguish by date/time
// ...
// add database
