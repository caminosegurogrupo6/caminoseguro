// Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.querySelector('input[name="remember"]').checked;
            
            if (!email || !password) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido');
                return;
            }
            
            console.log('Intentando iniciar sesión con:', { email, password, remember });
            
            alert('¡Inicio de sesión exitoso!');
            
        });
    }
    
    const facebookBtn = document.querySelector('.btn-social.facebook');
    const instagramBtn = document.querySelector('.btn-social.instagram');
    
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            console.log('Iniciar sesión con Facebook');
            alert('Funcionalidad de Facebook en desarrollo');
        });
    }
    
    if (instagramBtn) {
        instagramBtn.addEventListener('click', function() {
            console.log('Iniciar sesión con Instagram');
            alert('Funcionalidad de Instagram en desarrollo');
        });
    }
});
