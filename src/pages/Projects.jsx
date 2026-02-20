import CardComponent from "../components/CardComponent";
import FilterBar from "../components/FilterBar";

const Projects = () => {

  const projects = [
    { id: 1, title: "E-commerce App", desc: "Shopping site" },
    { id: 2, title: "Chat App", desc: "Realtime messaging" }
  ];

  return (
    <div className="page">
      <FilterBar />
      {projects.map(p =>
        <CardComponent key={p.id} project={p} />
      )}
    </div>
  );
};

export default Projects;