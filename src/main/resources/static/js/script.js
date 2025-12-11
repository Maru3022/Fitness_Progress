document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    setTimeout(() => {
        loginForm.classList.add('show');
    }, 500);
});

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    alert(`Добро пожаловать, ${username}! 💪`);

    document.getElementById('loginForm').style.transform = 'scale(0.95)';
    setTimeout(() => {
        document.getElementById('loginForm').style.opacity = '0';
        setTimeout(() => {
            alert('Вы успешно вошли в систему!');
        }, 300);
    }, 300);
}