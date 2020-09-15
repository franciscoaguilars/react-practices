const apiKey = "KnqrOs6orhs7p7WzbKTdNlZ8JhHtdAxJ";

const call = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

call
    .then ( resp => resp.json())
    .then( data => {
        console.log(data.data.images.original.url)

    })
    .catch(console.warn)