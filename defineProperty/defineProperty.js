let vue = {}

let data = {
    data: 1
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

vue.data = 2;
console.log(vue.data)