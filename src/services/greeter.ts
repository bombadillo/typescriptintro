import { Person } from '../interfaces/person';

export function greet(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}