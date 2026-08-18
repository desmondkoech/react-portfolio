import React from "react";
export default function ProjectCard({title, description}){
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}
