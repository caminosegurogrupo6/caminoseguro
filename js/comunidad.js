// Comunidad JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('postsContainer');
    const filtros = document.querySelectorAll('.filtro-btn');
    
    // Posts de ejemplo (simulación de base de datos)
    let posts = [
        {
            id: 1,
            usuario: 'Usuario Anónimo',
            ubicacion: 'Av. Universitaria, Lima',
            tipo: 'zona-peligrosa',
            descripcion: 'Cuidado en esta zona por las noches. He visto movimientos sospechosos frecuentemente.',
            tiempo: 'Hace 2 horas',
            likes: 15,
            comentarios: 3
        },
        {
            id: 2,
            usuario: 'Usuario Anónimo',
            ubicacion: 'Miraflores, Lima',
            tipo: 'zona-segura',
            descripcion: 'Esta zona es muy tranquila y bien iluminada. Hay presencia policial constante.',
            tiempo: 'Hace 5 horas',
            likes: 28,
            comentarios: 7
        }
    ];
    
    // Crear nueva publicación
    if (postForm) {
        postForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const ubicacion = document.getElementById('ubicacion').value;
            const tipo = document.getElementById('tipo').value;
            const descripcion = document.getElementById('descripcion').value;
            
            if (!ubicacion || !tipo || !descripcion) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            const nuevoPost = {
                id: posts.length + 1,
                usuario: 'Usuario Anónimo',
                ubicacion: ubicacion,
                tipo: tipo,
                descripcion: descripcion,
                tiempo: 'Hace unos momentos',
                likes: 0,
                comentarios: 0
            };
            
            posts.unshift(nuevoPost);
            renderPosts();
            
            // Limpiar formulario
            postForm.reset();
            
            alert('¡Publicación creada exitosamente!');
        });
    }
    
    // Renderizar posts
    function renderPosts(filtro = 'todos') {
        postsContainer.innerHTML = '';
        
        const postsFiltrados = filtro === 'todos' 
            ? posts 
            : posts.filter(post => post.tipo === filtro);
        
        postsFiltrados.forEach(post => {
            const postElement = createPostElement(post);
            postsContainer.appendChild(postElement);
        });
        
        if (postsFiltrados.length === 0) {
            postsContainer.innerHTML = '<p style="text-align: center; color: #95a5a6; padding: 2rem;">No hay publicaciones para mostrar</p>';
        }
    }
    
    function createPostElement(post) {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.setAttribute('data-tipo', post.tipo);
        
        const tipoLabels = {
            'robo': 'Robo',
            'asalto': 'Asalto',
            'zona-peligrosa': 'Zona Peligrosa',
            'zona-segura': 'Zona Segura',
            'otro': 'Otro'
        };
        
        postDiv.innerHTML = `
            <div class="post-header">
                <div class="user-avatar">👤</div>
                <div class="post-info">
                    <h3>${post.usuario}</h3>
                    <p class="post-meta">${post.ubicacion} • ${post.tiempo}</p>
                </div>
                <span class="badge ${post.tipo}">${tipoLabels[post.tipo]}</span>
            </div>
            <div class="post-content">
                <p>${post.descripcion}</p>
            </div>
            <div class="post-actions">
                <button class="btn-action like-btn" data-id="${post.id}">
                    👍 <span class="like-count">${post.likes}</span>
                </button>
                <button class="btn-action">
                    💬 ${post.comentarios}
                </button>
                <button class="btn-action">
                    🔗 Compartir
                </button>
            </div>
        `;
        
        return postDiv;
    }
    
  
    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            filtros.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            const filtroTipo = this.getAttribute('data-filter');
            renderPosts(filtroTipo);
        });
    });
    
    postsContainer.addEventListener('click', function(e) {
        if (e.target.closest('.like-btn')) {
            const likeBtn = e.target.closest('.like-btn');
            const postId = parseInt(likeBtn.getAttribute('data-id'));
            const post = posts.find(p => p.id === postId);
            
            if (post) {
                post.likes++;
                const likeCount = likeBtn.querySelector('.like-count');
                likeCount.textContent = post.likes;
                likeBtn.style.color = '#2874A6';
            }
        }
    });
    
    renderPosts();
});
