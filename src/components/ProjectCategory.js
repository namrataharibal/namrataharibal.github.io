import React, {Component} from 'react'
import Project from "./Project"
import projectData from "./ProjectData"


class ProjectCategory extends Component {
  constructor() {
    super()
    this.state = {
      projectdata: projectData
    }
  }
  render() {
    const projects = this.state.projectdata.filter(project => project.category === this.props.title)
    const projectsToRender = projects.map(project => <Project key={project.id} project={project}/>)
      return (
        <div className="project-category">
          <h3> {this.props.title} </h3>
          { projectsToRender}

        </div>
      )
  }
}


export default ProjectCategory
