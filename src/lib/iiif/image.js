const { createThumbnailHelper } = require("@iiif/helpers");

exports.getRepresentativeImage = async (resource, preferredSize = 1200) => {
  const helper = createThumbnailHelper();
  try {
    return await helper.getBestThumbnailAtSize(
      resource,
      {
        width: preferredSize,
        height: preferredSize,
        minWidth: preferredSize,
        minHeight: preferredSize,
      },
      true,
      [],
      {
        width: preferredSize,
        height: preferredSize,
      }
    );
  } catch (error) {
    console.log(error);
    return {};
  }
};
