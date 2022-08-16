(function () {
    class Person {
        /**
         *  TS可以在属性前添加属性的修饰符
         *      public 修饰的属性可以在任意位置访问/修改 默认值
         *      private 私有属性，私有属性只能在类内部进行访问/修改
         *          - 通过在类中添加方法使得私有属性可以被外部访问
         *      protected 受保护的属性，只能在当前类和当前类的子类中访问/修改
         */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /**
         *  getter 方法用来读取属性
         *  setter 方法用来设置属性
         *      - 他们被称为属性的存取器
         */

        // getName() {
        //     return this._name;
        // }
        //
        // setName(value: string) {
        //     this._name = value
        // }
        //
        // getAge() {
        //     return this._age
        // }
        //
        // setAge(value: number) {
        //     if (value >= 0) {
        //         this._age = value
        //     }
        // }

        // TS中设置getter方法的方式
        get name() {
            return this._name
        }

        set name(value) {
            this._name = value
        }

        get age() {
            return this._age
        }

        set age(value: number) {
            if (value >= 0) {
                this._age = value
            }
        }
    }

    const per = new Person('Alex', 18);

    /**
     *  现在属性是在对象中设置的，属性可以任意的被修改
     *      属性可以任意被修改将会导致对象中的数据变得非常不安全
     */
    // per.name = 'Benjamin';
    // per.age = 49;
    // per.setName('Benjamin');
    //
    // per.getName();

    per.name = 'Benjamin';
    per.age = 39;

    console.log(per)

})()