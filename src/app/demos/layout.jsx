import Link from "next/link";

export default function DemoLayout({ children }) {
  return (
    <>
      {children}
      <div className="window container mx-auto mt-10">
        <div className="title-bar">
          <div className="title-bar-text"></div>
          <div className="title-bar-controls">
            <button aria-label="Help"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <p className="mb-5 text-lg">
            Return to <Link href="/">Home</Link>
          </p>
        </div>
      </div>
    </>
  );
}
