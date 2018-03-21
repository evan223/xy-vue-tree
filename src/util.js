module.exports = function say() {
    document.write('hello world!')
}

// 使用async await语法
export default function getData() {
    return new Promise((resolve,reject) => {
        resolve('ok')
    })
}