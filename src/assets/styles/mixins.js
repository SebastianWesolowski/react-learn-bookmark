export default function flexUnit({
  fontSize = '16',
  weight = '400',
  lineHeight = 'normal',
  letterSpacing = -20,
} = {}) {
  const exportFontSize = () => {
    let fontSizeLowerCase;

    if (typeof fontSize === 'string') {
      fontSizeLowerCase = fontSize.toLocaleLowerCase();
    }

    if (fontSizeLowerCase === 'unset' || fontSizeLowerCase === '0' || fontSize === 0) {
      return '';
    }

    return `font-size: ${fontSize}px;`;
  };

  const exportLineHeight = () => {
    let lineHeightLowerCase;

    if (typeof lineHeight === 'string') {
      lineHeightLowerCase = lineHeight.toLocaleLowerCase();
    }

    // TODO Case for lineheight 0px
    if (lineHeightLowerCase === 'unset' || lineHeightLowerCase === '0' || lineHeight === 0) {
      return '';
    }

    if (lineHeight === 'normal') {
      return `line-height: ${lineHeight};`;
    }
    return `line-height: ${lineHeight}px;`;
  };

  const exportLetterSpacing = () => {
    let letterSpacingLowerCase;

    if (typeof letterSpacing === 'string') {
      letterSpacingLowerCase = letterSpacing.toLocaleLowerCase();
    }
    if (letterSpacingLowerCase === 'unset' || letterSpacingLowerCase === '0' || letterSpacing === 0) {
      return '';
    }

    const checkUnit = () => {
      if (typeof letterSpacing !== 'string') {
        return {isUnit: false, Unit: false};
      }
      let existInArray = false;
      const arrayUnit = ['%', 'px', 'em', 'vh', 'vw', 'pt', 'pc', 'ex', 'cm', 'mm', 'in', 'rem'];
      if (letterSpacing.length >= 4) {
        existInArray = arrayUnit.indexOf(letterSpacing.toLocaleLowerCase().slice(-3));
        if (existInArray >= 0) {
          return {isUnit: true, Unit: arrayUnit[existInArray]};
        }
      }
      if (letterSpacing.length >= 3) {
        existInArray = arrayUnit.indexOf(letterSpacing.toLocaleLowerCase().slice(-2));
        if (existInArray >= 0) {
          return {isUnit: true, Unit: arrayUnit[existInArray]};
        }
      }
      if (letterSpacing.length >= 2) {
        existInArray = arrayUnit.indexOf(letterSpacing.toLocaleLowerCase().slice(-1));
        if (existInArray >= 0) {
          return {isUnit: true, Unit: arrayUnit[existInArray]};
        }
      }
      return {isUnit: false, Unit: false};
    };

    if (checkUnit().isUnit) {
      return `letter-spacing: ${letterSpacing.toLocaleLowerCase()};`;
    }

    return `letter-spacing: ${letterSpacing / 1000}em;`;
  };

  const exportWidth = () => {
    let weightLowerCase = weight;
    let convertWeight = weight;

    if (typeof weight === 'string') {
      weightLowerCase = weight.toLocaleLowerCase();
    }

    if (weightLowerCase === 'unset' || weightLowerCase === '0' || weight === 0) {
      return '';
    }

    if (typeof weight === 'number') {
      return `font-weight: ${weight};`;
    }

    if (weightLowerCase === 'thin' || weightLowerCase === ' 100' || weight === 100) {
      convertWeight = 100;
    }
    if (weightLowerCase === 'light' || weightLowerCase === '300' || weight === 300) {
      convertWeight = 300;
    }
    if (weightLowerCase === 'regular' || weightLowerCase === '400' || weight === 400) {
      convertWeight = 400;
    }
    if (weightLowerCase === 'medium' || weightLowerCase === '500' || weight === 500) {
      convertWeight = 500;
    }
    if (weightLowerCase === 'bold' || weightLowerCase === '700' || weight === 700) {
      convertWeight = 700;
    }
    if (weightLowerCase === 'black' || weightLowerCase === '900' || weight === 900) {
      convertWeight = 900;
    }
    return `font-weight: ${convertWeight};`;
  };

  return `

    ${exportFontSize()}
    ${exportLineHeight()}
    ${exportLetterSpacing()}
    ${exportWidth()}
    `;
}
