console.log("JavaScript файл завантажився!"); 


const systemInfo = {
    os: navigator.platform,
    browser: navigator.userAgent,
    time: new Date().toLocaleString()
};
localStorage.setItem('mySystemData', JSON.stringify(systemInfo));


window.onload = function() {
    console.log("Сторінка завантажена повністю");
    const footerDiv = document.getElementById('os-info');
    const data = JSON.parse(localStorage.getItem('mySystemData'));

    if (footerDiv && data) {
        footerDiv.innerHTML = `
            <hr>
            <p style="color: blue;"><strong>Інфо з localStorage:</strong><br>
            Система: ${data.os}<br>
            Браузер: ${data.browser}</p>
        `;
        console.log("Дані успішно виведені у футер");
    } else {
        console.log("Помилка: не знайдено div з id 'os-info'");
    }

    
    setTimeout(() => {
        const modal = document.getElementById('myModal');
        if (modal) {
            modal.style.display = 'block';
            console.log("Модальне вікно відкрито");
        }
    }, 60000); 
};
function autoThemeSwitcher() {
    const currentHour = new Date().getHours(); // 
    console.log("Поточна година:", currentHour);

    
    if (currentHour >= 7 && currentHour < 21) {
        document.body.classList.remove('dark-theme');
        console.log("Встановлено денну тему");
    } else {
        
        document.body.classList.add('dark-theme');
        console.log("Встановлено нічну тему");
    }
}


autoThemeSwitcher();
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    console.log("Користувач змінив тему вручну");
});