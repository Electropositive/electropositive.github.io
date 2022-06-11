const accordion = document.querySelectorAll('.accordion-homepage .parent');

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('selected');

    })
}

const drawer = document.getElementById('drawer');
const opener = document.getElementById('appdraweropener');
opener.addEventListener('click', () => {
    drawer.classList.toggle('drawer-open')
})

// let parent = document.getElementById('test');

// parent.addEventListener('click', () => {

//     parent.classList.add('selected');
//     this.overflow.children.style.margin
// })