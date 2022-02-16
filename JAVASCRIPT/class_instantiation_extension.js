class Player{
    constructor(name, type, weight, height) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.height = height;
    }
}

class Wizard extends Player{
    constructor(name, type, weight, height) {
        super(name, type); // super is used to call the constructor of the parent class
    }
    play(){
        console.log(`${this.name} is a ${this.type} with a weight of ${this.weight} and a height of ${this.height}`);
    }
}

let newPlayer = new Wizard('Shelly', 'Healer', '100', '5');
newPlayer.play();