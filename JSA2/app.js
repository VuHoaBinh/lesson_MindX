// Sample 1 ////////////////////////////
console.log("*** SAMPLE 1 ***");

let animals = ["Dog", "Cat", "Frog"];

// Create ✅
animals.push("Rabbit");
console.log("CREATE: ", animals);

// READ ✅
console.log("READ: ", animals);

// UPDATE ✅
animals[0] = "mouse";
console.log("UPDATE: ", animals);

// DELETE ✅
animals.splice(1, 2);
console.log("UPDATE: ", animals);

// Sample 2 ///////////////////////////////////////////
// console.log("*** SAMPLE 2 ***");

// let colors = ["red", "blue", "yellow"];

// // Create ✅
// colors.push("purple");
// console.log("CREATE: ", colors);

// // READ ✅
// console.log("READ: ", colors);

// // UPDATE ✅
// colors[2] = "white";
// console.log("UPDATE: ", colors);

// // DELETE ✅
// colors.splice(2, 3);
// console.log("Update after delete: ", colors);

//////////////////////////////
// console.log("*** SAMPLE 3 ***");

// let colors = [
//   ["red", "blue", "yellow"],
//   ["red", "blue", "yellow"],
//   ["red", "blue", "yellow"],
// ];

// // Create ✅
// colors.push(["purple"]);
// console.log("CREATE: ", colors);

// // READ ✅
// console.log("READ: ", colors);

// // UPDATE ✅
// colors[1][1] = "white";
// console.log("UPDATE: ", colors);

// // // DELETE ✅
// colors.splice(1, 1);
// console.log("Update after delete: ", colors);

// Sample 3 (Object)/////////////////////////////////////////
// console.log("*** SAMPLE 3 ***");

// let people = {
//   name: "Nguyen Van A",
//   age: 25,
//   sex: "Male",
//   cccd: 1234567890,
//   address: "Ha Noi",
//   job: "Developer",
//   hobbies: "Coding",
// };

// // Create ✅
// people.sport = "football";
// console.log("COMMAND CREATE:", people);

// // Read 📖
// console.log("COMMAND READ: ", people);

// // Update 🚀
// people.age = "27";
// console.log("COMMAND UPDATE", people);

// // Delete ❌
// delete people.address;
// console.log("COMMAND DELETE", people);

// Sample 4 (Array)//////////////////////////////
// console.log("*** SAMPLE 3 ***");

// let people = {
//   name: "Nguyen Van A",
//   age: 25,
//   sex: "Male",
//   cccd: 1234567890,
//   address: "Ha Noi",
//   job: "Developer",
//   hobbies: ["Coding", "Sport", "Game"],
// };

// // Create ✅
// people.sport = "football";
// console.log("COMMAND CREATE:", people);

// // Read 📖
// console.log("COMMAND READ: ", people);

// // Update 🚀
// people.hobbies[1] = "Eating";
// console.log("COMMAND UPDATE", people);

// // Delete ❌
// delete people.hobbies[0];
// console.log("COMMAND DELETE", people);
