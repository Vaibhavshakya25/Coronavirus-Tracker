let desh = document.getElementById('country');
let death = document.getElementById('death');
let confirm = document.getElementById('confirm');
let recover = document.getElementById('recovery');
let last_update = document.getElementById('last_update');
let btn = document.getElementById('search');
btn.addEventListener('click',()=>{
    // console.log(desh.value);
    // console.log(typeof desh.value);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd513c69842msh845e3188c41b645p136d67jsn77f7f8f73438',
            'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
        }
    };
    

fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${desh.value}`, options)
        .then(response => response.json())
        .then((response) =>{
            confirm.innerHTML = response.data.confirmed;
            death.innerHTML = response.data.deaths;
            last_update.innerHTML = response.data.lastChecked;
            recover.innerHTML = desh.value;
        })
        .catch(err => alert('Server Error'));
})




// confirmed
// : 
// 44686483
// deaths
// : 
// 530762
// lastChecked
// : 
// "2023-02-22T19:38:22+00:00"
// lastReported
// : 
// "2023-02-22T04:21:00+00:00"
// location
// : 
// "India"
// recovered
// : 
// null