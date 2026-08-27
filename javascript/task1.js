
function areaOfCircle(radius){
    let area = Math.PI * Math.pow(radius, 2)
    console.log(area)
}

let radius = 5
areaOfCircle(radius)

let url = "https://phegon.com/course?id=12332" ;

let idfetch = url.split("id=");

let id = idfetch[1];

console.log(id)