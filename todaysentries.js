function todaysEntries(entries) {

	let todayEntries = entries.filter((item) => {		
        let today = new Date().toISOString().split("T")[0];

		return today === item.date.split("T")[0];

	});

	let names = todayEntries.map((entry) => entry.name);

	return names.join(",");

}

module.exports = todaysEntries;