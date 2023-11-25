const hours= document.querySelector(".hours__number");
const mins=document.querySelector(".MINS__number");
const sec=document.querySelector(".SEC__number");

const currentTime= new Date();
let jam =currentTime.getHours();
let menit=currentTime.getMinutes();
let detik=currentTime.getSeconds();
hours.textContent= (jam<10? "0" + jam:jam);
mins.textContent=(menit<10? "0"+menit:menit);
sec.textContent=(detik<10?"0"+detik:detik);
