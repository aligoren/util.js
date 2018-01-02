## Init

```javascript
const u = new Util();
```

## Format

```javascript
console.log(u.format('Hi {0}. Did you see the {1}?', ['Pikachu', 'Meow']));
console.log(u.format('Hi {Pikachu}. Did you see the {Boss}?', {'Pokemon': 'Pikachu', 'Boss': 'Meow'}));
```

## Includes

```javascript
console.log(u.includes('Ali Baba', 'Baba'))
```

## Is Validation

```javascript 
console.log(u.is([1, 2, 3], u.Array));

console.log(u.is({'a': 'v'}, u.Object))

console.log(u.is(5.1, u.Integer));

console.log(u.is(3.2, u.Double));

console.log(u.is('Ali' + 123, u.String));

console.log(u.is(a = (d) => {}, u.Function));
console.log(u.is(function a (d) {}, u.Function));

console.log(u.is(class b {}, u.Class));

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

console.log(u.is('goren.ali@yandex.com', u.Email));

console.log(u.is('tchİŞ@hotmaıl.com', u.Email));

console.log(u.is('tchİŞ@hotmaıl.', u.Email));

console.log(u.is('https://aligoren.com', u.Url));

console.log(u.is('ftp://github.com', u.Url));

console.log(u.is('http://localhost', u.Url));

console.log(u.is('www.google.com', u.Url));
```

## Count

**Word Count**:

```javascript
console.log(u.count('My name is no name when I do not like names. What is your name? Can u say your naming conversion', 'name'));
```

**Letter Count**:

```javascript
console.log(u.count('😚 You now I\'ll be happy', u.Letter));
```

**Array Count**:

```javascript
console.log(u.count([1, 2, 3], u.Array));
```

**Object Key Count**:

```javascript
console.log(u.count({'w': 't', 'w2': 't2', 'wf': 'wf', 'wfs': 'wfs2'}, u.Object));
```

# Url

**All**

Values: `['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search']`

```javascript
console.log(u.url(null, true));
```

**Single**

```javascript
console.log(u.url('pathname'));
```