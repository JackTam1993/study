// 生成一个长度为5且随机不重复的数字
var arr = [];

function createRamdomCode() {
    return Math.ceil(Math.random() * 32);
}

function ramdomArr(code) {
    if(arr.includes(code)) {
        return ramdomArr(createRamdomCode());
    } else if(arr.length == 5) {
        return arr;
    } else {
        arr.push(code)
        return ramdomArr(createRamdomCode());
    }
}

console.log(ramdomArr(createRamdomCode()));
