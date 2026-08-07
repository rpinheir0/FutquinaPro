const text1 = "1. Renato\n2. Joao\n3. Maria";
const text2 = "Renato, Joao, Maria";
const text3 = "1-Renato, 2-Joao, 3-Maria";
const text4 = "Renato \n Joao \n Maria";

const process = (text) => {
  const lines = text.split(/[\r\n,]+/);
  return lines.map(line => line.replace(/^[\d\.\-\*\•\s]+/, "").trim());
}

console.log("1:", process(text1));
console.log("2:", process(text2));
console.log("3:", process(text3));
console.log("4:", process(text4));
