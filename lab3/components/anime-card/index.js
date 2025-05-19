export class AnimeCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    render(data, clickHandler) {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
            <img src="${data.image}" class="anime-cover" alt="${data.title}">
            <div class="anime-info">
                <div class="anime-title">${data.title}</div>
                <div class="anime-meta">
                    <span class="episode-badge">${data.episodes} эп.</span>
                    <span>${data.rating}★</span>
                </div>
            </div>
        `;
        card.addEventListener('click', clickHandler);
        this.parent.appendChild(card);
    }
}