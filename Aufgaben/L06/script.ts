window.addEventListener("load" , function() {
var gesamt: number = 31.114;

var europeabsolute: number = 4.209;
var europerelative: number = 100 / (gesamt / 4.209);
var europegrowth: number = ((4.209 - 4.965) / 4.965) * 100;
var growtheurope: number = 4.209 - 4.965;

function europa() {
     document.querySelector("#titleRegion")?.innerHTML + "Europa";
     document.querySelector(".chart")?.setAttribute("style" , "height: " + europerelative + "px");

     document.querySelector("#europa1").innerHTML = europeabsolute;
     document.querySelector("#europa1t").innerHTML = "Emission absolute in Europe 2018";

     document.querySelector("#europa2")?.innerHTML = europerelative + "%";
     document.querySelector("#europa2t")?.innerHTML = "Relative to total worlds Emission";

     document.querySelector("#europa3")?.innerHTML = europegrowth + "%";
     document.querySelector("#europa3t")?.innerHTML = "Growth rate between 2008 and 2018 (in %)";

     document.querySelector("#europa4")?.innerHTML = growtheurope;
     document.querySelector("#europa4t")?.innerHTML = "Growth rate between 2008 and 2018 (absolute)";

}

var northamericaabsolute: number = 6.035;
var northamericarelative: number = 100 / (gesamt / 6.035);
var northamericagrowth: number = ((6.035 - 6.600) / 6.600) * 100;
var growthnorthamerica: number = 6.035 - 6.600;

var southamericaabsolute: number = 1.261; 
var southamericarelative: number = 100 / (gesamt / 1.261);
var southamericagrowth: number = ((1.261 - 1.132) / 1.132) * 100;
var growthsouthamerica: number = 1.261 - 1.132; 

var africaabsolute: number = 1.235;
var africarelative: number = 100 / (gesamt / 1.235);
var africagrowth: number = ((1.235 - 1.028) / 1.028) * 100;
var growthafrica: number = 1.235 - 1.028;

var asiaabsolute: number = 16.274; 
var asiarelative: number = 100 / (gesamt / 16.274);
var asiagrowth: number = ((16.274 - 12.954) / 12.954) * 100; 
var growthasia: number = 16.274 - 12.954;

var australiaabsolute: number = 2.100;
var australiarelative: number = 100 / (gesamt / 2.100);
var australiagrowth: number = ((2.100 - 1.993) / 1.993) * 100;
var growthaustralia: number = 2.100 - 1.993;

document.querySelector(".europe")?.addEventListener("click" , europa);

})