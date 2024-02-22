function myFunction() {
    let menu = document.getElementById("navbar").classList.contains('hidden');
    menu ? document.getElementById("navbar").classList.remove('hidden') : document.getElementById("navbar").classList.add('hidden');
}