// dodajemy funkcję konstruującą nasze telefony (klasy) - jako argumenty podajemy markę, cenę oraz kolor. 
function Phone(brand, price, color, dimensions, weight) {
    // Here we put interior of the constructing function.
    // by using this, the "brand" property of the object we create will assume the value of the brand argument
    // dodajemy parametry klasy z użyciem this
    this.brand = brand;
	this.price = price;
    this.color = color;
    this.dimensions = dimensions;
    this.weight = weight;
}
// tworzymy metodą o nazwie printInfo opisującą telefon za pomocą console.log() korzystając z prototypu
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " zł. It dimensions is " + this.dimensions + " mm and it weight is " + this.weight + " g.");
}

// na podstawie utworzonej klasy i proototypu tworzymy obiekty, które będą przedstawiać następujące modele telefonów: Samsung Galaxy S6, iPhone 6s, OnePlus One
var Samsung_Galaxy_S6 = new Phone("Samsung", 2300, "gold", "138x67x6,9", 129);
var iPhone6S = new Phone("Apple", 2250, "silver", "143,4x70,5x6,8", 138);
var OnePlusOne = new Phone("OnePlus", 2000, "black", "152,9x75,9x8,9", 162);

Samsung_Galaxy_S6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();

// nowa funkcja konstruująca
function HolidayOffer(direction, duration, price) {
    this.direction = direction;
    this.duration = duration;
    this.price = price;
}

HolidayOffer.prototype.printInfo = function() {
    console.log("Wyjedź do " + this.direction + " na " + this.duration + " za " + this.price + ".");
}

var Francja = new HolidayOffer("Francja", "dwa tygodnie", 2500);
var Bułgaria = new HolidayOffer("Bułgaria", "trzy tygodnie", 1500);
var Szwajcaria = new HolidayOffer("Szwajcaria", "tydzień", 4000);

Francja.printInfo();
Bułgaria.printInfo();
Szwajcaria.printInfo();
