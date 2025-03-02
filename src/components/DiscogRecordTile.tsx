import Image from "next/image";
import { DiscogWantlistRecord } from "@/lib/DiscogWantlist";

interface Props {
	record: DiscogWantlistRecord;
	i: number;
}

//export default function DiscogRecordTile({ record, i }: Props) {
//	return (
//		<div key={"record_" + i} className="card">
//			<div className="cover-art-container">
//				<Image src={record.basic_information.cover_image} alt={record.basic_information.title} fill={true} />
//			</div>
//			<p>
//				<b>{record.basic_information.artists.map((artist) => artist.name).join(" / ")}</b>
//			</p>
//			<p>{record.basic_information.title}</p>
//		</div>
//	);
//}

export default function DiscogRecordTile({ record, i }: Props) {
	return (
		<div key={"record_" + i} className="small-card">
			{/*<div className="cover-art-container">*/}
			<div>
				<Image src={record.basic_information.cover_image} alt={record.basic_information.title} height={30} width={30} />
			</div>
			<div>
				<p>
					<b>{record.basic_information.artists.map((artist) => artist.name).join(" / ")}</b>
				</p>
				<p>{record.basic_information.title}</p>
			</div>
		</div>
	);
}
