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

let t = '';
let b = ' ';
console.log(u.is(t, u.Empty));

console.log(u.is(b, u.Blank));

let anElement = '';

console.log(u.is(anElement, u.Element));

anElement = document.querySelector("button");

console.log(u.is(anElement, u.Element));

console.log(u.url(null, true));

console.log(u.url('search'));

console.log(u.is('goren.ali@yandex.com', u.Email));

console.log(u.is('tchİŞ@hotmaıl.com', u.Email));

console.log(u.is('tchİŞ@hotmaıl.', u.Email));

console.log(u.is('https://aligoren.com', u.Url));

console.log(u.is('ftp://github.com', u.Url));

console.log(u.is('http://localhost', u.Url));

console.log(u.is('www.google.com', u.Url));

console.log(u.page('title'))

u.page('title', 'New Page title')

console.log(u.page('charset'))

u.page('charset', 'UTF-8');

console.log(u.page('doctype'));

console.log(u.page('location'));

console.log(u.page('location', 'https://www.google.com.tr'));

console.log(u.page('design'));

u.page('design', 'on' || 'off');

console.log(u.page('scripts'));

console.log(u.page('styles'));

console.log(u.page('referrer'));

console.log(u.page('modified'));

u.when('button', 'click', (data) => {
    console.log(data.event);
    console.log(data.index);
    console.log(data.text);
    console.log(data.html);
});

u.when('document', 'click', (data) => {
    console.log(data.event);
    console.log(data.index);
    console.log(data.text);
    console.log(data.html);
});

u.when('document', 'DOMContentLoaded', (data) => {
    console.log(data); // from event
});

u.when('document', 'load', (data) => {
    console.log(data); // from event
});


const arr = [
    {
        name: 'test',
        surname: 'test1'
    },
    {
        name: 'test23',
        surname: 'newsname'
    },
    {
        name: 'test23',
        surname: 'newsname'
    }
]

console.log(u.where(arr, 'surname', 'newsname'));
