//import data
import { reindeerData } from "./data.js";

//identify element to be manipulated
const container = document.getElementById("colored-reindeer");

console.log(reindeerData);

reindeerData.forEach((reindeer) => {
	const section = document.createElement("section");
	console.log(reindeer.name);
	console.log(reindeer.color);
	container.append(section);
	section.textContent = reindeer.name;
	section.style.color = reindeer.color;
});
