import { Student } from './classes/student';
import { greet } from "./services/greeter";

var user = new Student('Bob', 'D.', 'Bobby');

console.log(greet(user)); 