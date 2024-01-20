export default function Home() {
  return (
    <div className="window container mx-auto mt-10">
      <div className="title-bar">
        <div className="title-bar-text">Window Demo</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <p className="text-lg mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima
          repudiandae assumenda distinctio, facere reiciendis provident
          corrupti, quos tempore fugit saepe quam est. Quos earum dolore,
          corrupti molestiae pariatur dolorem.
        </p>
        <div className="text-end">
          <button className="me-2">Agree</button>
          <button>Disagree</button>
        </div>
      </div>
    </div>
  );
}
