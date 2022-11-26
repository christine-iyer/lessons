function capitalize(str) {
     return str.replace(
       /\w\S*/g,
       function(txt) {
         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
       }
     );
   }
   
let strArr = "a happy go luchy gal on the go!"
console.log(capitalize(strArr))
