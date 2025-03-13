"use client";
import Image from "next/image";

function showAlert(message) {
  alert(message);
}

export default function Page() {
  return (
    <div className="container mx-auto">
      <img className="container-img" src="https://avatars.githubusercontent.com/u/60275031?v=4" alt="deltaSeconds profile picture (GitHub)" />
      <main className="container-main">
        <h1 className="container-title"><a href="https://github.com/deltaseconds">deltaSeconds</a></h1>
        <p className="working-at">Currently working at <a className="work-url" href="" data-text="REDACTED">REDACTED</a></p>
        <p className="container-activities"> Development Experience</p>
        <ul className="container-ul">
          <li className="container-li">Game Development using Unreal Engine 5 (still learning)</li>
          <li className="container-li">Front End Development using NextJs (still learning)</li>
          <li className="container-li">Discord Bots using discord.js</li>
          <li className="container-li">SNMP Monitoring Plugins using Icinga2 and Perl</li>
          <li className="container-li">Minecraft Bukkit Plugin Development in Java</li>
        </ul>
        <a className="container-link" href="ttps://github.com/deltaseconds">GitHub</a>
      </main>
    </div>
  );
}
