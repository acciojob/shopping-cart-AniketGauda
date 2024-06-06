let arr = [];

let pDiv = document.getElementById("tbl");

let h3 = document.getElementById("total");

let btn = document.getElementById("add");


btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let itm = document.getElementById("item-name-input");
    let prc = document.getElementById("item-price-input");
    let qty = document.getElementById("item-qty-input");


    let obj = {
        item:`${itm.value}`,
        price:`${prc.value}`,
        quantity:`${qty.value}`
    }

    arr.push(obj);

    itm.value = ``;
    prc.value = ``;
    qty.value = ``;

    display(arr);
})

function display(){

    let sm=0;

    arr.forEach((obj)=>{
        sm+=parseInt(obj.price*obj.quantity);
    })

    
    h3.textContent = `grandTotal : ${sm}`;
    
    let obj = arr[arr.length-1];

    pDiv.innerHTML += `
        <tr>
            <td id="item">${obj.item}</td>
            <td id="qty">${obj.quantity}</td>
            <td id="price">${obj.price}</td>
        </tr>
    `;
}