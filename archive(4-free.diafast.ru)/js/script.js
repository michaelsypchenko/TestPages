var mouseOutCount = 0;
document.body.addEventListener('mouseleave', function(event) {
    //событие на увод мышки со страницы. если мышка уходит за верхнюю границу документа, вызывается попап
    var e = event || window.event;
    e = e.clientY;
    var popup = document.querySelector('.popup-container');

    if (popup && e < 10 && mouseOutCount === 0) {
        document.querySelector('.overlay').classList.add('show')
        popup.classList.add('show');
        mouseOutCount++;
    }
});

document.querySelector('#ps-popup-out-comebacker-close').onclick = function() {
    document.querySelector('.popup-container').classList.remove('show');
    document.querySelector('.overlay').classList.remove('show')
};

document.querySelector('.popup__button').onclick = function() {
    document.querySelector('.popup-container').classList.remove('show');
    document.querySelector('.overlay').classList.remove('show')
};

document.querySelector('.overlay').onclick = function() {
    this.classList.remove('show');
    document.querySelector('.popup-container').classList.remove('show');
};



$(function() {
    $('a').attr('href', '#roulette');

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
    });
});