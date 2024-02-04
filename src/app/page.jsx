import "98.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="window container mx-auto mt-10">
        <div className="title-bar">
          <div className="title-bar-text">Home</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <h1 className="text-2xl font-bold mb-5">98.css Demos</h1>
          <p className="mb-5 text-lg">
            A collection of UI and styling demos using{" "}
            <a
              href="http://github.com/jdan/98.css"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              98.css
            </a>{" "}
            by{" "}
            <a
              href="https://github.com/jdan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              jdan
            </a>
            . Built using <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Next.js</span>, and{" "}
            <span className="font-semibold">Tailwind</span>.
          </p>
          <h2 className="text-xl font-bold mb-3">Demos</h2>
          <ul className="list-[upper-roman] mb-3">
            <li className="ms-5 font-semibold text-lg">
              <Link href="/demos/basic-window">Basic Window</Link>
            </li>
            <li className="ms-5 font-semibold text-lg">
              <Link href="/demos/emoticons-display">Emoticons Display</Link>
            </li>
            <li className="ms-5 font-semibold text-lg">
              <Link href="/demos/rotated-windows">Rotated Windows</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="window container mx-auto mt-10">
        <div className="title-bar inactive">
          <div className="title-bar-text">Contributions</div>
          <div className="title-bar-controls">
            <button aria-label="Help"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <h2 className="text-xl font-bold mb-3">Contributions</h2>
          <p className="text-lg">
            <a
              href="https://github.com/jdan/98.css/pulls?q=author%3Avtlanglois"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              View my contributions to 98.css.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
