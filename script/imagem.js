localStorage.imageIndex++;
if (localStorage.imageIndex > 2)
    localStorage.imageIndex = 0;

document.write(`
    <div>
        <img src="./assets/i${localStorage.imageIndex}.jpg" class="bodyImage">
    </div>
`);