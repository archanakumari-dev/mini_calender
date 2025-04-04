let date=new Date();
const month_name=document.getElementById("month")
month_name.innerText=date.toLocaleString("en",{month:'long'})

const day=document.getElementById("day");
day.innerText=date.toLocaleString("en",{weekday:'long'});

const today_date=document.getElementById("date")
const today=date.getDate();
today_date.innerHTML=today>9?today:"0"+today;

const year=document.getElementById("year");
year.innerText=date.getFullYear();