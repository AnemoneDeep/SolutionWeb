let a = 1;
class Point {

    toString() {
        console.info('test point');
    }
}

class ColorPoint extends Point {

    toString() {
        console.log('this is a1');
    }

}
let c = new ColorPoint();

let b = {
    a,c
}