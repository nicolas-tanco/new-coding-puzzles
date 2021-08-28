/* Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise. */

Array.prototype.sameStructureAs = function (other) {

    let a = true
    if(this.length!=other.length) return false
    
  
    for(var i=0; i<this.length ; i++){
     
      if(!(Array.isArray(this[i])) && Array.isArray(other[i])) {
        return false
      }
      
      if(Array.isArray(this[i]) && !(Array.isArray(other[i]))) {
        return false
      }
      if(Array.isArray(this[i]) && Array.isArray(other[i]))  {
         a = this[i].sameStructureAs(other[i])}
    }
    
    return a
  }