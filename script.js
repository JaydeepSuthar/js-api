var jokeArea = document.querySelector(".joke-area");

function getJoke()
{
	fetch("https://api.chucknorris.io/jokes/random")
	.then( (response) => response.json())
	.then( (data) => 
	{
		var joke = data.value;
		jokeArea.innerText = joke;
	}
	);
}
