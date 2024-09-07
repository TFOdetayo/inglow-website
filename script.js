document.addEventListener('DOMContentLoaded', function () {
    // Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Search Products function
    window.searchProducts = function() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    };
});
