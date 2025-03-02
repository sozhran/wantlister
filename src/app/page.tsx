import Image from "next/image";
import { WantlistResponse, WantlistRecord } from "@/lib/DiscogsInterfaces";
import RecordTile from "@/components/DiscogRecordTile";
import { getDiscogsInfo, retrieveRatedList } from "@/functions/DiscogsProcessing";
import Header from "@/components/Header";

const pageLimit = 20; // depends on the Wantlist size and may be changed later

export default async function Home() {
	const records = await getDiscogsInfo(pageLimit);
	const stats = await retrieveRatedList();

	return (
		<>
			<Header />
			<section className="main">
				<section className="top">
					<h2>Total: {records ? records.length : "¯_(ツ)_/¯"}</h2>
				</section>

				<section className="collection">{records ? records.map((record: WantlistRecord, i: number) => <RecordTile record={record} i={i} />) : <></>}</section>
			</section>

			<section className="footer">
				<div className="github-share">
					<a href="https:/github.com/sozhran/wantlister" target="_blank">
						<img alt="github share icon" src="https://i.imgur.com/5Qr1cEC.png" width="25" height="25" />
					</a>
				</div>
			</section>
			<br />
			{stats ? stats.length : "nope"}
		</>
	);
}

// BATTLEPLAN
// import basic Discogs data without auth by button
// add auth
// map basic data and cook list of rated records
// request marketplace for these records, display on page
// improved display, art, distinguish by date/time
// ...
// add database
