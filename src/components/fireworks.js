import React from "react"
import style from "./fireworks.module.css"
import Firework from "./firework"

class Fireworks extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state = {
      mx: 150,
      my: 150,
      angle: 0,
      fireworks: [],
      particles: [],
      limiterTotal: 5,
      limiterTick: 0,
      // this will time the auto launches of fireworks, one launch per 80 loop ticks
      timerTotal: 80,
      timerTick: 0,
      mousedown: false,
    }

    this.updateAnimationState = this.updateAnimationState.bind(this)
    this.random = this.random.bind(this)
  }

  componentDidMount() {
    // this.loopFireworks(ctx, width, height)
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  updateAnimationState() {
    // this.setState(prevState => ({ angle: prevState.angle + 1 }))
    const canvas = this.canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height
    this.loopFireworks(ctx, width, height)
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  loopFireworks(ctx, height, width) {
    // this function will run endlessly with requestAnimationFrame
    // requestAnimFrame(loop)
    // this.rAF = requestAnimationFrame(this.loopFireworks)
    this.setState({ hue: this.random(0, 360) })

    // normally, clearRect() would be used to clear the canvas
    // we want to create a trailing effect though
    // setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
    ctx.globalCompositeOperation = "destination-out"
    // decrease the alpha property to create more prominent trails
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
    ctx.fillRect(0, 0, width, height)
    // change the composite operation back to our main mode
    // lighter creates bright highlight points as the fireworks and particles overlap each other
    ctx.globalCompositeOperation = "lighter"

    // loop over each firework, draw it, update it
    let i = this.state.fireworks.length
    while (i--) {
      this.state.fireworks[i].draw(ctx)
      this.state.fireworks[i].update(i)
      this.state.fireworks.splice(i, 1)
    }

    // loop over each particle, draw it, update it
    let j = this.state.particles.length
    while (j--) {
      this.particles[j].draw(ctx)
      this.particles[j].update(j)
      let alpha = 1
      // set how fast the particle fades out
      let decay = this.random(0.015, 0.03)
      if (alpha <= decay) {
        this.state.particles.splice(i, 1)
      }
    }

    // launch fireworks automatically to random coordinates, when the mouse isn't down
    if (this.state.timerTick >= this.state.timerTotal) {
      if (!this.state.mousedown) {
        // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
        this.state.fireworks.push(
          new Firework(
            width / 2,
            height,
            this.random(0, width),
            this.random(0, height / 2)
          )
        )
        this.setState({ timerTick: 0 })
      }
    } else {
      this.setState(state => {
        return { timerTick: state.timerTick + 1 }
      })
    }

    // limit the rate at which fireworks get launched when mouse is down
    if (this.state.limiterTick >= this.state.limiterTotal) {
      if (this.state.mousedown) {
        // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
        this.state.fireworks.push(
          new Firework(width / 2, height, this.state.mx, this.state.my)
        )
        this.setState({ limiterTick: 0 })
      }
    } else {
      this.setState(state => {
        return { limiterTick: state.limiterTick + 1 }
      })
    }
  }

  random(min, max) {
    return Math.random() * (max - min) + min
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF)
  }

  render() {
    return (
      <div>
        <canvas className={style.canvas_fireworks} ref={this.canvasRef} />
      </div>
    )
  }
}
export default Fireworks
