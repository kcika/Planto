// search.js

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const products = document.querySelectorAll('.product');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();

        products.forEach(product => {
            const productName = product.dataset.name.toLowerCase();
            const productCategory = product.dataset.category.toLowerCase();

            // Show or hide the product based on the search query
            if (productName.includes(query) || productCategory.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

