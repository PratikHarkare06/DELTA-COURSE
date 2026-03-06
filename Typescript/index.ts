// // let sales : number = 123_456_789 ;
// // let course : string = "Typescript";
// // let is_published : boolean = true;

// // let level = 1;
 
// // let user :[number,string]=[1,"pratik"];
// // user.push(1);



// // Enum
// // const small = 1;
// // const medium = 2;
// // const large = 3;

// //  const enum Size {Small = 1,Medium , Large};
// // let  mySize : Size = Size.Medium;
// // console.log(mySize) ;




// // Functions

// // function calculateTax {income :number }{
// //     return 0;
// // }




// type  Employee = {
//     readonly id : number,
//     name : string ,
//     retire :(date : Date) => void

// }

// let employee :Employee = {
    
    
//         id : 1 ,
//          name : "Pratik",
//          retire :(date : Date) => {
//             console.log(date);
//          }
//         };
//     employee.name = "Pratik";



// Union Types 

// function kgToLbs(weight : number | string) : number {
//     if (typeof weight === "number" ){
//          return  weight * 2.2;
//          else
//          return parseInt(weight)*2.2;
//     }


// kgToLbs(10);
// kgToLbs(10);


// Intersection Types

// type Draggable = {
//     drag : () => void
// }
// type Resizable = {
//     resize : () => void
// }

// type UIwidget = Draggable  & Resizable

// let textBox : UIwidget  = {
//     drag : () => {},
//     resize: () => {}
// }



// Literal Types
// Literal(exact,specific)

// type Quantity = 50 | 100
// let quantity :50   | 100 = 100

// type Metric = 'cm' | 'inch'



// Nullable types

// function greet (name : string | null | undefined){
//     if(name)
//         console.log (name.toUpperCase())
//     else
//     console.log("Hii Tanayaaaaa")


// }
// greet(undefined)

// optional chaining 

type Customer = {
    birthday : Date
}
function getCustomer(id :number):Customer | null | undefined{
    return id === 0 ? null :{birthday: new Date()};

}
let customer = getCustomer(0)
//Optional property acess operator

    console.log(customer?.birthday?.getFullYear());
//Optional element acess operator


// if(customers !== null && customers !== undefined)
//     customers?.[0]

// // optional call


// let log : any = null
// log?.('a')



