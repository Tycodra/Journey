let photoAPIKey = "563492ad6f91700001000001ecb71e3106e145c1a1b1be0661c51aed";

document.getElementById("explore-btn").addEventListener("click", function (event) {
	event.preventDefault();
	const value = document.getElementById("explore-input").value;
	if (value === "") return;
	console.log(value);
	let explore_body = document.getElementById("explore-body");
	explore_body.style.alignItems = "flex-start";
	document.getElementById("explore-body-header").style.display = "none";
	document.getElementById("explore-body-text").style.display = "none";
	explore(value);
});

function explore(search) {
	console.log(search);
}
