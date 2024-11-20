// Function to simulate emotion analysis
function analyzeEmotion() {
    const userInput = document.getElementById('user-input').value;
    const resultDiv = document.getElementById('result');
    
    if (!userInput.trim()) {
        resultDiv.style.display = 'none';
        alert("Please enter a sentence to analyze.");
        return;
    }

    // Simulated emotion response (replace with actual model integration)
    const emotions = ["positive", "neutral", "negative"];
    const emotion = emotions[Math.floor(Math.random() * emotions.length)];

    resultDiv.textContent = `Emotion: ${emotion.charAt(0).toUpperCase() + emotion.slice(1)}`;
    resultDiv.className = `result ${emotion}`;
    resultDiv.style.display = 'block';
}

//ATOM polygon

// Initialize particles.js with custom settings
particlesJS("particles-js", {
    particles: {
        number: {
            value: 90, // Number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        shape: {
            type: "circle", // Shape of particles
            stroke: {
                width: 0,
                color: "#ffffff"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "repulse" // Particle effect on hover (repulse or attract)
            },
            onclick: {
                enable: true,
                mode: "push" // Click effect (add more particles on click)
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});


// FIREFLIES

// particlesJS("particles-js", {
//     particles: {
//         number: {
//             value: 100,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         shape: {
//             type: "circle", // You can change it to "edge" or "triangle" for different effects
//         },
//         opacity: {
//             value: 0.8,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 0.5,
//                 opacity_min: 0.1,
//                 sync: false
//             }
//         },
//         size: {
//             value: 3,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 3,
//                 size_min: 0.1,
//                 sync: false
//             }
//         },
//         line_linked: {
//             enable: false // Disable lines for a firefly-like effect
//         },
//         move: {
//             enable: true,
//             speed: 2,
//             direction: "random", // Random direction for particles
//             random: true,
//             straight: false,
//             out_mode: "out",
//             bounce: false
//         }
//     },
//     interactivity: {
//         detect_on: "window",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "repulse"
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push"
//             }
//         }
//     },
//     retina_detect: true
// });


//BUBBLE EFFECT

// particlesJS("particles-js", {
//     particles: {
//         number: {
//             value: 50,
//             density: {
//                 enable: true,
//                 value_area: 1000
//             }
//         },
//         shape: {
//             type: "circle",
//         },
//         opacity: {
//             value: 0.7,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 1,
//                 opacity_min: 0.1,
//                 sync: false
//             }
//         },
//         size: {
//             value: 10,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 5,
//                 size_min: 5,
//                 sync: false
//             }
//         },
//         line_linked: {
//             enable: false
//         },
//         move: {
//             enable: true,
//             speed: 1,
//             direction: "none",
//             random: true,
//             straight: false,
//             out_mode: "out",
//             bounce: false
//         }
//     },
//     interactivity: {
//         detect_on: "window",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "repulse"
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push"
//             }
//         }
//     },
//     retina_detect: true
// });

//DYNAMIC POLYGONS

// particlesJS("particles-js", {
//     particles: {
//         number: {
//             value: 50,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         shape: {
//             type: "polygon",
//             stroke: {
//                 width: 0,
//                 color: "#ffffff"
//             },
//             polygon: {
//                 nb_sides: 3 // Triangular particles
//             }
//         },
//         opacity: {
//             value: 0.5,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 2,
//                 opacity_min: 0.1,
//                 sync: false
//             }
//         },
//         size: {
//             value: 5,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 3,
//                 size_min: 0.1,
//                 sync: false
//             }
//         },
//         line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#ffffff",
//             opacity: 0.5,
//             width: 1
//         },
//         move: {
//             enable: true,
//             speed: 6,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false
//         }
//     },
//     interactivity: {
//         detect_on: "window",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "repulse"
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push"
//             }
//         }
//     },
//     retina_detect: true
// });


//STAR IN SKY

// particlesJS("particles-js", {
//     particles: {
//         number: {
//             value: 200,
//             density: {
//                 enable: true,
//                 value_area: 1200
//             }
//         },
//         shape: {
//             type: "circle",
//         },
//         opacity: {
//             value: 0.8,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 0.3,
//                 opacity_min: 0.1,
//                 sync: false
//             }
//         },
//         size: {
//             value: 1,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 0.5,
//                 size_min: 0.1,
//                 sync: false
//             }
//         },
//         line_linked: {
//             enable: false
//         },
//         move: {
//             enable: true,
//             speed: 0.3,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false
//         }
//     },
//     interactivity: {
//         detect_on: "window",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "repulse"
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push"
//             }
//         }
//     },
//     retina_detect: true
// });

//HOLOGRAPHIC MESH

// particlesJS("particles-js", {
//     particles: {
//         number: {
//             value: 100,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         shape: {
//             type: "circle",
//         },
//         opacity: {
//             value: 0.6,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 0.2,
//                 opacity_min: 0.1,
//                 sync: false
//             }
//         },
//         size: {
//             value: 8,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 2,
//                 size_min: 3,
//                 sync: false
//             }
//         },
//         line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#00FF99",
//             opacity: 0.2,
//             width: 1
//         },
//         move: {
//             enable: true,
//             speed: 2,
//             direction: "none",
//             random: true,
//             straight: false,
//             out_mode: "out",
//             bounce: false
//         }
//     },
//     interactivity: {
//         detect_on: "window",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "grab"
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push"
//             }
//         }
//     },
//     retina_detect: true
// });
