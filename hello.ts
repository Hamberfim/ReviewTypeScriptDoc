// adhamlin | 06-09-2022 | hello.ts
/* 
     basics of typescript | greeting in js/html using typescript
     compile: tsc --target es2015 hello.ts
*/

"use strict";
function greet(person: string, date: Date): string {  // explicit return type annotation
    
    let message: string = `Hello ${person}, today is ${date.toDateString()}`;  // explicit type annotation
    return message;
}

// instantiate greeting
let greetBigAll: string = greet("Big All", new Date());  // explicit type annotation
let greetBrenda: string = greet("Brenda", new Date());  // explicit type annotation

// get html element / populate element
let elMsg1 = document.getElementById("msg1");
elMsg1!.textContent = greetBigAll;  // '!' non-null assertion operator | dev know that is's not null

let elMsg2 = document.getElementById("msg2");
elMsg2!.textContent = greetBrenda;  // '!' non-null assertion operator | dev know that is's not null

// object types with properties | one optional using the null operator
function yourName(obj: {fName: string; lName?: string}): string {  // explicit return type annotation
    let fullName: string = obj.fName.charAt(0).toUpperCase() + obj.fName.slice(1).toLowerCase();  // explicit type annotation
    if (obj.lName) {  // if lName is an argument add to fullName
        fullName += ` ${obj.lName.charAt(0).toUpperCase() + obj.lName.slice(1).toLowerCase()}`;  // explicit type annotation
    }
    return fullName;
}

let myName1: string = yourName({fName: "andrew"});  // explicit type annotation
let myName2: string = yourName({fName: "tommy", lName: "tutone"});  // explicit type annotation
let myName3: string = yourName({fName: "JENNY", lName: "CHANGENUMBER"});  // explicit type annotation

// get html element / populate element
let elName1 = document.getElementById("name1");
elName1!.textContent = myName1;  // '!' non-null assertion operator | dev know that is's not null

let elName2 = document.getElementById("name2");
elName2!.textContent = myName2;  // '!' non-null assertion operator | dev know that is's not null

let elName3 = document.getElementById("name3");
elName3!.textContent = myName3;  // '!' non-null assertion operator | dev know that is's not null


// object types with properties | both optional using the null operator
function yourNameOpt(obj: {fName?: string; lName?: string}): string {  // explicit return type annotation
    let fullName: string;  // explicit type annotation
    if (obj.fName && obj.lName) {
        fullName = obj.fName.charAt(0).toUpperCase() + obj.fName.slice(1).toLowerCase();
        fullName += ` ${obj.lName.charAt(0).toUpperCase() + obj.lName.slice(1).toLowerCase()}`;
    }
    else if (!obj.fName && obj.lName) {  // if lName is an argument add to fullName
        fullName = ` ${obj.lName.charAt(0).toUpperCase() + obj.lName.slice(1).toLowerCase()}`;  // explicit type annotation
    }
    else 
    {
        fullName = obj.fName!.charAt(0).toUpperCase() + obj.fName!.slice(1).toLowerCase();  // '!' non-null assertion operator | dev know that is's not null
    }
    return fullName;
}

let myName4: string = yourNameOpt({fName: "mickie", lName: "porccelli"});  // explicit type annotation
let myName5: string = yourNameOpt({lName: "contaldo"});  // explicit type annotation
let myName6: string = yourNameOpt({fName: "bob"});  // explicit type annotation

// get html element / populate element
let elName4 = document.getElementById("name4");
elName4!.textContent = myName4;  // '!' non-null assertion operator | dev know that is's not null

let elName5 = document.getElementById("name5");
elName5!.textContent = myName5;  // '!' non-null assertion operator | dev know that is's not null

let elName6 = document.getElementById("name6");
elName6!.textContent = myName6;  // '!' non-null assertion operator | dev know that is's not null


// union types
function prntId(id: number | string) {
    return `${id}`;
}

let fnPrintId1 = prntId("123");
let elFnPrintId1 = document.getElementById("fnPrintId1");
elFnPrintId1!.textContent = fnPrintId1;

let fnPrintId2 = prntId(321);
let elFnPrintId2 = document.getElementById("fnPrintId2");
elFnPrintId2!.textContent = fnPrintId2;

let fnPrintId3 = prntId("21" + 3);
let elFnPrintId3 = document.getElementById("fnPrintId3");
elFnPrintId3!.textContent = fnPrintId3;

let fnPrintId4 = prntId(2 + "1" + 3);
let elFnPrintId4 = document.getElementById("fnPrintId4");
elFnPrintId4!.textContent = fnPrintId4;

// stopped at: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces