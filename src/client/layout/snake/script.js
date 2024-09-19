class Part {
    constructor(game, x, y) {
        this.game = game
        this.x = x
        this.y = y
        this.drawX = x * game.cellWidth - game.cellWidth/2
        this.drawY = y * game.cellWidth - game.cellWidth/2
        this.xvel = 0
        this.yvel = 0
        this.next = null
        this.vel = game.cellWidth/15
    }

    move() {
        this.drawX += this.xvel * this.vel
        this.drawY += this.yvel * this.vel
        if (this.next) {
            this.next.move()
        }
    }

    updateNextVel(xvel, yvel) {
        if (this.next) {
            this.next.updateNextVel(this.xvel, this.yvel);
        }
        this.xvel = xvel;
        this.yvel = yvel;
    }

    draw() {
        this.game.context.beginPath()
        this.game.context.fillStyle = "blue"
        this.game.context.arc(this.drawX, this.drawY, this.game.cellWidth/3, 0, 2*Math.PI)
        this.game.context.fill()

        if (this.next) {
            this.next.draw()
        }
    }

    addPart() {
        if (this.next) {
            this.next.addPart()
            return
        }
        this.next = new Part(this.game, this.x, this.y)
        this.game.snakeBod.push(this.next)
    }
}

class Fruit {
    constructor(game) {
        this.game = game
        this.pos = this.generatePosition()
    }

    generatePosition() {
        while (true) {
            let x = Math.round(Math.random() * (this.game.cells-1)+1)
            let y = Math.round(Math.random() * (this.game.cells-1)+1)

            for (let i = 0; i < this.game.snakeBod.length; i++) {
                if (this.game.snakeBod.x === x && this.game.snakeBod.y === y) {
                    continue
                }
            }
            return {x: x, y: y}
        }
    }

    draw() {
        this.game.context.beginPath()
        this.game.context.fillStyle = "red"
        this.game.context.arc(this.pos.x * this.game.cellWidth - this.game.cellWidth/2, this.pos.y * this.game.cellWidth - this.game.cellWidth/2, this.game.cellWidth/3.5, 0, 2*Math.PI)
        this.game.context.fill()
    }
}

class Game {
    constructor(canvas) {
        this.cells = 13
        this.canvas = canvas
        this.resize()
        this.context = canvas.getContext("2d")
        this.addEventListeners()
        this.nextUpdate = null
        this.updateAllowed = true
        
        this.snake = new Part(this, 7, 7)
        this.snake.xvel = 1
        this.snakeBod = [this.snake]

        this.fruit = new Fruit(this)
        this.draw()
        this.start()
    }

    addEventListeners() {
        document.addEventListener("keydown", (e) => {
            if (e.keyCode === 38) {
                if (this.snake.yvel === 1) return
                this.nextUpdate = [0, -1]
            } else if (e.keyCode === 37) {
                if (this.snake.xvel === 1) return
                this.nextUpdate = [-1, 0]
            } else if (e.keyCode === 39) {
                if (this.snake.xvel === -1) return
                this.nextUpdate = [1, 0]
            } else if (e.keyCode === 40) {
                if (this.snake.yvel === -1) return
                this.nextUpdate = [0, 1]
            }
        })
    }

    start() {
        if (this.snakeDied()) {
            this.snake = new Part(this, 7, 7)
            this.snake.xvel = 1
            this.snakeBod = [this.snake]
        }

        this.draw()

        this.snake.move()

        if (Math.round(this.snake.drawX) === Math.round((this.snake.x + 1) * this.cellWidth-this.cellWidth/2)
            || Math.round(this.snake.drawX) === Math.round((this.snake.x - 1) * this.cellWidth-this.cellWidth/2)) {
            this.updateVel()
        }else if (Math.round(this.snake.drawY) === Math.round((this.snake.y + 1) * this.cellWidth-this.cellWidth/2)
            || Math.round(this.snake.drawY) === Math.round((this.snake.y - 1) * this.cellWidth-this.cellWidth/2)) {
            this.updateVel()
        }

        if (this.fruitEaten()) {
            this.fruit = new Fruit(this)
            this.snake.addPart()
        }
        requestAnimationFrame(() => {this.start()})
    }

    resize() {
        this.width = Math.round(Math.min(window.innerHeight, window.innerWidth) * 0.8)
        this.cellWidth = this.width / this.cells
        this.canvas.width = this.width
        this.canvas.height = this.width
    }

    draw() {
        this.context.clearRect(0,0,this.width,this.width)
        this.drawGrid()
        this.fruit.draw()
        this.snake.draw()
    }

    drawGrid() {
        let a = 0
        for (let y = 0; y < this.cells; y++) {

            for (let x = 0; x < this.cells; x++) {
                this.context.beginPath()
                this.context.fillStyle = (x%2 === a ? "#39e75f" : "lightgreen")
                this.context.rect(x*this.cellWidth, y*this.cellWidth, this.cellWidth, this.cellWidth)
                this.context.fill()
            }
            if (a) {
                a=0
            } else {
                a=1
            }
        }
    }

    updateVel() {
        for (let i = this.snakeBod.length - 1; i >= 0; i--) {
            this.snakeBod[i].x += this.snakeBod[i].xvel
            this.snakeBod[i].y += this.snakeBod[i].yvel
            if (i === 0) {
                if (!this.nextUpdate) {
                    return
                }
                
                this.snakeBod[i].xvel = this.nextUpdate[0]
                this.snakeBod[i].yvel = this.nextUpdate[1]

                this.nextUpdate = null
                return
            }
            this.snakeBod[i].xvel = this.snakeBod[i - 1].xvel
            this.snakeBod[i].yvel = this.snakeBod[i - 1].yvel
        }
    }

    fruitEaten() {
        return this.snake.x === this.fruit.pos.x && this.snake.y === this.fruit.pos.y
    }

    snakeDied() {
        if(this.snake.x > this.cells || this.snake.x <= 0 || this.snake.y > this.cells || this.snake.y <= 0) {
            return true
        }
        if (this.snakeBod.length <= 2) return false

        for (let i = 1; i < this.snakeBod.length; i++) {
            if (this.snakeBod[i].x === this.snake.x && this.snakeBod[i].y === this.snake.y) {
                return true
            } 
        }

        return false
    }
}

export default Game