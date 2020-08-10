import romanize from 'romanize';

const transform = (number) => {
    return romanize(number);
};

export {
    transform
};