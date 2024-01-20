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
          <h1 className="text-2xl font-bold mb-5">98.css Demos</h1>
          <p className="mb-5 text-lg">
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
            . Built using <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Next.js</span>, and{" "}
            <span className="font-semibold">Tailwind</span>.
          </p>
          <h2 className="text-xl font-bold mb-3">Demos</h2>
          <ul className="list-decimal mb-3">
            <li className="ms-5 font-semibold text-lg">
              <Link href="/demos/basic-window">Basic Window</Link>
            </li>
          </ul>
          <p className="text-lg">
            Created by{" "}
            <a href="http://vtlanglois.github.io" target="_blank" rel="noopener noreferrer">
              Vincent Langlois
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
