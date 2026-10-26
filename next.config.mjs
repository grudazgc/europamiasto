const isExport = process.env.NEXT_OUTPUT === 'export';
const config = {
  output: isExport ? 'export' : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};
export default config;
