export const isEven = num => num % 2 === 0;

export const getRandomInteger = (max = 100, min = 1) => (
  Math.round(min - 0.5 + Math.random() * (max - min + 1))
);
