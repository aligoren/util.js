const checker = Symbol('check');
const isArray = Symbol('array');
const isObject = Symbol('object');
const isInteger = Symbol('integer');
const isDouble = Symbol('double');
const isString = Symbol("string");
const isFunction = Symbol("function");
const isClass = Symbol("class");

class Util {
    constructor() {
    }

    get version() {
        return "1.0.0";
    }

    get Array() {
        return "Array";
    }

    get Object() {
        return "Object";
    }

    get Integer() {
        return "Integer";
    }

    get Double() {
        return "Double";
    }

    get String() {
        return "String";
    }

    get Function() {
        return "Function";
    }

    get Class() {
        return "Class";
    }

    [isArray](data) {
        return Array.isArray(data);
    }

    [isObject](data) {
        return data instanceof Object && data.constructor === Object;
    }

    [isInteger](data) {
        let x;
        if (isNaN(data)) {
            return false;
        }
        x = parseFloat(data);
        return (x | 0) === x;
    }

    [isDouble](data) {
        let isNan = isNaN(data);
        let isDouble = false;
        if(isNan) {
            isDouble = false;
        } else {
            isDouble = !(Math.round(data) === data);
        }
        return  isDouble; 
    }

    [isString](data) {
        return data.constructor === String && Object.prototype.toString.call(data) === '[object String]';
    }

    [isFunction](data) {
        let isFunc = ((Object.prototype.toString.call(data) === '[object Function]' 
                        || data.constructor === Function )
                        && this.startsWith(data, '('));
        return  isFunc || this.startsWith(data, 'function');
    }

    [isClass](data) {
        let isClass = ((Object.prototype.toString.call(data) === '[object Function]' 
                        || data.constructor === Function));
        
        return isClass && this.startsWith(data, 'class');
    }

    [checker](data, type) {
        let types = {
            'Array': this[isArray](data),
            'Object': this[isObject](data),
            'Integer': this[isInteger](data),
            'Double': this[isDouble](data),
            'String': this[isString](data),
            'Function': this[isFunction](data),
            'Class': this[isClass](data)
        }

        return types[type];
    }

    startsWith(data, search, pos) {
        return data.toString().substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }

    format(strVal) {
        let str = strVal.toString();
        if (arguments.length) {
            let t = typeof arguments[1];
            let key;
            let args = ("string" === t || "number" === t) ?
                Array.prototype.slice.call(arguments)
                : arguments[1];

            for (key in args) {
                str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
            }
        }

        return str;
    }

    is(data, type) {
        return this[checker](data, type);
    }

    includes(strVal, search) {
        if(!String.prototype.includes) {
            return strVal.indexOf(search) > -1;
        } else {
            return strVal.includes(search);
        }
    }
}

