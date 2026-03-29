const browserInfo = navigator.userAgent;
localStorage.setItem('browserInfo', browserInfo);

const footerDiv = document.getElementById('os-info');
footerDiv.innerText = "Ваша система: " + localStorage.getItem('browserInfo');
async function loadComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/21/comments'); 
    const comments = await response.json();
    
    const commentsSection = document.createElement('div');
    commentsSection.innerHTML = "<h3>Відгуки роботодавців</h3>";
    
    comments.forEach(comment => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${comment.name}:</strong> ${comment.body}`;
        commentsSection.appendChild(p);
    });
    
    document.body.appendChild(commentsSection);
}
loadComments();
setTimeout(() => {
    document.getElementById('myModal').style.display = 'block';
}, 60000); 
function updateTheme() {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "#2c3e50";
        document.body.style.color = "white";
    }
}
updateTheme();