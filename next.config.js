const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/qr-code-component' : '',
  output: 'export',
  images: {
    unoptimized: true,
  }
};
module.exports = nextConfig;
