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
          <dl className="grid grid-rows-3 grid-flow-col gap-4 text-center">
            <div>
              <dt>:-)</dt>
              <dd>Happy Face</dd>
            </div>
            <div>
              <dt>:-(</dt>
              <dd>Sad Face</dd>
            </div>
            <div>
              <dt>;-)</dt>
              <dd>Winking Face</dd>
            </div>
            <div>
              <dt>:-o</dt>
              <dd>Surprised Face</dd>
            </div>
            <div>
              <dt>XD</dt>
              <dd>Laughing Face</dd>
            </div>
            <div>
              <dt>:'(</dt>
              <dd>Weeping Face</dd>
            </div>
            <div>
              <dt>{"<3"}</dt>
              <dd>Heart</dd>
            </div>
            <div>
              <dt>{"</3"}</dt>
              <dd>Broken Heart</dd>
            </div>
          </dl>
        </p>
      </div>
    </div>
  );
}
