const artisansContainer = document.getElementById("artisans-container");

fetch("data/artisans.json")
    .then(response => response.json())
    .then(artisans => {

        artisans.forEach(artisan => {

            const section = document.createElement("section");

            section.classList.add("artisan-card");

            section.innerHTML = `
                <img
                    src="${artisan.heroImage}"
                    alt="${artisan.tradition}"
                    class="artisan-image"
                >

                <div class="artisan-content">

                    <span class="region-badge">
                        ${artisan.region}
                    </span>

                    <h2>${artisan.title}</h2>

                    <h3>${artisan.tradition}</h3>

                    <p>
                        <strong>Cultural Background:</strong>
                        ${artisan.background}
                    </p>

                    <p>
                        <strong>Weaving Significance:</strong>
                        ${artisan.significance}
                    </p>

                    <p>
                        <strong>Artisan Story:</strong>
                        ${artisan.story}
                    </p>

                    <p>
                        <strong>Community Impact:</strong>
                        ${artisan.support}
                    </p>

                </div>
            `;

            artisansContainer.appendChild(section);
        });
    });

