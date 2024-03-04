export default (str: unknown) => {
  if (typeof str !== 'string') {
    return str
  }
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(_m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
}