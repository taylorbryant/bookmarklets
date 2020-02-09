import "../css/index.css";
import bookmarklets from "../bookmarklets.json";

import React from "react";

function Home() {
  return (
    <div className="flex flex-col justify-center max-w-6xl min-h-screen p-4 mx-auto font-sans lg:items-center lg:justify-start lg:flex-row">
      <header className="mb-4 lg:w-1/2 lg:mr-12">
        <h1 className="text-3xl font-black ">Bookmarklets</h1>

        <p className="mb-4">
          <span className="italic">by</span>
          {` `}
          <a className="font-black uppercase" href="https://bryant.io">
            Taylor Bryant
          </a>
        </p>
        <img
          alt="A screen recording of someone dragging a bookmarklet from this page to their browser's bookmarks bar"
          className="border-8 border-black"
          src="/example.gif"
        />
      </header>

      <main className="mb-4 lg:w-1/2">
        <ul className="flex flex-col mb-4">
          {bookmarklets.map(bookmarklet => (
            <li className="my-2" key={bookmarklet.name}>
              <a
                className="inline p-1 text-3xl font-bold text-black bg-yeller hover:bg-black hover:text-white"
                href={bookmarklet.code}
              >
                {bookmarklet.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;
