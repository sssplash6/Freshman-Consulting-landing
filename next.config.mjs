/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Root always lands on the default locale. Not permanent so the
      // default can change (or become Accept-Language-aware) later.
      { source: "/", destination: "/ru", permanent: false },
    ];
  },
};

export default nextConfig;
