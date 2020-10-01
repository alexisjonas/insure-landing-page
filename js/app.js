const btn = document.getElementById('checkbox');
const menu = document.getElementById('dropdown');

btn.addEventListener('click', function() {
    if(btn.checked != true) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
