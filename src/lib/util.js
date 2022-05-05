export const minmax = data => [
  data.reduce((a,b) => Math.min(a,b), Infinity),
  data.reduce((a,b) => Math.max(a,b), -Infinity),
];
