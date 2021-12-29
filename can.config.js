/**
 * Configuration built by `npm run build`
 */
const config = {
  collection: "https://can-the.vercel.app/iiif/collection/north-american.json",
  title: "The North Americans",
  hero: [
    "https://can-the.vercel.app/iiif/manifest/uncategorized/shores-of-nootka-sound.json",
    "https://can-the.vercel.app/iiif/manifest/nez-perce/08-map-territory.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
const dev = {
  collection: "http://localhost:5001/iiif-dev/collection/north-american.json",
  hero: [
    "http://localhost:5001/iiif-dev/manifest/uncategorized/shores-of-nootka-sound.json",
    "http://localhost:5001/iiif-dev/manifest/nez-perce/08-map-territory.json",
  ],
  metadata: ["Date", "Subject"],
  title: "The North Americans",
};

/**
 * Large but shallow collection for testing
 */
const devAlt = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/acwiley",
  hero: ["https://digital.lib.utk.edu/assemble/manifest/acwiley/427"],
  metadata: ["Coverage", "Date", "Topic"],
  title: "Anna Catherine Wiley Sketches",
};

exports.config = config;
exports.dev = dev;