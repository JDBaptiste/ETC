document.getElementById('account_link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var box = document.querySelector('#login_form');
    var button=document.querySelector('#login_btn')
   
    if (box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'flex';
        this.style.backgroundColor="#ccc";
        box.classList.add('login_ani');
        button.classList.add('login_btn_ani');
       
    } else {
        this.style.backgroundColor="transparent";
        box.style.display = 'none';
        box.classList.remove('login_ani');
        button.classList.remove('login_btn_ani');



  
    }
});

document.getElementById('account_link').addEventListener('click', function(event) {
event.stopPropagation();
});

document.addEventListener('click', function(event) {
var box = document.getElementById('login_form');
var link = document.getElementById('account_link');

if (!box.contains(event.target) && event.target !== link) {
box.style.display = 'none';
link.style.backgroundColor = "transparent";
}
});

document.getElementById('search_link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var box = document.querySelector('#bar4');
   
    if (box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'flex';
        this.style.backgroundColor="#ccc";
       
    } else {
        this.style.backgroundColor="transparent";
        box.style.display = 'none';
  
    }
});

document.getElementById('search_link').addEventListener('click', function(event) {
event.stopPropagation();
});

document.addEventListener('click', function(event) {
var box = document.getElementById('small_search_bar');
var link = document.getElementById('search_link');

if (!box.contains(event.target) && event.target !== link) {
box.style.display = 'none';
link.style.backgroundColor="transparent";

}
});