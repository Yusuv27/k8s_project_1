document.addEventListener('DOMContentLoaded', function() {
    const weatherElement = document.getElementById('weather');

    fetch('/weather')
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherElement.textContent = Сейчас ${temperature} °C, ${description};
        })
        .catch(error => {
            console.error('Ошибка получения данных о погоде', error);
            weatherElement.textContent = 'Невозможно получить данные о погоде';
        });
});
