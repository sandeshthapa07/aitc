import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  // Other Next.js configurations
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
};

export default withPlaiceholder(nextConfig);
