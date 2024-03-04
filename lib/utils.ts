const { toString } = Object.prototype

const kindOf = ((cache: Object) => (thing: unknown) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null)); 


const kindOfTest = (type: string) => {
  type = type.toLowerCase();
  return (thing: unknown) => kindOf(thing) === type
}

const typeOfTest = (type: string) => (thing: unknown) => typeof thing === type;


export {
  typeOfTest,
  kindOf,
  kindOfTest
}