const astronauts = document.getElementById('astronauts');
const count = document.getElementById('count');
const loadAstronauts = async () => {
    try {
        const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        const data = await response.json();
        console.log(data);
        count.innerText = `${data.length} Astronauts`;
        const htmlString = data
            .sort((a, b) => a.hoursInSpace - b.hoursInSpace)
            .map(
                (astronaut) => `
                    <div class = "astronaut">
                        <h3>${astronaut.firstName} - ${astronaut.lastName}</h3>
                    </div>
                    `
            )
            .join(' ');
    } catch (err) {
        console.error(err);
    }
};