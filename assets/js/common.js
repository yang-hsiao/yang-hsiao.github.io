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