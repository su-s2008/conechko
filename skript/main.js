document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
});
