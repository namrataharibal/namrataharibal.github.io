import React, {Component} from "react"
import ProjectTooltip from "./ProjectTooltip"


class Project extends Component {
  constructor() {
  super()

  this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    window.open(this.props.project.url)
  }

  render() {
      return(
          <div className="project" onClick={this.handleClick}>
            <p>
            <ProjectTooltip preview={this.props.project.preview}>
              {this.props.project.title}
            </ProjectTooltip>
            </p>
          </div>
      )
  }
}


export default Project
