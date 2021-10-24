// Replace `nextjs-github-pages` with your Github repo project name.
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the prefix in production and not development.
  assetPrefix: isProd ? '/devcia.github.io/' : '',
  images: {
    loader: 'imgix',
    path: '',
  },
}