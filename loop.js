// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances
// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Crystal {
     constructor (favoriteShape, favoriteFood, superPower) {
          this.favoriteShape = "hexagon";
          this.favoriteFood = "pizza";
          this.superPower = "joy";
     }
          meditateToday (am) {
               console.log("i did 7am" + this.favoriteShape);
          }
          workedOut () {
               console.log('did bOdi!');
          }
          meditatedTonight (pm) {
               
               console.log('i did 6pm!');

          }

     }
const you = new Crystal('Cathy the Miraculous','brown', 'locs of dark brown');
const me = new Crystal('Arthur the Wavy', 'brown', 'his waves be spinnin keep of the g for greatness');

const people = [
     {you},
     {me}
   ];
   for (let persone of people) {
     console.log(persone[i].favoriteShape + ': ' + persone[i].favoriteFood);
   }
   
   
console.log(people)




   

