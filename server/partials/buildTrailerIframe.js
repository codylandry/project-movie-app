function buildTrailerIframe(type, youtubeId, trailerTitle) {

    if (type == "Clip") {
        return `
        <h3 class="trailer__iframe--title">${trailerTitle}</h3>
        <div class="trailer__iframe--container">
            <iframe 
            style="position: absolute; top: 0; left:0; width: 100%; height: 100%; border: 0;"
            loading="lazy";
            src="https://www.youtube.com/embed/${youtubeId}" 
            title="${trailerTitle}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>`
    } else {
        return `
        <h3 class="trailer__iframe--title">${trailerTitle}</h3>
        <div class="trailer__iframe--container">
            <iframe 
                style="position: absolute; top: 0; left:0; width: 100%; height: 100%; border: 0;"
                loading="lazy";
                srcdoc="<style>
                * {
                padding: 0;
                margin: 0;
                overflow: hidden;
                }
                
                body, html {
                    height: 100%;
                }
                
                img, svg {
                    position: absolute;
                    width: 100%;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }
                
                svg {
                    filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
                    transition: all 250ms ease-in-out;
                }
                
                body:hover svg {
                    filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
                    transform: scale(1.2);
                }
                </style>
                <a href='https://www.youtube.com/embed/${youtubeId}?autoplay=1'>
                <img src='https://img.youtube.com/vi/${youtubeId}/sddefault.jpg' alt='${trailerTitle}' onerror='this.onerror=null; this.src=&quot;./img/failed-to-load-trailer-image.jpg&quot;'>
                <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
                </a>
                "
                src="https://www.youtube.com/embed/${youtubeId}" 
                title="${trailerTitle}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>`
    }
}

module.exports = buildTrailerIframe;