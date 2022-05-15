export const withTimeout = (res, milliseconds) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(res);
    }, milliseconds);
  });
}