import React from "react"
import style from "./fireworks.module.css"

class Fireworks extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
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
