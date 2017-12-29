## Init

```javascript
const u = new Util();
```

## Format

```javascript
console.log(u.format('Hi {0}. Did you see the {1}?', ['Pikachu', 'Meow']));
console.log(u.format('Hi {Pikachu}. Did you see the {Meow}?', {'Pokemon': 'Pikachu', 'Boss': 'Meow'}));
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
```

