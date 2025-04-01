const colorPicker = document.getElementById('colorPicker');
const headings = document.querySelectorAll('h1');

colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    headings.forEach(heading => {
        heading.style.color = selectedColor;
    });
});