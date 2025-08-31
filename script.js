const btn = document.getElementById('darkModeBtn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Schimbare text buton
    if(document.body.classList.contains('dark-mode')) {
        btn.textContent = 'Light Mode';
    } else {
        btn.textContent = 'Dark Mode';
    }
});
