const tkt_no = document.getElementById("tkt_no");
const tkt_title = document.getElementById("tkt_title");
const tkt_desc = document.getElementById("tkt_desc");


const submit = document.getElementById("submit");

const display = document.getElementById("display");

submit.addEventListener('click', function()
{   
    if( tkt_no.value =="" || tkt_title.value == "" || tkt_desc.value == ""  ){
        alert("Please fill all the required fields")
    }
    else{
        const displayBody = document.getElementById("display");
        const row = createTableRow();
        display.textContent = tkt_no.value + tkt_title.value + tkt_desc.value;
        displayBody.appendChild(row);
    }
});