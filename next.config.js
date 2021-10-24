// Replace `nextjs-github-pages` with your Github repo project name.
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  images: {
    loader: 'imgix',
    path: '',
  },
}