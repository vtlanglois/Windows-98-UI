export default function Home() {
  return (
    <div className="window container mx-auto mt-10">
      <div className="title-bar">
        <div className="title-bar-text">Emoticons Display</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <p className="text-lg">
          <dl className="columns-4 text-center">
            <dt>:-)</dt>
            <dd>Happy Face</dd>
            <dt>:-(</dt>
            <dd>Sad Face</dd>
            <dt>;-)</dt>
            <dd>Winking Face</dd>
            <dt>:-o</dt>
            <dd>Surprised Face</dd>
          </dl>
        </p>
      </div>
    </div>
  );
}
