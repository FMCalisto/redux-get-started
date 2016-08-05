/*
 * Impure functions.
 *
 * @author: Francisco Maria Calisto
 *
 */

// Impure functions
function square2(x) {
  
  updateXInDatabase(x);
  
  return x * x;
  
}

function squareAll2(items) {
  
  for (let i = 0; i < items.length; i++) {
    
    items[i] = square(items[i]);
    
  }
  
}
