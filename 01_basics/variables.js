// Way to declare a constant is to use const keyword
const PI = 3.14   // can not be redeclared and update. Fix value

let accountId = 254789631 //cannot be redeclared but is updatable and is block scoped
accountId = 2356  // will not give any error but will change the value of accountId to 2356
//let accountId = 2458963  will give error as accountId can not be redeclared
//var accountId  wilol also give error
let accountNo // can be declared using let
 
var accountName = "Vaibhav" // can be both redecalared and is updatable and is global scopped.
var accountName = "Diwakar" // will not give any error as redeclaration is allowed
accountName = "Jeremy" //  will not give any error but will change the value of accountNmae to Jeremy


isWritable = true

console.table([PI,accountId,accountName,isWritable])