function myFunction() {
    let menu = document.getElementById("navbar").classList.contains('hidden');
    menu ? document.getElementById("navbar").classList.remove('hidden') : document.getElementById("navbar").classList.add('hidden');
}

function myModel() {
    console.log('hiiii')
    let menu = document.getElementById("modal").classList.contains('hidden');
    console.log(menu)
    menu ? document.getElementById("modal").classList.remove('hidden') : document.getElementById("modal").classList.add('hidden');
}