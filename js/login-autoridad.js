document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginAutoridadForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const codigoAutoridad = document.getElementById('codigoAutoridad').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.querySelector('input[name="remember"]').checked;

            if (!codigoAutoridad || !email || !password) {
                alert('Por favor, completa todos los campos');
                return;
            }

            if (codigoAutoridad.length < 5) {
                alert('Por favor, ingresa un código de identificación válido');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido');
                return;
            }

            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }

            console.log('Intentando iniciar sesión como autoridad:', {
                codigoAutoridad,
                email,
                remember
            });

            alert('¡Inicio de sesión exitoso!\n\nBienvenido, Autoridad: ' + codigoAutoridad);

            window.location.href = 'comunidad.html';
        });
    }

    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;

            if (!email) {
                alert('Por favor, ingresa tu correo electrónico primero para recuperar tu contraseña');
                document.getElementById('email').focus();
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido');
                return;
            }

            console.log('Solicitando recuperación de contraseña para:', email);
            alert('Se ha enviado un enlace de recuperación de contraseña a: ' + email + '\n\nPor favor, revisa tu bandeja de entrada.');
        });
    }
});
