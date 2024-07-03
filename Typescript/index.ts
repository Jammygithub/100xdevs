let userID: string | number = "jay";
userID = 123;

//let user: object;

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: "Jay",
  age: 35,
  isAdmin: true,
  id: "abc",
};

//user = {};

//let hobbies: Array<string>;

let hobbies: string[]; //number[], boolean[]

// {name:string;age:number}[]

hobbies = ["sports", "cooking", "reading"];
//hobbies = [1,2,3]

const API_KEY = "abc";

function add1(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

function add2(a: number, b: number): number {
  const result = a + b;
  return result;
}
function add3(a: number, b: number) {
  const result = a + b;
  return result;
}

function calculate1(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}

calculate1(2, 5, add3);

type AddFn = (a: number, b: number) => number;

function calculate2(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate2(2, 5, add3);

type stringornum = string | number;
let ID: stringornum = "abc1";

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
let user1: User;
user1 = {
  name: "Jay",
  age: 35,
  isAdmin: true,
  id: "abc",
};

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = { password: "abc", email: "test@example.com" };

type Admin = { permissions: string[] };
type AppUser = { userName: string };

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: " Jay",
};

interface Admin1 {
  permissions: string[];
}

interface AppUser1 {
  userName: string;
}

interface AppAdmin1 extends Admin1, AppUser1 {}

let admin1: AppAdmin1;

admin1 = {
  permissions: ["login"],
  userName: " Jay",
};

let role: "admin" | "user" | "editor";

role = "admin";
role = "user";
role = "editor";

type Role = "admin" | "user" | "editor";

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}
