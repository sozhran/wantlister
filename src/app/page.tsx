import { DiscogWantlistResponse, DiscogWantlistRecord } from "@/lib/DiscogWantlist";

const discogsUrl = "https://api.discogs.com/users/sozhran/wants"

const pageLimit = 12    // depends on the Wantlist size and may be changed later

async function getDiscogsInfo() {
	const records: DiscogWantlistRecord[] = []
	
	for (let i = 1; i < pageLimit; i ++) {
		try {
			const response = await fetch(`${discogsUrl}` + "?per_page=1050&sort=rating&sort_order=desc");
			const data = await response.json() as DiscogWantlistResponse;

			data.wants.map((item: DiscogWantlistRecord) => records.push(item))
		}
		catch (error) {
			console.log(error)
		}
	}
	return records
}

export default async function Home() {
	const records = await getDiscogsInfo()
	return <>
			<section className="collection">
				<h1>Total: {records ? records.length : "¯\_(ツ)_/¯"}</h1>
				{records ? records.map((record: DiscogWantlistRecord, i) => <div key={"record_" + i}>{record.basic_information.id} - {record.basic_information.title}</div>) : <></>}
			</section>
			<section className="footer">
			<a href="https:/github.com/sozhran/wantlister" target="_blank">
				<img
					alt="github share icon"
					src="https://i.imgur.com/5Qr1cEC.png"
					width="25"
					height="25"
				/>
			</a>
			</section>
		</>
	}



// BATTLEPLAN
// import basic Discogs data without auth by button
// add auth
// map basic data and cook list of rated records
// request marketplace for these records, display on page
// improved display, art, distinguish by date/time
// ...
// add database