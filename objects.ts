// const User = {
//     name : "pratik",

// email : "pratik@lco.dev",
// isActive :true
// }

// function creatUser({name : string , isPaid : boolean }){}

// let newUser = { name:"pratik",isPaid :false,email:"p@p,com"}
// creatUser(newUser)

// function createCourse():{name : string , price : number }{
//     return { name: "reactjs",price:399}

// }


// type User = {
//     name:string;
//     email:string;
//     isActive:boolean;

// }

// function creatUser(user:User){
//      return {name:" ",email:"",isActive:true}
// }
// creatUser({name:" ",email:"",isActive:true})




type User = {
    readonly _id:string
    name:string;
    email:string;
    isActive:boolean;
    creditcardDetails?:number

}
type cardNumber = {
    cardNumber : string;

}

type cardDate = {
    cardDate : string;
    
}

type CardDetails = cardNumber &  cardDate & {
    cvv: number
}


let myUser : User = {
    _id : "12345",
    name: "pratik",
    email:"p@p.com",
    isActive:false
}

myUser.email = "p@gmail.com"
// myUser _id: "aasd"

export {}

