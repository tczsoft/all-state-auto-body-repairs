

function myFunction() {
    let menu = document.getElementById("navbar").classList.contains('hidden');
    menu ? document.getElementById("navbar").classList.remove('hidden') : document.getElementById("navbar").classList.add('hidden');
}

function myModel() {
    let menu = document.getElementById("modal").classList.contains('hidden');
    console.log(menu)
    menu ? document.getElementById("modal").classList.remove('hidden') : document.getElementById("modal").classList.add('hidden');
}

function contactModel() {
    let menu = document.getElementById("contactModel").classList.contains('hidden');
    document.getElementById("contactModel").classList.remove('animate-delay-[5000ms]')
    menu ? document.getElementById("contactModel").classList.remove('hidden') : document.getElementById("contactModel").classList.add('hidden');
}

function contactSubmit() {
    
    var formnew = document.getElementById('form');

    formnew.addEventListener('submit', (e) => {
        var First_Name = document.getElementById('First_Name').value
        var Last_Name = document.getElementById('Last_Name').value
        var Phone = document.getElementById('Phone').value
        var Brand = document.getElementById('Brand').value
        var Model = document.getElementById('Model').value
        var Year = document.getElementById('Year').value

        var formdata = new FormData();
        formdata.append("First_Name", First_Name)
        formdata.append("Last_Name", Last_Name)
        formdata.append("Phone", Phone)
        formdata.append("Brand", Brand)
        formdata.append("Model", Model)
        formdata.append("Year", Year)
        console.log(formdata,First_Name)
        create('../../message.php',formdata).then(data =>{
            alert(data['result'])
        })
    })
}

async function create(url,formData) {
    return await fetch(url, {
        method: "POST",
        body: formData,
    }).then(data => data.json())
}