window.addEventListener('load', function () {
    const url = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(url).then(function (response) {
        return response.json;
    }).then(function (json)) {

        const container = document.querySelector('#container');
        let astronauts = '';
    }
})