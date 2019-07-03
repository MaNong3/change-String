//字符串 'A胖了B病了C馊了'转换为[{A:胖了}，{B：病了}，{C：搜了}]
let str = 'A胖了B病了C馊了';
let arr = [];
function a(str) {
    let b = str.match(/[A-Z][\u4e00-\u9fa5]+/g);
    for (let i in b) {
        let keys = b[i].slice(0, 1);
        let obj = {};
        obj[keys] = b[i].slice(1);
        arr.push(obj)
    }
    return arr;
}

console.log(a(str))