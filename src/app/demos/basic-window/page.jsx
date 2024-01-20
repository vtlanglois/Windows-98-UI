export default function Home() {
  return (
    <main>
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
          <p className="underline mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima
            repudiandae assumenda distinctio, facere reiciendis provident
            corrupti, quos tempore fugit saepe quam est. Quos earum dolore,
            corrupti molestiae pariatur dolorem.
          </p>
          <button>Agree</button>
        </div>
      </div>
    </main>
  );
}
