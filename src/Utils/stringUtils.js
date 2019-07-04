

/**
 * Function that capitalizes the first letter in a string
 *
 * @param {string} string String to be capitalized
 */
export const capitalizeFirstLetter = (string: string) => {
  if (string !== undefined) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
};

export const toBeCreated = (string: string) => string;
