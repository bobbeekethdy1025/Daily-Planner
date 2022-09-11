var timeToday = moment().format('dddd MMMM Do');
$('#currentDay').text(timeToday)



var saveButton = document.querySelector('tbody');
var task = document.querySelectorAll('textarea').value;

// saveButton.addEventListener('click', function(event){
//     if (event.target.matches('.saveBtn'))
//         var timeSlot = event.target.dataset.time;
//         var dataInSlot = event.target.parentElement.children[1].children.[0].vaule;
//         localStorage.setItem('timeSlot-'+timeSlot, dataInSlot)
// })

var saved = document.getElementById('saveBtn')

saved.addEventListener('click', function(){
    alert('Saved!')
})