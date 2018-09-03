// dodajemy funkcję konstruującą nasze telefony (klasy) - jako argumenty podajemy markę, cenę oraz kolor. 
function Phone(brand, price, color) {
    // Here we put interior of the constructing function.
    // by using this, the "brand" property of the object we create will assume the value of the brand argument
    // dodajemy parametry klasy z użyciem this
    this.brand = brand;
	this.price = price;
	this.color = color;
}
// tworzymy metodą o nazwie prontInfo opisującą telefon za pomocą console.log() korzystając z prototypu
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

// na podstawie utworzonej klasy i proototypu tworzymy obiekty, które będą przedstawiać następujące modele telefonów: Samsung Galaxy S6, iPhone 6s, OnePlus One
var Samsung_Galaxy_S6 = new Phone("Samsung", 2300, "gold");
var iPhone6S = new Phone("Apple", 2250, "silver");
var OnePlusOne = new Phone("OnePlus", 2000, "black");

Samsung_Galaxy_S6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();