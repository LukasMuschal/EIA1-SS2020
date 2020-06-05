

var africa08: number = 1.028;
var africa18: number = 1.235;
var southamerica08: number = 1.132;
var southamerica18: number = 1.261;
var europe08: number = 4.965;
var europe18: number = 4.209;
var northamerica08: number = 6.600;
var northamerica18: number = 6.035;
var asia08: number = 12.954;
var asia18: number = 16.274;
var australia08: number = 1.993;
var australia18: number = 2.100;
var gesamt: number = africa18 + southamerica18 + europe18 + northamerica18 + asia18 + australia18;

var europeabsolute: number = 4.209;
var europerelative: number = 100 / (gesamt / 4.209);
var europegrowth: number = ((4.209 - 4.965) / 4.965) * 100;
var growtheurope: number = 4.209 - 4.965;

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

function europa() {
    document.querySelector("#titleRegion").innerHTML = "Europa";
    document.querySelector(".chart")?.setAttribute("style", "height: " + europerelative + "px");
    document.querySelector("#europa1").innerHTML = "europeabsolute";
    document.querySelector("#europa1t")?.innerHTML = "Emission Absolute of Europe in 2018";

}
