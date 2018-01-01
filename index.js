import Util from "./util";

const u = new Util();

console.log(u.format('Hi {0}. Did you see the {1}?', ['Pikachu', 'Meow']));

console.log(u.includes('Ali Baba', 'Baba'))

console.log(u.is([1, 2, 3], u.Array));

console.log(u.is({'a': 'v'}, u.Object))

console.log(u.is(5.1, u.Integer));

console.log(u.is(3.2, u.Double));

console.log(u.is('Ali' + 123, u.String));
const a = (d) => {}
console.log(u.is(a, u.Function));
console.log(u.is(function a (d) {}, u.Function));

console.log(u.is(class b {}, u.Class));

console.log(u.count('My name is no name when I do not like names. What is your name? Can u say your naming conversion', 'name'));

console.log(u.count('😚 You now I\'ll be happy', u.Letter));

console.log(u.count([1, 2, 3], u.Array));

console.log(u.count({'w': 't', 'w2': 't2', 'wf': 'wf', 'wfs': 'wfs2'}, u.Object));

console.log(u.is('#button', 'visible'));

console.log(u.is("#chk", 'checked'));

console.log(u.is("#rdb", 'checked'));

console.log(u.url(null, true));

console.log(u.url('search'))