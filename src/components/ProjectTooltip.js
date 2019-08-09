import React, {Component} from "react"

class ProjectTooltip extends Component {
  constructor() {
  super()
  this.state = {
    dislayTooltip: false
  }
  this.hideTooltip = this.hideTooltip.bind(this)
  this.showTooltip = this.showTooltip.bind(this)
}

  hideTooltip(){
    this.setState({ displayTooltip: false })
  }

  showTooltip(){
    this.setState({ displayTooltip: true })
  }

  render() {
    return(
      <span>
        <div className="project-tooltip" onMouseLeave={this.hideTooltip}>
          {this.state.displayTooltip &&
            <div className={`tooltip-bubble tooltip-right`}>
              <div className='tooltip-message'>
                {this.props.preview}
              </div>
            </div>
          }
          <span onMouseEnter={this.showTooltip}>
            {this.props.children}
          </span>
        </div>

      </span>
    )
  }
  }



export default ProjectTooltip
