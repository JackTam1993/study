class FakeGlobal {

    constructor() {}

    setTimeout() {
        console.log('setTimeout');
        console.log(this)
    }
}

const f = new FakeGlobal();

let g = f.setTimeout.bind(global);
g();

console.log('--------')

let g1 = f.setTimeout;
g1();