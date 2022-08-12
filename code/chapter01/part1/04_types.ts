// {} 用来指定对象可以包含哪些属性
// 语法: {属性名: 属性值, 属性名: 属性值}
// 在属性名后面加上?表示属性是可选的
let b: { name: string, age?: number }
b = {name: 'Bob', age: 18}

// [propName: string]: any 表示任意类型的属性
let c: { name: string, [propName: string]: any }
c = {name: 'Axe', age: 23, gender: 'male'}

/**
 *  设置函数结构的类型声明
 *      语法: (形参: 类型, 形参: 类型, ...) => 返回值
 */
let d: (a: number, b: number) => number
d = function (num1, num2) {
    return num1 + num2
}

/**
 *  数组的类型声明
 *      类型[]
 *      Array<类型>
 */
let e: string[];
e = ['a', 'b', 'c']

let f: number[];
f = [1, 23, 34]

let g: Array<string>;
g = ['hello', 'typescript']

/*
    元组，元组就是固定长度的数组
        语法: [类型，类型，类型]
 */
let h: [string, number]
h = ['hello', 123]

/*
    enum 枚举
 */
enum Gender {
    Male,
    Femaile
}

let i: { name: string, gender: Gender }
i = {
    name: 'Bob',
    gender: Gender.Male
}

/*
    类型的别名
 */
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;

k = 2
