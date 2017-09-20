const getRandomHexNumber = () => {
    const options = '0123456789abcdef';
    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

export const getRandomColor = () => {
    const color = Array.from(new Array(6), () => getRandomHexNumber()).join('');
    return '#' + color;
}

export const getRandomColors = (count) => {
    return Array.from(new Array(count), (val, index) => (
        {
            id: index,
            color: getRandomColor()
        }
    ));
}

const hexToRgb = (colorHex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const rgbToHex = ({ r, g, b }) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export const mixColors = (colorA, colorB) => {
    const rgbA = hexToRgb(colorA);
    const rgbB = hexToRgb(colorB);
    const resultRgb = {
        r: Math.round(0.5 * rgbA.r + 0.5 * rgbB.r),
        g: Math.round(0.5 * rgbA.g + 0.5 * rgbB.g),
        b: Math.round(0.5 * rgbA.b + 0.5 * rgbB.b)
    }

    return rgbToHex(resultRgb);
}

export const getBgColorStyle = (color) => {
    if (color) {
        return { backgroundColor: color };
    } 
    return { backgroundColor: '#cccccc' };
};
