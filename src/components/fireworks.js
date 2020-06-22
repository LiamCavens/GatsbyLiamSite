import React from "react"
import style from "./fireworks.module.css"

class Fireworks extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state = {
      angle: 0,
      fireworks: [],
    }

    this.updateAnimationState = this.updateAnimationState.bind(this)
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  componentDidUpdate() {
    const angle = this.state.angle
    const canvas = this.canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height
    console.log(angle)
    ctx.save()
    ctx.beginPath()
    ctx.clearRect(0, 0, width, height)
    ctx.translate(width / 2, height / 2)
    ctx.rotate((angle * Math.PI) / 180)
    ctx.fillStyle = "#4397AC"
    ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2)
    ctx.restore()
  }

  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }))
    this.rAF = requestAnimationFrame(this.updateAnimationState)
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
