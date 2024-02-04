export default function RotatedWindows() {
  return (
    <>
      {[0, 1, 2, 3, 6, 12].map((item) => {
        return (
          <div className="container mx-auto columns-2">
            <div className={`window mt-10 rotate-${item}`}>
              <div className="title-bar">
                <div className="title-bar-text">Window?</div>
                <div className="title-bar-controls">
                  <button aria-label="Help"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body">
                <p>Rotations!</p>
              </div>
            </div>
            <div className={`window mt-10 -rotate-${item}`}>
              <div className="title-bar">
                <div className="title-bar-text">...Window?</div>
                <div className="title-bar-controls">
                  <button aria-label="Help"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body">
                <p>Rotations!!!</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
