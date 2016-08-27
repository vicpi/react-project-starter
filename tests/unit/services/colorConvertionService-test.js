import { expect } from 'chai';
import { rgbaToHex } from '../../../src/js/services/colorConvertionService';

describe('colorConvertionService', function () {
  it('should convert "rgba(51, 122, 183, 1)" to "#337AB7"', function () {
    expect(
      rgbaToHex('rgba(51, 122, 183, 1)')
    ).to.equal('#337AB7');
  });

  it('should convert "rgba()" to null', function () {
    expect(
      rgbaToHex('rgba()')
    ).to.equal(null);
  });
})
