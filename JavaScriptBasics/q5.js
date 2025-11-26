// Q5. Variable Scope Demo
// Inside a function, declare variables using var , let and const . Log their
// accessibility inside and outside blocks.
// Expected: Demonstrate block scope vs. function scope.

function scopeDemo() {
  var x = "I am var (function-scoped)";
  let y = "I am let (block-scoped)";
  const z = "I am const (block-scoped)";

  console.log("Inside function:");
  console.log(x); 
  console.log(y); 
  console.log(z);

  if (true) {
    var a = "var inside block (still function-scoped)";
    let b = "let inside block";
    const c = "const inside block";

    console.log("\nInside block:");
    console.log(a); 
    console.log(b); 
    console.log(c); 
  }

  console.log("\nOutside block:");
  console.log(a); 
  console.log(b); //Error
  console.log(c); //Error
}

scopeDemo();