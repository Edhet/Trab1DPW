if (localStorage.imageIndex == null || localStorage.imageIndex > 1)
    localStorage.imageIndex = -1;

localStorage.imageIndex++;
document.write(`
    <div>
        <img src="./assets/i${localStorage.imageIndex}.jpg" class="bodyImage">
    </div>
`);