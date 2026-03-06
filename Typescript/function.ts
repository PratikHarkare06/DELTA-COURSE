function addTwo(num : number): number {

    return num + 2
    // return "hello"

}

function getUpper (val:string){
    return val.toUpperCase()
}

function signUpUser(name : string ,email:string,isPaid : boolean){}

let loginUser = (name :string,email : string,isPaid : boolean = false) => {}


 let myValue = addTwo(5)
getUpper("Pratik")

signUpUser("Pratik","Pratik@dev.com,",false)
loginUser("P","P@P.com")



// Function part 2

// function getValue(myVal:number){
//     if (myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


// Using Arrow function
const getHello = (s : string ):string  => {
    return ""
}

const heros = [ "thor","spiderman","ironman"]

heros.map(hero =>  {
    return 'hero is ${hero}'

})

function consoleError(errmsg : string): void{

    console.log(errmsg);
}

function handleError(errmsg : string): void{

    console.log(errmsg);
}




export {}