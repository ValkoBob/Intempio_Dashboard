const dropdown = document.getElementById('dropdown');
const selector = document.getElementById('selector');

selector.addEventListener('click', dropdownFunction)


 function dropdownFunction() {
    if(dropdown.classList.contains('hide')) {
        dropdown.classList.remove('hide');
    } else {
        dropdown.classList.add('hide');
    }
}
