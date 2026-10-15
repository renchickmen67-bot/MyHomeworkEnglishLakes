// МОБИЛЬНОЕ МЕНЮ

const nav = document.getElementById("nav");
const menu = document.getElementById("menuToggle");

menu.addEventListener("click", () => {

    nav.classList.toggle("open");

    menu.setAttribute(
        "aria-expanded",
        nav.classList.contains("open")
    );

});

nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


// ПОИСК ПО САЙТУ

const panel = document.getElementById("searchPanel");

document
    .getElementById("searchToggle")
    .addEventListener("click", () => {

        panel.hidden = !panel.hidden;

        if (!panel.hidden) {
            document.getElementById("searchInput").focus();
        }

    });


// ЗАКРЫТИЕ ПОИСКА

document
    .getElementById("closeSearch")
    .addEventListener("click", () => {

        panel.hidden = true;

    });


// РАБОТА ПОИСКА

document
    .getElementById("searchInput")
    .addEventListener("input", event => {

        const query = event.target.value
            .trim()
            .toLowerCase();

        const result = document.getElementById("searchResult");

        if (!query) {

            result.textContent = "";

            return;

        }

        const elements = [
            ...document.querySelectorAll(
                "main h1, main h2, main h3, main p, main li, main dt"
            )
        ];

        const found = elements.filter(element => {

            return element.textContent
                .toLowerCase()
                .includes(query);

        });

        if (found.length > 0) {

            result.textContent =
                `Found ${found.length} matching section(s).`;

            found[0].scrollIntoView({

                behavior: "smooth",
                block: "center"

            });

        } else {

            result.textContent =
                "No matching text found.";

        }

    });


// ГАЛЕРЕЯ: ПРЕДЫДУЩИЕ ФОТОГРАФИИ

const track = document.getElementById("track");

document
    .getElementById("prev")
    .addEventListener("click", () => {

        track.scrollBy({

            left: -track.clientWidth * 0.75,
            behavior: "smooth"

        });

    });


// ГАЛЕРЕЯ: СЛЕДУЮЩИЕ ФОТОГРАФИИ

document
    .getElementById("next")
    .addEventListener("click", () => {

        track.scrollBy({

            left: track.clientWidth * 0.75,
            behavior: "smooth"

        });

    });