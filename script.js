//your code here
let arr = [];

let pDiv = document.getElementById("tbl");

let h3 = document.getElementById("total");

let btn = document.getElementById("add");


btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let itm = document.getElementById("item-name-input");
    let prc = document.getElementById("item-price-input");


    let obj = {
        item:`${itm.value}`,
        price:`${prc.value}`
    }

    arr.push(obj);

    itm.value = ``;
    prc.value = ``;

    display(arr);
})

function display(){

    let sm=0;

    arr.forEach((obj)=>{
        sm+=parseInt(obj.price);
    })

    
    h3.textContent = `grandTotal : ${sm}`;
    
    let obj = arr[arr.length-1];

    pDiv.innerHTML += `
        <tr>
            <td id="item">${obj.item}</td>
           <td id="price">${obj.price}</td>
        </tr>
    `;
}