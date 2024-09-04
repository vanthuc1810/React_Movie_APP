export const createImageUrl = (path, size = "w500") => {
  const baseUrl = config.images.secure_base_url;
  const validSizes = config.images.poster_sizes;

  // Kiểm tra xem kích thước có hợp lệ không
  if (!validSizes.includes(size)) {
    throw new Error(
      `Invalid size. Available sizes are: ${validSizes.join(", ")}`
    );
  }

  return `${baseUrl}${size}${path}`;
};
