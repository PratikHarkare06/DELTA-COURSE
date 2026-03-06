

// function logValue(x: Date | string) {
//     if (x instanceof Date) {
//       console.log(x.toUTCString());
//     } else {
//       console.log(x.toUpperCase());
//     }
//   }

// type Fish = {swim : () =>  void};
// type Bird = {Fly : () =>  void};

// function isFish(pet : Fish | Bird):pet is Fish{
//   return  (pet as Fish ).swim ! == undefined
// }

// function getFood(pet : Fish | Bird){
//     if(isFish(pet)){
//         pet
//         return"Fish food"
//     }else {
//         pet
//         return"Bird food"
//     }


//     }






// Descriminated  Unions and Exhaustiveness checking with never


interface Circle {
    kind : "circle"
    radius : number
}

interface Square {
    kind : "square"
    side : number
}

interface Rectangle {
    kind : "rectangle"
    length: number,
    width :number
}

 type Shape = Circle |Square | Rectangle

function getTrueShape (shape : Shape) {
    if (shape.kind === "circle"){
        return Math.PI * shape.radius ** 2

    }
    return shape.side  * shape.side 
}

function getArea(shape:Shape){
    switch (shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

            case "square":
            return  shape.side * shape.side

            
            case "rectangle":
            return  shape.length * shape.width

            default:
                const _defaultforshape: never = shape
                return  _defaultforshape
                 

    }
}