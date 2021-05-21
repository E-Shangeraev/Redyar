import replace from '@rollup/plugin-replace'

export default {
  plugins: [
    replace({
      preventAssignment: true,
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify(mode),
    }),
  ],
}
