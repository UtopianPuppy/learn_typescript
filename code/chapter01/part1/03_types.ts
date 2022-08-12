//可以用字面量进行类型声明
let a: 10;
a = 10;

// 可以使用 | 来来连接多个类型（联合类型）
let b: 'male' | 'female';
b = 'male';
b = 'female';

// any 表示的是任意类型，一个变量类型设置为any后相当于对该变量关闭了TS的类型检测
// 不建议使用any类型
let c: any;
c = 123;
c = 'hello';
c = true

// unknown 表示未知类型的值
let d: unknown;
d = 123;
d = 'world';
d = false;

let s: string;
// c的类型是any，它可以赋值给任意变量
// s=c;

// s=d;

// unknown 实际上就是一个类型安全的any
// unknown 类型的值不能直接赋值给其他变量 必须做类型判断

// 类型断言，可以用来告诉解析器变量的实际类型
/**
 * 语法：
 *      变量 as 类型
 *      <类型>变量
 */

// void 用来表示空，以函数为例，表示没有返回值的函数
function fn(): void {

}

// never 表示永远不会返回结果
function fn2(): never {
    throw new Error('出错了！')
}
