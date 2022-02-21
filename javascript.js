let photoAPIKey = '563492ad6f91700001000001ecb71e3106e145c1a1b1be0661c51aed';
document.getElementById('explore-btn').addEventListener('click', function (event) {
	event.preventDefault();
	const query = document.getElementById('explore-input').value;
	document.getElementById('explore-input').value = '';
	if (query === '') return;
	console.log(query);
	let explore_body = document.getElementById('explore-body');
	explore_body.style.justifyContent = 'flex-start';
	let explore_box = document.getElementById('explore-box');
	explore_box.style.alignSelf = 'normal';
	explore_box.style.margin = '1rem 0';
	let explore_jumbo = document.getElementById('explore_jumbo');
	explore_jumbo.style.padding = '0';
	document.getElementById('explore-body-header').style.display = 'none';
	document.getElementById('explore-body-text').style.display = 'none';
	explore(query);
});

function explore(query) {
	console.log(query);

	fetch(`https://api.pexels.com/v1/search?query=${query}`, {
		headers: {
			Authorization: photoAPIKey,
		},
	})
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			console.log(data.photos);
			let explore_body = document.getElementById('explore_body');
			let activities_block = document.getElementById('activities_block');
			if (typeof activities_block != 'undefined' && activities_block != null) {
				while (activities_block.hasChildNodes()) {
					activities_block.removeChild(activities_block.childNodes[0]);
				}
			} else {
				activities_block = document.createElement('div');
				activities_block.setAttribute('class', 'row activities-block');
				activities_block.setAttribute('id', 'activities_block');
				activities_block.style.margin = '1rem';
				activities_block.style.width = 'inherit';
				activities_block.style.height = 'inherit';
				document.getElementById('explore-body').appendChild(activities_block);
			}

			const explore_search = document.createElement('h1');
			explore_search.innerText = `${query}`;
			explore_search.style.height = 'fit-content';
			explore_search.style.textTransform = 'uppercase';
			explore_search.style.margin = '1rem';
			activities_block.appendChild(explore_search);

			for (let i = 0; i < 9; i++) {
				const activity_card = document.createElement('div');
				activity_card.setAttribute('class', 'card activity-card');

				const card_img = document.createElement('img');
				card_img.setAttribute('class', 'img-fluid card-img-top');
				card_img.setAttribute('src', data.photos[i].src.portrait);

				const card_body = document.createElement('div');
				card_body.setAttribute('class', 'card-body d-flex flex-column');
				let card_content = '';
				card_content += `<h3 class="card-title">Title about ${query}</h3>`;
				card_content += `<p class="card-text">${data.photos[i].alt}</p>`;
				card_body.innerHTML = card_content;

				activity_card.appendChild(card_img);
				activity_card.appendChild(card_body);
				activities_block.appendChild(activity_card);
			}
		});
}
