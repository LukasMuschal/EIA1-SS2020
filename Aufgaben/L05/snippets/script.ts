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

var minus: number = africa18 - africa08;
var minus1: number = southamerica18 - southamerica08;
var minus2: number = europe18 - europe08;
var minus3: number = northamerica18 - northamerica08;
var minus4: number = asia18 - asia08;
var minus5: number = australia18 - australia08;



console.log("Die Emission von Afrika ist: " + africa18 + "kg CO2");
console.log("Relativ zur Gedamtemision der Welt verursacht Afrika damit " + africa18 * 100 / gesamt + " Prozent.");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + africa08 * 100 / africa18 + " Prozent Verändert");
console.log("2018 im Vergleich zu 2008 sind das " + minus + " Kg Co2");

console.log("Die Emission von Süd Amerika ist: " + southamerica18 + "kg CO2");
console.log("Relativ zur Gedamtemision der Welt verursacht Süd Amerika damit " + southamerica18 * 100 / gesamt + " Prozent.");
console.log("Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + southamerica08 * 100 / southamerica18 + " Prozent Verändert");
console.log("2018 im Vergleich zu 2008 sind das " + minus1 + " Kg Co2");

console.log("Die Emission von Europa ist: " + europe18 + "kg CO2");
console.log("Relativ zur Gedamtemision der Welt verursacht Europa damit " + europe18 * 100 / gesamt + " Prozent.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + europe08 * 100 / europe18 + " Prozent Verändert");
console.log("2018 im Vergleich zu 2008 sind das " + minus2 + " Kg Co2");

console.log("Die Emission von Nordamerika ist: " + northamerica18 + "kg CO2");
console.log("Relativ zur Gedamtemision der Welt verursacht Nordamerika damit " + northamerica18 * 100 / gesamt + " Prozent.");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + northamerica08 * 100 / northamerica18 + " Prozent Verändert");
console.log("2018 im Vergleich zu 2008 sind das " + minus3 + " Kg Co2");

console.log("Die Emission von Asien ist: " + asia18 + "kg CO2");
console.log("Relativ zur Gedamtemision der Welt verursacht Asien damit " + asia18 * 100 / gesamt + " Prozent.");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asia08 * 100 / asia18 + " Prozent Verändert");
console.log("2018 im Vergleich zu 2008 sind das " + minus4 + " Kg Co2");

console.log("Die Emission von Australien ist: " + australia18 + "kg CO2");
console.log("Relativ zur Gedamtemision der Welt verursacht Australien damit " + australia18 * 100 / gesamt + " Prozent.");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + australia08 * 100 / australia18 + " Prozent Verändert");
console.log("2018 im Vergleich zu 2008 sind das " + minus5 + " Kg Co2");