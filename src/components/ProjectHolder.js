import React, {Component} from "react"
import ProjectCategory from "./ProjectCategory"
import projectData from "./ProjectData"

class ProjectHolder extends Component {
  constructor() {
    super()
    this.state = {
      data: projectData
    }
  }

  render () {
    const categorySet = new Set()
    for (let obj of this.state.data) {
      categorySet.add(obj.category)
    }
    let categoryArray = Array.from(categorySet)
    const project_cats = categoryArray.map(cat_name => <ProjectCategory title={cat_name}/>)

      return (
        <div className="project-holder">
          {project_cats}
        </div>
      )
    }


}

export default ProjectHolder
