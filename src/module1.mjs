import ui, {a,b,c} from './module2.mjs';  // importing b in module1.mjs


console.log(ui);  // Printout ui content, yaha ui ki jagah me kuch b use karunga phir bhi output aayega kyunki
// me module1 me export by default karraha hun.
// Idhar me abc ki jagah kuch aur nahi likh sakta kumki mene module1 me abc ko be default export nahi kiya.
console.log(a);
console.log(b);
console.log(c);