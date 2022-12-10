document.write(`
    <div class="carrouselBox">
        <button id="back" class="chevronButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style="transform: rotate(180deg)">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
        <img src="./assets/v0.jpg" id="carrousel">
        <button id="next" class="chevronButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="9bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
    </div>
`);
const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back');
let imageElement = document.getElementById('carrousel');

const IMAGE_COUNT = 2;
let imageIndex = 0;
nextBtn.addEventListener("click", () => {
    if (imageIndex === IMAGE_COUNT)
        imageIndex = 0;
    else
        imageIndex++;

    imageElement.setAttribute('src', `./assets/v${imageIndex}.jpg`);
});

backBtn.addEventListener("click", () => {
    if (imageIndex === 0)
        imageIndex = IMAGE_COUNT;
    else
        imageIndex--;
    imageElement.setAttribute('src', `./assets/v${imageIndex}.jpg`);
});