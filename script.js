let table=document.getElementById("sampleTable");

function insert_Row() {
   //Write your code here
   let td1=document.createElement("td");
   let td2=document.createElement("td");
   td1.innerText="New Cell1";
   td2.innerText="New Cell2";
   let tr1=document.createElement("tr");
   tr1.appendChild(td1);
   tr1.appendChild(td2);
   table.insertBefore(tr1,table.firstElementChild);
}
