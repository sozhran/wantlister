import Image from "next/image";
import { WantlistRecord, Artist, Format } from "@/lib/DiscogsInterfaces";

interface Props {
	record: WantlistRecord;
	i: number;
}

export interface RecordTableProps {
	itemList: WantlistRecord[];
}

export function RecordTable(props: RecordTableProps) {
	return (
		<table className="record-table">
			<tbody>
				<RecordTableHeader />
				{props.itemList.map((item: WantlistRecord) => {
					return (
						<tr>
							<td>
								<Image src={item.basic_information.thumb} alt={item.basic_information.title} width={40} height={40} />
							</td>
							<td>{item.basic_information.title}</td>
							<td>{}</td>
							<td>{item.basic_information.year}</td>
							<td>{item.rating}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

function RecordTableHeader() {
	return (
		<tr>
			<th>Cover</th>
			<th>Artist - Title (Label, Catalog)</th>
			<th>Format</th>
			<th>Year</th>
			<th>Rating</th>
		</tr>
	);
}

function RecordTableRow(item: WantlistRecord) {
	let artist = item.basic_information.artists.filter((artist: Artist) => artist.name).join(" / ");
	let format = item.basic_information.formats.filter((format: Format) => format.name).join(" / ");

	return (
		<tr>
			<td>
				<Image src={item.basic_information.thumb} alt={item.basic_information.title} width={40} height={40} />
			</td>
			<td>
				{artist} - {item.basic_information.title}
			</td>
			<td>{format}</td>
			<td>{item.basic_information.year}</td>
			<td>{item.rating}</td>
		</tr>
	);
}
