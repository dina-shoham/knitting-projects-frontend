import ProjectTile from './components/ProjectTile';
import {useState, useEffect} from 'react';
import axios from "axios";

import './index.css';

function App() {

  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    try {
      axios
        .get('http://localhost:8080/api/projects')
        .then((response) => setProjects(response.data));
      } catch (error) {
        console.error(error.message);
      }
      console.log("got projects!");
      console.log(projects);
  }

  useEffect(() => {
    getProjects();
  }, []);
  
  return (
    <div className="app">
      <div className="header">
        <h1>Dina's Knits</h1>
        <hr className="hr-desktop" />
      </div>
      {projects.length === 0 && <div></div>}
      {projects.length > 0 && <div className="project-grid">
        {
          projects.map((project, index) => {
            return <ProjectTile name={project.name}
                                description={project.description}
                                imageURL={project.imageURL}/> 
          })
        }
        
        {/* <ProjectTile name={"scarf"} description={"a nice warm scarf"} imageURL={"https://res.cloudinary.com/divhnlyk6/image/upload/v1730397949/scarf_vvjtsd.jpg"}></ProjectTile> */}
      </div>}
    </div>
  );
}

export default App;
