class Player {
  constructor(image) {
    this.image = image
    this.x =  250,
    this.y = 300,
    this.bullets = [],
    this.noDamage = false,
    this.life = 20
    this.speed = 12
    this.isReload = false
    this.weapon = new PlayerWeapon('basic', '普通', 1 , 500, (player) => {
      player.bullets.push(
        new PlayerBullet(this, 8, 12),
      )
    })

    this.moveUp = () => {
      this.y -= this.speed
    }

    this.moveDown = () => {
      this.y += this.speed
    }

    this.moveRight = () => {
        this.x += this.speed
    }
  
    this.moveLeft = () => {
    this.x -= this.speed
    }

    this.shot = () => {
      if (this.isReload) {
        return
      }

      this.reload()

     this.weapon.shot(this)
    }

    this.changeWeapon = (playerWeapon) => {
      this.weapon = playerWeapon
    }

    this.reload = () => {
      this.isReload = true
      setInterval(() => { this.isReload = false } , this.weapon.interval)
    }

    this.render = (context) => {
      context.drawImage(this.image, this.x, this.y)
    }

    this.bulletsCleanUp = () => {
      this.bullets = this.bullets.filter(b => b.y > -10 && b.y < 710 )
    }
  }
}

class PlayerBullet {
  constructor(player, x, y) {
    this.image = bulletImage,
    this.x = player.x + x,
    this.y = player.y - y,
    this.damage = player.weapon.damage
    this.speed = 12

    this.render = (context) => {
      context.drawImage(this.image, this.x, this.y)
    }

    this.move = () => {
      this.y -= this.speed
    }
  }
}

class PlayerWeapon {
  constructor(name, description, damage, interval, shotCallback) {
    this.name = name
    this.description = description
    this.damage = damage
    this.interval = interval
    this.shotCallback = shotCallback

    this.shot = (player) => {
      this.shotCallback(player)
    }
  }
}
