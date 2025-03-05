import Image from "next/image";
import { WantlistRecord, Artist, Format } from "@/lib/DiscogsInterfaces";

interface RecordTableRowProps {
	item: WantlistRecord;
}

export interface RecordTableProps {
	itemList: WantlistRecord[];
}

export function RecordTable(props: RecordTableProps) {
	return (
		<table className="record-table">
			<RecordTableHeader />
			<tbody className="divide-charcoal-100">
				{props.itemList.map((item: WantlistRecord) => {
					return <RecordTableRow item={item} />;
				})}
			</tbody>
		</table>
	);
}

function RecordTableHeader() {
	return (
		<thead className="table-header">
			<tr>
				<th>Cover</th>
				<th>Artist - Title (Label, Catalog)</th>
				<th>Format</th>
				<th>Year</th>
				<th>Rating</th>
			</tr>
		</thead>
	);
}

function RecordTableRow(props: RecordTableRowProps) {
	let artist = props.item.basic_information.artists.filter((artist: Artist) => artist.name).join(" / ");
	let format = props.item.basic_information.formats.filter((format: Format) => format.name).join(" / ");

	return (
		<tr className="table-row">
			<td>
				<Image src={props.item.basic_information.thumb} alt={props.item.basic_information.title} width={40} height={40} />
			</td>
			<td>
				{artist} - {props.item.basic_information.title}
			</td>
			<td>{format}</td>
			<td>{props.item.basic_information.year}</td>
			<td>{props.item.rating}</td>
		</tr>
	);
}
