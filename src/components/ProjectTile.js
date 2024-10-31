import '../index.css'

function ProjectTile({name, description, imageURL}) {
    return (
        <div className="project-tile">
            <div className="tile-inner">
                <div className="tile-front">
                    {/* <h1>testing</h1> */}
                    <img className="tile-img" src={imageURL} />
                </div>
                <div className="tile-back">
                    <div className="tile-inner-text">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectTile;
