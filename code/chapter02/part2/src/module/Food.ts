class Food {
    element: HTMLElement;

    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById("food")!;
    }

    get X() {
        // 定义一个获取十五X轴坐标的方法
        return this.element.offsetLeft
    }

    get Y() {
        // 定义一个获取食物Y轴坐标的方法
        return this.element.offsetTop
    }

    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}

export default Food;