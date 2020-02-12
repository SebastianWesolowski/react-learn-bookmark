export default function flexUnit({
  fontSize = '16',
  weight = '400',
  lineHeight = 'normal',
  letterSpacing = -20,
} = {}) {
  const exportLineHeight = () => {
    if (lineHeight === 'normal') {
      return `line-height: ${lineHeight}`;
    }
    return `line-height: ${lineHeight}px `;
  };

  const exportLetterSpacing = () => {
    const checkUnit = () => {
      if (typeof letterSpacing !== 'string') {
        return { isUnit: false, Unit: false };
      }
      let existInArray = false;
      const arrayUnit = ['%', 'px', 'em', 'vh', 'vw', 'pt', 'pc', 'ex', 'cm', 'mm', 'in', 'rem'];
      if (letterSpacing.length >= 4) {
        existInArray = arrayUnit.indexOf(letterSpacing.toLocaleLowerCase().slice(-3));
        if (existInArray >= 0) {
          return { isUnit: true, Unit: arrayUnit[existInArray] };
        }
      }
      if (letterSpacing.length >= 3) {
        existInArray = arrayUnit.indexOf(letterSpacing.toLocaleLowerCase().slice(-2));
        if (existInArray >= 0) {
          return { isUnit: true, Unit: arrayUnit[existInArray] };
        }
      }
      if (letterSpacing.length >= 2) {
        existInArray = arrayUnit.indexOf(letterSpacing.toLocaleLowerCase().slice(-1));
        if (existInArray >= 0) {
          return { isUnit: true, Unit: arrayUnit[existInArray] };
        }
      }
      return { isUnit: false, Unit: false };
    };

    if (checkUnit().isUnit) {
      return `letter-spacing: ${letterSpacing.toLocaleLowerCase()}`;
    }

    return `letter-spacing: ${letterSpacing / 1000}em`;
  };

  const exportWidth = () => {
    let weightLowerCase = weight;
    let convertWeight = weight;

    if (typeof weight === 'string') {
      weightLowerCase = weight.toLocaleLowerCase();
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
    font-size: ${fontSize}px;
    ${exportLineHeight()}
    ${exportLetterSpacing()}
    ${exportWidth()}
    `;
}
