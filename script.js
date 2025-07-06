



//create basic job names
const btn = document.getElementById('btn')

btn.addEventListener('click', createJobName) 
function createJobName (){
const facilityName = document.getElementById('facilityName').value;
const select = document.getElementById('scope').value

document.getElementById('name').textContent = `${facilityName}${select}`
} 
