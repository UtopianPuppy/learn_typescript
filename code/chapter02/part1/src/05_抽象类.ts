(function () {
    /**
     *  以abstract开头的类是抽象类
     *      抽象类和其他类区别不大，只是不能用来创建对象
     *      抽象类就是专门用来被继承的类
     */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        // 定义一个抽线类
        // 抽象方法使用abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello(): void
    }

    class Dog extends Animal {

        sayHello() {
            // 在类的方法中 super就表示当前类的父类
            // super.sayHello();

            console.log("汪汪汪！")
        }
    }

    class Cat extends Animal {
        sayHello() {
            console.log("喵喵喵")
        }
    }

    const dog = new Dog("渺渺");
    dog.sayHello();

    // const an = new Animal()
})()