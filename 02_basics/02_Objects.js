// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const obj_js = {
    name: "Louhan",
    "full_name": "Louhan Rout",
    [mySym]: "myKey1",
    age: 21,
    location: "Balasore",
    email: "louhan@google.com",
    isActive: false,
    lastLoginDays: ["Monday", "Thursday"]
}

// console.log(obj_js.email);
// console.log(obj_js["email"]);
// console.log(obj_js["full_name"]);

// console.log(obj_js[mySym]);
// console.log(typeof obj_js[mySym]);

obj_js.location = "bhubaneswar"
// console.log(obj_js["location"]);

// Object.freeze(obj_js)
obj_js.isActive = true
// console.log(obj_js);

obj_js.greetings = function(){
    console.log("Hello Louhan"); 
}
obj_js.greetings2 = function(){
    console.log(`Hello JS user,${this.name}.`); 
}

// console.log(obj_js.greetings);
// console.log(obj_js.greetings());

// console.log(obj_js.greetings2());

// ************Object(part:2)*************

// const tinderUser = new Object()  // singleton 
// console.log(tinderUser);

const tinderUser = {}
tinderUser.id = "012a"
tinderUser.name = "omm99"
tinderUser.Isloggedin = false

// console.log(tinderUser);

const reg_user = {
    email: "omm@gmail.com",
    name: {
        username: {
            firstname: "louhan",
            lastname: "rout"
        }
    }
}

console.log(reg_user.name);
console.log(reg_user.name.username);
console.log(reg_user.name.username.lastname);