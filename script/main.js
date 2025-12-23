var togglebutton = document.getElementById('theme-toggle');
let darkmode = false;

togglebutton.addEventListener('click', function () {
    if (darkmode === false) {
        darkmode = true;
        togglebutton.textContent = 'off';

        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.querySelector('header').style.backgroundColor = 'grey';
        let cc = document.getElementsByClassName('cc');
        for (let i = 0; i < cc.length; i++) {
            cc[i].style.backgroundColor = 'grey';
            }
        let inputdark = document.getElementsByClassName('jsinput');
        for (let i = 0; i < inputdark.length; i++) {
            inputdark[i].style.backgroundColor = 'black';
            inputdark[i].style.color = 'white';
        }

    } else {
        darkmode = false;
        togglebutton.textContent = 'on';

        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';


        let cc = document.getElementsByClassName('cc');
        for (let i = 0; i < cc.length; i++) {
            cc[i].style.backgroundColor = 'white';
            }
        let inputdark = document.getElementsByClassName('jsinput');
        for (let i = 0; i < inputdark.length; i++) {
            inputdark[i].style.backgroundColor = 'white';
            inputdark[i].style.color = 'black';
        }
         document.querySelector('header').style.backgroundColor = 'white';
    }
});
