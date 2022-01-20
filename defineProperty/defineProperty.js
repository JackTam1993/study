let vue = {}

let data = {
    data: 1,
    arr: [1,2,3,4,5],
    obj: {
        a: 1,
        b: 2
    }
}

function dataEmitter(value) {
    console.log('emit: ' + value);
}

Object.defineProperty(vue, "data", {
    get() {
        return data.data;
    },
    set(value) {
        data.data = value;
        dataEmitter(value);
    },
    enumerable : true,
    configurable : true
})

Object.defineProperty(vue, "arr", {
    get() {
        return data.arr;
    },
    set(value) {
        data.arr = value;
        dataEmitter(value);
    },
    enumerable : true,
    configurable : true
})

Object.defineProperty(vue, "obj", {
    get() {
        return data.obj;
    },
    set(value) {
        data.obj = value;
        dataEmitter(value);
    },
    enumerable : true,
    configurable : true
})

vue.data = 2;
vue.arr = [2,3,4,5,6]
console.log(vue.arr)
vue.arr.push(9);
console.log(vue.arr)
vue.arr[0] = 100;
console.log(vue.arr)

console.log('------------')
vue.obj.a = 'good'
console.log(vue.obj)
Object.assign(vue.obj, {c: 'bad'})
console.log(vue.obj)
vue.obj = Object.assign({}, {...vue.obj, c: 'bad'})
console.log(vue.obj)