"use strict";
// Enums serve to make  specific sequences of numbers more human-readable and expressive.
// Take, for example, this plain JavaScript code:
const Pizza = 0;
const FriedChicken = 1;
const IceCream = 2;
// The above variables could be used anywhere in code but is still kinda ugly that way to a lot of developers
// With enums in TypeScript, which you declare with the new enum keyword, you can do it more elegantly:
var Food;
(function (Food) {
    Food[Food["Pizza"] = 0] = "Pizza";
    Food[Food["FriedChicken"] = 1] = "FriedChicken";
    Food[Food["IceCream"] = 2] = "IceCream";
})(Food || (Food = {}));
let myFavoriteFood = Food.FriedChicken;
alert(myFavoriteFood);
