function main(){
    getRandomPics();
}

function getRandomPics(){
    $('#breed-form').submit(e =>{
        e.preventDefault();
        $('.results').removeClass('hidden');

        let count = e.target.number.value || 3;

        fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
        .then(response => response.json())
        .then(responseJSON => displayResults(responseJSON))
        .catch(error => alert('something went wrong!'));
    })
}

function displayResults(input){
    const html = input.message.map(url => `
    <img src="${url}" class="picture"> 
    `)

    $('.results').html(html);
}

$(main);

// fetch('https://dog.ceo/api/breeds/image/random')
// .then(res => res.json())
// .then(data => console.log(data));

// $('#breed-form').submit(e =>{
//     e.preventDefault();

//     const breed = e.target.breed.value;
//     const count = e.target.count.value || 3;

//     fetch(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
//     .then(res => res.json())
//     .then(data => displayResults(data));
// })

// function displayResults(data) {
//     const html = data.message.map(image => `
//     <img src="${image}"> 
//     `)
//     $('#results').html(html);
// } 