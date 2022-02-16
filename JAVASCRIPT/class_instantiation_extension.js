class Player{
    constructor(wodin, type, weight, height) {
        console.log("Player: ", this)
        this.wodin = wodin;
        this.type = type;
        this.weight = weight;
        this.height = height;
        this.isInjured = (true) ? true : false;
    }
    play(){
        console.log(`${this.wodin} is a ${this.type} player, with a weight of ${this.weight} and a height of ${this.height}`);
    }
}

class Wizard extends Player{
    constructor(wodin, type, weight, height) {
        super(wodin, type, weight, height); // super is used to call the constructor of the parent class
        console.log("Wizard: ", this)
        console.log("Machine's name is: ",this.machineName)
    }
    
}

class StateMachine extends Wizard{
    constructor(machineName, currentState,   wodin, type, weight, height){
         super( wodin, type, weight, height)
        this.machineName = machineName;
        this.currentState = currentState;
       
        console.log("stateMachine: ", this)
    }
        

}

// let newPlayer = new Wizard('Shelly', 'Healer', '100', '5');
// newPlayer.play();
let newWizard = new StateMachine("MacBook Pro", "Brand New", "Elijah", "Left footed", "250Kg", "1.92m" )
console.log(newWizard.isInjured)
newWizard.play();