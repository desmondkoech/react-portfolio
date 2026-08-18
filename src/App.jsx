import React from 'react'
import projects from './data/projects'

export default function App(){
  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
      <h1>Portfolio</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:16}}>
        {projects.map(p => (
          <article key={p.slug} style={{border:'1px solid #ddd', padding:12, borderRadius:6}}>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <p><strong>Tech:</strong> {p.tech.join(', ')}</p>
            <a href={p.demo || '#'}>Demo</a>
          </article>
        ))}
      </div>
    </div>
  )
}
