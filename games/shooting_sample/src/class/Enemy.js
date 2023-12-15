class Enemy {
  constructor(image, x, y, hp) {
    this.image = image
    this.x =  x,
    this.y = y,
    this.hp = hp
    this.bullets = [],
    this.noDamage = false

    this.move = () => {
      this.y += 6
    }

    this.render = (context) => {
      context.drawImage(this.image, this.x, this.y)
    }
  }
}
