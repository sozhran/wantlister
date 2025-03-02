import Image from "next/image";
import Logo from "@/app/images/logo.png";

export default function Header() {
	return (
		<div key="header" className="header">
			<div className="header-side">
				<Image src={Logo} alt="logo" height={40} width={40} />
			</div>
			<div>
				<h1>WANTLISTER</h1>
			</div>
			<div className="header-side"></div>
		</div>
	);
}
