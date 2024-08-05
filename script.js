const containerVideos = document.querySelector('.videos__container');

async function buscarEMostrarVideo() {
    try {
        const buscar = await fetch('http://localhost:3000/videos');
        const videos = await buscar.json();

        videos.forEach((video) => {
            if (video.categoria == '') {
                throw new Error('Video não tem categoria');
            }
            containerVideos.innerHTML += `
                    <li class="videos__item">
                        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                        <div class="descricao-video">
                            <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                            <h3 class="titulo-video">${video.titulo}</h3>
                            <p class="titulo-canal">${video.descricao}</p>
                        </div>
                    </li>
                `;
        })
    } catch (error) {
        containerVideos.innerHTML = `
            <p>Houve um error ao carregar os vídeos: ${error}</p>
        `;
    }
}

buscarEMostrarVideo();