document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
});

document.getElementById('loginBtn').addEventListener('click', function() {
    showPanel('loginPanel');
});

document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault();
    showPanel('registerPanel');
});

document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();
    showPanel('loginPanel');
});

document.getElementById('forgotLink').addEventListener('click', function(event) {
    event.preventDefault();
    showPanel('forgotPanel');
});

document.getElementById('loginBackLink').addEventListener('click', function(event) {
    event.preventDefault();
    showPanel('loginPanel');
});

document.getElementById('loginSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    setCookie('userEmail', email, rememberMe ? 365 : 1);
    alert('Logged in as ' + email);
    hidePanels();
});

function showPanel(panelId) {
    hidePanels();
    document.getElementById(panelId).style.display = 'flex';
}

function hidePanels() {
    document.getElementById('loginPanel').style.display = 'none';
    document.getElementById('registerPanel').style.display = 'none';
    document.getElementById('forgotPanel').style.display = 'none';
}

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '')  + expires + '; path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

window.onload = function() {
    const userEmail = getCookie('userEmail');
    if (userEmail) {
        alert('Welcome back, ' + userEmail);
    }
};
const openLoginBtn = document.getElementById('openLoginBtn');
        const loginPanel = document.getElementById('loginPanel');
        const registerPanel = document.getElementById('registerPanel');
        const forgotPanel = document.getElementById('forgotPanel');
        const registerLink = document.getElementById('registerLink');
        const loginLink = document.getElementById('loginLink');
        const forgotLink = document.getElementById('forgotLink');
        const loginBackLink = document.getElementById('loginBackLink');
        const iconClose = document.querySelectorAll('.icon-close');

        openLoginBtn.addEventListener('click', () => {
            loginPanel.style.display = 'block';
            registerPanel.style.display = 'none';
            forgotPanel.style.display = 'none';
        });

        registerLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default anchor behavior
            loginPanel.style.display = 'none';
            registerPanel.style.display = 'block';
        });

        loginLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default anchor behavior
            registerPanel.style.display = 'none';
            loginPanel.style.display = 'block';
        });

        forgotLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default anchor behavior
            loginPanel.style.display = 'none';
            forgotPanel.style.display = 'block';
        });

        loginBackLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default anchor behavior
            forgotPanel.style.display = 'none';
            loginPanel.style.display = 'block';
        });

        iconClose.forEach(icon => {
            icon.addEventListener('click', () => {
                loginPanel.style.display = 'none';
                registerPanel.style.display = 'none';
                forgotPanel.style.display = 'none';
            });
        });
   
        var modal = document.getElementById("loginModal");

        // Отримати кнопку, яка відкриває модальне вікно
        var btn = document.getElementById("login-btn");

        // Отримати елемент <span>, який закриває модальне вікно
        var span = document.getElementsByClassName("close")[0];

        // Коли користувач натискає на кнопку, відкрити модальне вікно
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // Коли користувач натискає на <span> (x), закрити модальне вікно
        span.onclick = function() {
            modal.style.display = "none";
        }

        // Коли користувач натискає будь-де поза модальним вікном, закрити його
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Обробка форми входу (просто для демонстрації)
        document.getElementById("loginForm").onsubmit = function(event) {
            event.preventDefault();
            alert("Вхід здійснено!");
            modal.style.display = "none";
        }
       
        



        document.addEventListener('DOMContentLoaded', () => {
            const logo = document.getElementById('logo');
            const originalSrc = logo.src;
            const hoverSrc = 'hover_logo.png'; // The path to the image you want to show on hover
        
            logo.addEventListener('mouseover', () => {
                logo.src = hoverSrc;
            });
        
            logo.addEventListener('mouseout', () => {
                logo.src = originalSrc;
            });
        });
        
        