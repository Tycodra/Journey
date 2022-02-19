document.getElementById("explore-btn").addEventListener("click", function (event) {
	event.preventDefault();
	const value = document.getElementById("explore-input").value;
	if (value === "") return;
	console.log(value);
	explore(value);
});

function explore(search) {
	console.log(search);
}
