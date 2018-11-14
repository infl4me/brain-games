export default (max = 100, min = 1) => (
  Math.round(min - 0.5 + Math.random() * (max - min + 1))
);
