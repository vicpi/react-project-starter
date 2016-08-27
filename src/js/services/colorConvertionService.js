const colorConvertion = require('color-convert');

/**
 * Converts color from rgba format to HEX format
 * rgbaToHex(51, 122, 183, 1) === '#337AB7'
 */
export function rgbaToHex(color) {
  const colorMatches = color.toString().match(/rgba\((\d+), (\d+), (\d+), \d\)/);
  if (colorMatches === null) {
    return null;
  }
  const colorR = parseInt(colorMatches[1]);
  const colorG = parseInt(colorMatches[2]);
  const colorB = parseInt(colorMatches[3]);
  const colorConverted = colorConvertion.rgb.hex([colorR, colorG, colorB]);

  return '#' + colorConverted;
}
