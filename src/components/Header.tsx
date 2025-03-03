import Image from "next/image";
import Logo from "@/app/images/logo.png";
import { retrieveRatedList } from "@/functions/DiscogsProcessing";

export default async function Header() {
	//const ratedList = await retrieveRatedList();

	return (
		<div key="header" className="header">
			<div className="header-side">
				<Image src={Logo} alt="logo" height={40} width={40} />
			</div>
			<div>
				<h1>WANTLISTER</h1>
			</div>
			<div className="header-side">{/*{ratedList ? ratedList.length : "0"}*/}</div>
		</div>
	);
}
