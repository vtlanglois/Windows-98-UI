import "98.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="window container mx-auto mt-10">
        <div className="title-bar">
          <div className="title-bar-text">A Window With Stuff In It</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <p className="mb-5">
            A collection of demos using{" "}
            <a
              href="http://github.com/jdan/98.css"
              target="_blank"
              rel="noopener noreferrer"
            >
              98.css
            </a>{" "}
            by{" "}
            <a
              href="https://github.com/jdan"
              target="_blank"
              rel="noopener noreferrer"
            >
              jdan
            </a>
          </p>
          <h2 className="text-lg font-bold">Demos</h2>
          <ul className="list-decimal">
            <li className="ms-5 font-semibold">
              <Link href="/demos/basic-window">Basic Window</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
