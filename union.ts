let score:number | string |boolean = 33

score = 44

score = "55"

type User = {
    name : string;
    id   : number

}

type Admin = {
    username : string;
    id   : number
    
}

let pratik : User | Admin = {name : "pratik",id:666}

pratik = { username : "pk",id:666}

// function getDbId (id:number | string){
//     console.log('DB id is :${id}');

// }

getDbId(3)
getDbId("3")


function getDbId (id:number | string){
     if  (typeof id === "string"){
        id.toLowerCase()
     }

}

// Array

const data : number[]=[1,2,3,4]
const data2 : String[]=["1","2","3","4"]
const data3 : (string | number | boolean) []=["1","2","3","4",true]

let pi:3.14 = 3.14


let seatAllotment : "aisle"| "middle"| "window"

seatAllotment = "aisle"




