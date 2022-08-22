class Snake {
    head: HTMLElement;
    bodies: HTMLCollectionOf<HTMLElement>;
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value) {
        if (this.X === value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!')
        }

        // 修改X时，是在修改水平坐标，蛇在左右移动，不能向反方向掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 如果发生了掉头，则继续往当前方向移动
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        this.moveBody();

        this.head.style.left = value + 'px';

        this.checkCrash()
    }

    set Y(value) {
        if (this.Y === value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!')
        }

        // 修改Y时，是在修改垂直坐标，蛇在上下移动，不能向反方向掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 如果发生了掉头，则继续往当前方向移动
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody();

        this.head.style.top = value + 'px';

        this.checkCrash()
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkCrash() {
        for (let i = 1; i < this.bodies.length; i++) {
            if (this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop) {
                throw new Error('检测到碰撞！')
            }
        }
    }
}

export default Snake;