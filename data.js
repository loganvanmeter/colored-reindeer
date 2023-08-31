const coloredReindeerBuilder = function () {
	const reindeer = [
		"Dasher",
		"Dancer",
		"Prancer",
		"Vixen",
		"Comet",
		"Cupid",
		"Donner",
		"Blitzen",
	];
	const colors = [
		"Blue",
		"Red",
		"Orange",
		"Purple",
		"Goldenrod",
		"Aquamarine",
		"Olive",
		"Azure",
		"Fuchsia",
		"Chocolate",
		"Salmon",
		"Amaranth",
	];

	let coloredReindeer = [];
	// Write a for loop that looks at each reindeer
	for (let i = 0; i < reindeer.length; i++) {
		// Invoke factory function to create reindeer object
		let deer;
		function makeDeer(name, color) {
			deer = {
				name: name,
				color: color,
			};
			return deer;
		}
		makeDeer(reindeer[i], colors[i]);
		// Put new reindeer object in coloredReindeer array
		coloredReindeer.push(deer);
	}
	// Return coloredReindeer array
	return coloredReindeer;
};

const reindeerData = coloredReindeerBuilder();

export { reindeerData };
