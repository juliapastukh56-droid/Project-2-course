
const saveSystemInfo = () => {
    const browserData = {
        agent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: `${window.screen.width}x${window.screen.height}`
    };
    localStorage.setItem('user_system_data', JSON.stringify(browserData));
};

const displaySystemInfo = () => {
    const footerDiv = document.getElementById('os-info');
    const stored = JSON.parse(localStorage.getItem('user_system_data'));
    
    if (footerDiv && stored) {
        footerDiv.innerHTML = `
            <div style="margin-top: 20px; padding: 20px; font-size: 0.85rem; color: #777; text-align: center;">
                <p><b>Системна інформація:</b> ${stored.agent}</p>
                <p><b>Платформа:</b> ${stored.platform} | <b>Екран:</b> ${stored.screen}</p>
            </div>
        `;
    }
};

const loadComments = async () => {
    try {
    
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/21/comments');
        const comments = await response.json();
        const container = document.getElementById('comments-container');
        
        if (container) {
            container.innerHTML = '<h3 style="margin-top:20px;">Відгуки роботодавців (API)</h3>';
            comments.forEach(c => {
                const commentDiv = document.createElement('div');
                commentDiv.style.marginBottom = "15px";
                commentDiv.style.padding = "10px";
                commentDiv.style.borderLeft = "3px solid #3498db";
                commentDiv.style.background = "#f9f9f9";
                commentDiv.innerHTML = `
                    <small style="color: #3498db; font-weight: bold;">${c.email}</small>
                    <p style="font-style: italic; font-size: 0.9rem;">"${c.body}"</p>
                `;
                container.appendChild(commentDiv);
            });
        }
    } catch (err) {
        console.error("Помилка завантаження даних із сервера:", err);
    }
};

const initModal = () => {
    
    setTimeout(() => {
        const modal = document.getElementById('myModal');
        if (modal) {
            modal.style.display = 'block';
            modal.style.animation = 'fadeIn 0.5s ease';
        }
    }, 60000); 
};

const initTheme = () => {
    const themeBtn = document.getElementById('theme-toggle');
    const hour = new Date().getHours();


    if (hour < 7 || hour >= 21) {
        document.body.classList.add('dark-mode-active');
    }


    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode-active');
        });
    }
};

window.addEventListener('DOMContentLoaded', () => {
    saveSystemInfo();
    displaySystemInfo();
    loadComments();
    initModal();
    initTheme();
});