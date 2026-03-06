interface User{
    readonly dbID : number
    email:string,
    userId:number,
    googleId?:string
    // startTrail : () => string

    startTrail():string
    getCoupon(cuponname : string , value : number):number
}

interface User {
    githubToken : string
}
interface Admin extends User {
role : "admin" | "ta" | "learner"
}


const pratik : User = { dbID : 22  ,email:"p@p.com",userId:4564,
role : "admin",
githubToken : "github",



startTrail :() =>{

    return"trail started"
},
getCoupon : (name : "pratik",off:10) => {
    return 10
}
}
pratik.email="p@ph.com"

