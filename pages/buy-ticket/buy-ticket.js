const numberOfPassengers = 5;
for (let index = 1; index <= numberOfPassengers; index++) {
    const html = 
`
<div class="indexNumber">
${index}
</div>

<div class="inputBox">
<span>نام :</span>
<input required="true" type="text" placeholder="نام">
</div>  

<div class="inputBox">
<span>نام خانوادگی :</span>
<input required="true" type="text" placeholder="نام خانوادگی">
</div>

<div class="inputBox">
<span>شماره پاسپورت :</span>
<input required="true" type="number" placeholder="شماره پاسپورت">
</div>

<hr size="8" width="100%" color="green" align="center" >
`
    document.getElementById('formHtml').innerHTML = document.getElementById('formHtml').innerHTML + html;
}


function buyClick (){
    alert("خرید با موفقیت انجام شد.");
}
