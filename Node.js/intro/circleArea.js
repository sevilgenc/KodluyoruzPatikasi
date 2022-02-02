const radius = process.argv.slice(2);
const pi = 3.14

function circleArea(radius){
    const area = radius*radius*pi
    console.log(area)

}
circleArea(radius);
