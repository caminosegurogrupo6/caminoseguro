document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registroForm');
    const photoUpload = document.getElementById('photoUpload');
    const profilePreview = document.getElementById('profilePreview');
    
    if (photoUpload) {
        photoUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profilePreview.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const apellidos = document.getElementById('apellidos').value;
            const edad = document.getElementById('edad').value;
            const email = document.getElementById('email').value;
            const dni = document.getElementById('dni').value;
            const password = document.getElementById('password').value;
            
            if (!nombre || !apellidos || !edad || !email || !dni || !password) {
                alert('Por favor, completa todos los campos');
                return;
            }
            

            if (edad < 18) {
                alert('Debes ser mayor de 18 años para registrarte');
                return;
            }
            

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido');
                return;
            }
         
            if (dni.length < 8) {
                alert('Por favor, ingresa un DNI o Carnet de Extranjería válido');
                return;
            }
            
            
            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }
            
            // Aquí iría la lógica de registro
            console.log('Registrando usuario:', {
                nombre,
                apellidos,
                edad,
                email,
                dni
            });
            
            
            alert('¡Registro exitoso! Bienvenido a Camino Seguro');
            
            window.location.href = 'login.html';
        });
    }
    
    const facebookBtn = document.querySelector('.btn-social.facebook');
    const instagramBtn = document.querySelector('.btn-social.instagram');
    
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            console.log('Registrarse con Facebook');
            alert('Funcionalidad de Facebook en desarrollo');
        });
    }
    
    if (instagramBtn) {
        instagramBtn.addEventListener('click', function() {
            console.log('Registrarse con Instagram');
            alert('Funcionalidad de Instagram en desarrollo');
        });
    }
});
