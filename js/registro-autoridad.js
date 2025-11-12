document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registroAutoridadForm');
    const photoUpload = document.getElementById('photoUpload');

    if (photoUpload) {
        photoUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const photoPlaceholder = document.querySelector('.photo-placeholder');
                    photoPlaceholder.style.backgroundImage = `url(${e.target.result})`;
                    photoPlaceholder.style.backgroundSize = 'cover';
                    photoPlaceholder.style.backgroundPosition = 'center';
                    const userIcon = document.querySelector('.user-icon');
                    if (userIcon) userIcon.style.display = 'none';
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
            const codigoAutoridad = document.getElementById('codigoAutoridad').value;
            const central = document.getElementById('central').value;
            const tipoAutoridad = document.getElementById('tipoAutoridad').value;
            const dni = document.getElementById('dni').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const aceptoTerminos = document.querySelector('input[name="aceptoTerminos"]').checked;

            if (!nombre || !apellidos || !codigoAutoridad || !central || !tipoAutoridad || !dni || !email || !telefono || !password || !confirmPassword) {
                alert('Por favor, completa todos los campos');
                return;
            }

            if (codigoAutoridad.length < 5) {
                alert('Por favor, ingresa un código de identificación válido (mínimo 5 caracteres)');
                return;
            }

            if (dni.length < 8) {
                alert('Por favor, ingresa un DNI o Carnet de Extranjería válido (mínimo 8 caracteres)');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido');
                return;
            }

            const telefonoRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
            if (!telefonoRegex.test(telefono)) {
                alert('Por favor, ingresa un número de teléfono válido');
                return;
            }

            if (password.length < 8) {
                alert('La contraseña debe tener al menos 8 caracteres');
                return;
            }

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            if (!aceptoTerminos) {
                alert('Debes aceptar los términos y condiciones');
                return;
            }

            const codigoRegex = /^[A-Z]{2,4}-\d{4,6}$/i;
            if (!codigoRegex.test(codigoAutoridad)) {
                const confirmacion = confirm(
                    'El código de autoridad no sigue el formato recomendado (Ej: PNP-12345, SEG-6789).\n' +
                    '¿Deseas continuar de todas formas?'
                );
                if (!confirmacion) {
                    return;
                }
            }

            console.log('Registrando autoridad:', {
                nombre,
                apellidos,
                codigoAutoridad,
                central,
                tipoAutoridad,
                dni,
                email,
                telefono
            });

            alert('¡Registro de autoridad exitoso!\n\nTu cuenta será verificada por nuestro equipo.\nRecibirás un correo de confirmación en las próximas 24-48 horas.');

            window.location.href = 'login-autoridad.html';
        });
    }
});
