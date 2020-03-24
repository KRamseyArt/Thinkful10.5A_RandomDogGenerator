function main(){
    getRandomPics();
}

function getRandomPics(){
    $('#breed-form').submit(e =>{
        e.preventDefault();
        $('.results').removeClass('hidden');

        let count = e.target.number.value || 3;

        if (count > 0) {
            fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
            .then(response => response.json())
            .then(responseJSON => displayResults(responseJSON))
            .catch(error => alert('something went wrong!'));
        }
    })
}

function displayResults(input){
    const html = input.message.map(url => `
    <img src="${url}" class="picture"> 
    `)

    $('.results').html(html);
}

$(main);