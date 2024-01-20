import { Inter } from "next/font/google";
import "./globals.css";
import "98.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Windows 98 UI Demos",
  description: "UI Demos using 98.css, made by Vincent Langlois",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-98-background bg-no-repeat bg-cover bg-fixed`}
      >
        <main>{children}</main>
        <footer>
          <div className="window container mx-auto mt-10">
            <div className="title-bar inactive">
              <div className="title-bar-text">Footer</div>
              <div className="title-bar-controls">
                <button aria-label="Help"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body">
              <div className="columns-2">
                <p className="text-lg">
                  Created by{" "}
                  <a
                    href="http://vtlanglois.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    Vincent Langlois
                  </a>
                  .
                </p>
                <p className="text-lg">
                  <a
                    href="https://github.com/vtlanglois/Windows-98-UI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold float-end"
                  >
                    GitHub Repo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
