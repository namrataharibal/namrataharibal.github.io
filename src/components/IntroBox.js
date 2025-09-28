import React from "react"
import ProjectTooltip from "./ProjectTooltip"

function IntroBox(props) {
// Split the intro text into paragraphs 

const paragraphs = props.intro.split('\n\n');

  return (
    <div className="intro-box">
	<h1>Hi, I'm Namrata</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}


    </div>
  )
}


export default IntroBox

