import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.discogs.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
