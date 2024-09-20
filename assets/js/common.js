$(function () {
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        visibleOnly: true,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        }
    })
    $('[data-toggle="tooltip"]').tooltip()
})

document.getElementById('toggleButton').addEventListener('click', function() {
    var container = document.getElementById('toggleContainer');
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        container.classList.add('visible');
    } else {
        container.classList.remove('visible');
        container.classList.add('hidden');
    }
});

// Function to toggle BibTeX container
function toggleBibtex() {
    var bibtexContainer = document.querySelector('.bibtex-container');
    if (bibtexContainer.classList.contains('hidden')) {
        bibtexContainer.classList.remove('hidden');
        bibtexContainer.classList.add('visible');
    } else {
        bibtexContainer.classList.remove('visible');
        bibtexContainer.classList.add('hidden');
    }
}

// Example of adding a click event to a link
document.querySelector('a[href="#bibtex"]').addEventListener('click', function(event) {
    event.preventDefault();
    toggleBibtex();
});