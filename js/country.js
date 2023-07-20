const countryProparties = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countryInfo(data))


}

const countryInfo = countrys => {
    const countryConteiner = document.getElementById('country-conteiner');

    countrys.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3> Country Name : ${country.name.common} </h3>
        <p> Capital : ${country.capital ? country.capital : 'No capital'} </p>
        <button onclick="countrysDetails('${country.cca2}')"> Details </button>
        `
        countryConteiner.appendChild(div);

    });
}

const countrysDetails = (code) => {
    // console.log("country code :", code);
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => countryDetail(data))
}

const countryDetail = countryelement => {
    const country = countryelement[0]
    const countryElement = document.getElementById('country-element');
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>flag: ${country.name.common}</h2>
    <img src = "${country.flags.png}">
    `
    countryElement.appendChild(div);
}
countryProparties();

















// const countryDetails = (code) => {
//     const url = `https://restcountries.com/v3.1/alpha/${code}`
//     // console.log('get the country details:', code)
//     // console.log(url)
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data[0]))

// }


