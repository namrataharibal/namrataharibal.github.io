
import React, {Component} from "react"
// import ProjectTooltip from "./ProjectTooltip"


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
        <div className="outer">
	 <div className="project-bg"></div>
            <div className="inner">
              <div className="project" onClick={this.handleClick}>
                <p>
                  {this.props.project.title}
                </p>
            </div>
          </div>
        </div>
      )
  }
}


export default Project
