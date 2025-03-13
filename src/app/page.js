"use client";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container mx-auto">
      <main>
        <h1 className="container-title">I am deltaSeconds</h1>
        <img src="https://avatars.githubusercontent.com/u/60275031?v=4" alt="deltaSeconds profile picture (GitHub)"></img>
        <p className="working-at">Currently working at <a className="work-url" href="">REDACTED</a></p>
        <p className="container-activities"> Activities</p>
        <ul className="container-ul">
          <li className="container-li">GameDev</li>
          <li className="container-li">Front End Development (still learning)</li>
          <li className="container-li">Discord Bots (discord.js)</li>
        </ul>
      </main>
    </div>
  );
}
