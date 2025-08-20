
function rentAmt(){
    console.log(document.getElementById('movie'))
    const movie= document.getElementById('movie').innerHTML;
    console.log(movie);
    let amt=0;
    amt= parseInt((Math.random() *50 +10).toFixed(2));
    let total = parseInt((amt + 104).toFixed(2));
    let details = document.createElement("div");
    details.innerHTML=`<div><p><strong>Movie</strong> : ${movie}</p>
    <p><strong>Tax</strong> : ₹ 104</p>
    <p><strong>Total</strong> : ₹ ${total}</div> ` 
    document.getElementsByClassName("details")[0].appendChild(details);
}

rentAmt()
