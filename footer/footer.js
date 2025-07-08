document.addEventListener('DOMContentLoaded', function() {
    fetch('/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
    .catch(error => console.log('Error loading data', error));
})