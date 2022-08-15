class Person {
    /**
     *  直接定义的属性是实例属性，需要通过队形的实例去访问：
     *      const per = new Person();
     *      per.name
     *
     *  使用static开头的属性是静态属性（类属性），可以直接通过类去调用
     *      Person.age
     *
     *  readonly开头的属性表示一个只读的属性无法修改
     */
    name: string = 'Alex';

    // 在属性前使用static关键字可以定义类属性（静态属性）
    static age: number = 18

    // 定义方法
    /**
     *  如果方法以static开头则方法就是类方法，可以直接通过类去调用
     */
    sayHello() {
        console.log('Hello!');
    }
}

const per = new Person();

// console.log(per.name, per.age)
console.log(Person.age);

per.sayHello();