/* this will make the filter box remain still when reach at 10px top*/
window.addEventListener("scroll", function () {

    var container = document.querySelector(".filter-container");
    var filter = document.querySelector(".filter");
    var distance = container.getBoundingClientRect().top;

    if (distance <= 10) {
        filter.style.position = "fixed";
    }
    else {
        filter.style.position = "absolute";
    }

});


document.querySelector('#filtername_btn').addEventListener('click', function () {
    var box = document.querySelector('#fbox_name');
    var box1 = document.querySelector('#fbox_pdate');
    var box2 = document.querySelector('#fbox_price');

    (document.querySelector('#filterprice_btn')).style.backgroundColor="#2C3E50";
    (document.querySelector('#filterpdate_btn')).style.backgroundColor="#2C3E50";
    this.style.backgroundColor='blue';

    box.style.display = 'block';
    box1.style.display = 'none';
    box2.style.display = 'none';
});

document.querySelector('#filterpdate_btn').addEventListener('click', function () {

    var box = document.querySelector('#fbox_name');
    var box1 = document.querySelector('#fbox_pdate');
    var box2 = document.querySelector('#fbox_price');

    (document.querySelector('#filtername_btn')).style.backgroundColor="#2C3E50";
    (document.querySelector('#filterprice_btn')).style.backgroundColor="#2C3E50";
    this.style.backgroundColor='blue';

    box1.style.display = 'block';
    box.style.display = 'none';
    box2.style.display = 'none';
});

document.querySelector('#filterprice_btn').addEventListener('click', function () {
    var box = document.querySelector('#fbox_name');
    var box1 = document.querySelector('#fbox_pdate');
    var box2 = document.querySelector('#fbox_price');

    (document.querySelector('#filtername_btn')).style.backgroundColor="#2C3E50";
    (document.querySelector('#filterpdate_btn')).style.backgroundColor="#2C3E50";
    this.style.backgroundColor='blue';

    box2.style.display = 'block';
    box1.style.display = 'none';
    box.style.display = 'none';
});


