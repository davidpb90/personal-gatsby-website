// function setup() {
//   createCanvas(600, 1200);
// }

// function draw() {
//   clear();
//   // background(255);
//   let c = color(255, 204, 0);
//   fill(c);
//   ellipse(mouseX, mouseY, 100, 100);
//   if (mouseIsPressed) {
//     var radius = 100;
//     var alpha = 255;
//     for (var i = 0; i < radius; i++) {
//       fill(alpha);
//       ellipse(mouseX, mouseY, i, i);
//       radius -= 5;
//       alpha -= 5;
//     }
//   }
// }


// let circleRadius = 50;
// let maxRadius = 300;
// let isDiffusing = false;
// function setup() {
//     createCanvas(400, 400);
//     // fill(255, 100);
//     noStroke();
// }
// function draw() {
//     clear();
//     // background(255);
//     let c = color(255, 204, 0);
//     fill(c);
//     if (isDiffusing) {
//         circleRadius += 2; // Increase the radius to simulate diffusion
//         if (circleRadius > maxRadius) {
//             circleRadius = maxRadius;
//         }
//     } else {
//         circleRadius -= 2; // Decrease the radius to revert diffusion
//         if (circleRadius < 0) {
//             circleRadius = 0;
//         }
//     }
//     let x = width / 2;
//     let y = height / 2;
//     ellipse(mouseX, mouseY, circleRadius * 2);
// }
// function mousePressed() {
//     isDiffusing = true;
// }
// function mouseReleased() {
//     isDiffusing = false;
// }

// import React from 'react';
// import Sketch from 'react-p5';

// var x = 50;
// var speed = 5;
// function P5Sketch() {
//     const setup = (p5, canvasParentRef) => {
//         p5.createCanvas(500, 400).parent(canvasParentRef);
//     }

//     const draw = (p5) => {
//         p5.frameRate(30);
//         // If we're travelling towards the right or left
//         if (speed > 0) {
//             // If the ball has reached the end of the container or not
//             if (x + 50 < p5.width) {
//                 x += speed
//             } else {
//                 speed = -speed;
//             }
//         } else {
//             if (x - 50 > 0) {
//                 x += speed;
//             } else {
//                 speed = -speed;
//             }
//         }

//         p5.background(255, 120, 20);
//         p5.ellipse(x, 100, 100);
//     }

//     return (
//         <Sketch setup={setup} draw={draw} />
//     )
// }

// export default P5Sketch;

import React from 'react';
import loadable from '@loadable/component';
//import Sketch from 'react-p5';

let circleRadius = 50;
let maxRadius = 300;
let isDiffusing = false;
function P5Sketch() {
    if (typeof window !== 'undefined') {

        const Sketch = loadable(() => import('react-p5'));
        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(1500, 600).parent(canvasParentRef);
        }

        const draw = (p5) => {
            //p5.frameRate(30);
            p5.clear();
            // background(255);
            let c = p5.color(255, 204, 0);
            p5.fill(c);
            if (isDiffusing) {
                circleRadius += 2; // Increase the radius to simulate diffusion
                if (circleRadius > maxRadius) {
                    circleRadius = maxRadius;
                }
            } else {
                circleRadius -= 2; // Decrease the radius to revert diffusion
                if (circleRadius < 0) {
                    circleRadius = 0;
                }
            }
            let x = p5.width / 2;
            let y = p5.height / 2;
            p5.ellipse(p5.mouseX, p5.mouseY, circleRadius * 2);
        }

        const mousePressed = (p5) => {
            isDiffusing = true;
        }
        const mouseReleased = (p5) => {
            isDiffusing = false;
        }

        return (
            <Sketch setup={setup} draw={draw} mousePressed={mousePressed} mouseReleased={mouseReleased}/>
        )
    } else { // if window does not exist

        return null;
    }
}

export default P5Sketch;