import ProjectTile from './components/ProjectTile';
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Dina's Knits</h1>
        <hr className="hr-desktop" />
      </div>
      <div className="project-grid">
        <ProjectTile name={"scarf"} description={"a nice warm scarf"} imageURL={"https://res.cloudinary.com/divhnlyk6/image/upload/v1730397949/scarf_vvjtsd.jpg"}></ProjectTile>
      </div>
    </div>
  );
}

export default App;
