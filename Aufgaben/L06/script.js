"use strict";
var gesamt = 31.114;
var europeabsolute = 4.209;
var europerelative = 100 / (gesamt / 4.209);
var europegrowth = ((4.209 - 4.965) / 4.965) * 100;
var growtheurope = 4.209 - 4.965;
function europa() {
    document.querySelector(".europe")?.addEventListener("click", europa);
    document.querySelector("#titleRegion")?.innerHTML + "Europa";
}
var northamericaabsolute = 6.035;
var northamericarelative = 100 / (gesamt / 6.035);
var northamericagrowth = ((6.035 - 6.600) / 6.600) * 100;
var growthnorthamerica = 6.035 - 6.600;
var southamericaabsolute = 1.261;
var southamericarelative = 100 / (gesamt / 1.261);
var southamericagrowth = ((1.261 - 1.132) / 1.132) * 100;
var growthsouthamerica = 1.261 - 1.132;
var africaabsolute = 1.235;
var africarelative = 100 / (gesamt / 1.235);
var africagrowth = ((1.235 - 1.028) / 1.028) * 100;
var growthafrica = 1.235 - 1.028;
var asiaabsolute = 16.274;
var asiarelative = 100 / (gesamt / 16.274);
var asiagrowth = ((16.274 - 12.954) / 12.954) * 100;
var growthasia = 16.274 - 12.954;
var australiaabsolute = 2.100;
var australiarelative = 100 / (gesamt / 2.100);
var australiagrowth = ((2.100 - 1.993) / 1.993) * 100;
var growthaustralia = 2.100 - 1.993;
//# sourceMappingURL=script.js.map