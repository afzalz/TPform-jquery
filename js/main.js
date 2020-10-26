// Variables

const number = 1;
const doubleNumber = 2.8;
const string = "hello world";
const bool = true;
const array = [];
const collection = {};
test = "toto"
console.log('type: ', number, typeof number);
console.log('type: ', doubleNumber, typeof doubleNumber);
console.log('type: ', string, typeof string);
console.log('type: ', bool, typeof bool);
console.log('type: ', typeof array);
console.log('type: ', typeof collection);

function sayHelloWorld()
{
    console.log("hello world");
    console.log(this.test);
}

sayHelloWorld();

class car
{
    constructor(roue, couleur)
    {
        this.roue = roue;
        this.couleur = couleur;
    }

    get getCouleur()
    {
        return this.couleur;
    }

    set setCouleur(couleur)
    {
        this.couleur = couleur;

    }

    get getRoue()
    {
        return this.roue;
    }

    set setCouleur(roue)
    {
        this.roue = roue;

    }
}

const Car = new car(4, "red");

console.log('couleur: ', Car.getCouleur);

Car.setCouleur = "Yellow"

console.log('couleur: ', Car.getCouleur);

class vehicule
{
    constructor(roue, couleur)
    {
        this.roue = roue;
        this.couleur = couleur;
    }

    Start()
    {
        return 1;
    }
    
    stop()
    {
        return 0;
    }

}

class peugeot extends vehicule
{
    constructor()
    {
        super();
    }
    
    Start()
    {
        return "le véhicule a démarré";
    }
}

const car1 = new peugeot();

console.log(car1.Start());