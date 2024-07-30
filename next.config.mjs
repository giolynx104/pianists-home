/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: `${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com`,
      },
    ],
  },
};

export default nextConfig;
