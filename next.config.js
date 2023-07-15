/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = { assetPrefix: "./", nextConfig, images: { loader: "custom" } }
