import React from 'react'

const Projects = ({data}) => {
  return (
    <div>
        <h1>Projects</h1>
        {
            data?.items?.map((project)=>(
                <div key={project.id} style={{
                    display:"flex",
                    gap:"20px",
                    marginTop:"20px",
                    justifyContent:"center",
                    boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    border:"1px solid green"
                }}>
                    <h1>{project.name}</h1>
                    {/* <p></p> */}
                    <a href={project.url}>Link</a>
                    <p>Forks:{project.forks_count}</p>
                    <p>Stars:{project.stargazers_count}</p>
                    <p>Javascript</p>
                </div>
            ))
        }
    </div>
  )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/search/repositories?q=user:SaurabhBH123+fork:true&sort=updated&per_page=10&type=Repositories`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}
export default Projects