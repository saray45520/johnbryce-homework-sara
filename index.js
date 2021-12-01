// //תרגיל 1
// //דרך1 לפנק runcode
const runCode = () => {
    let minNumber =Number(document.getElementById("minnumber").value) 
    let maxNumber =Number(document.getElementById("maxnumber").value) 
    generate7BoomAfterDelayAsync(minNumber, maxNumber)

        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

}
//דרך2 לפנק runcode
const runCode = async () => {
    let minNumber =Number(document.getElementById("minnumber").value) 
    let maxNumber =Number(document.getElementById("maxnumber").value) 
   try {
       let n = await generate7BoomAfterDelayAsync(minNumber, maxNumber)
       console.log("n: " + n)
   } catch (e) {
       console.log("error: " + e)
   }

}
const generate7BoomAfterDelayAsync = (min, max) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * (max - min + 1)) + min


            if (num % 7 === 0 || num % 10 === 7) {
                resolve(num)
            } else {
                reject("is not ")
            }

        }, 1000);
    })
}
//תרגיל2
//דרך 1 ל RUNCODק
const runCode = () => {
    let minNumber = Number(document.getElementById("minnumber").value)
    let maxNumber = Number(document.getElementById("maxnumber").value)
    generate7BoomAfterDelayAsync(minNumber, maxNumber)

        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

}
// //דרך2 לפנק runcode
const runCode = async () => {
    let minNumber = Number(document.getElementById("minnumber").value)
    let maxNumber = Number(document.getElementById("maxnumber").value)
    try {
        let n = await generate7BoomAfterDelayAsync(minNumber, maxNumber)
        console.log("n: " + n)
    } catch (e) {
        console.log("error: " + e)
    }

}
const generate7BoomAfterDelayAsync = (min, max) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * (max - min + 1)) + min

            for (let i = 2; i < num <= num; i++) {
                if (num % i === 0) {
                    flag = 1
                }
            }
            if (flag === 0) {
                resolve("זה מספר ראשוני")
            }
            else {
                reject("זה לא מספר ראשוני")
            }
        }, 1000);
    })
}
//תרגיל 3
//run code דרך 1 לפנק 



const runCode = () => {
    generate7BoomAfterDelayAsync()

        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

}
// //דרך2 לפנק runcode
const runCode = async () => {

    try {
        let n = await generate7BoomAfterDelayAsync()
        console.log("n: " + n)
    } catch (e) {
        console.log("error: " + e)
    }

}
const generate7BoomAfterDelayAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let enimalse = ["עקרב", "עכביש", "ג'וק", "ארנבון", "תוכון", "כלבלב", "חתלתול"]
            let indexEnimalse = Math.floor(Math.random() * enimalse.length);
            if (indexEnimalse <= 3) {
                resolve("חיה חמודה")
            }
            else {
                reject(enimalse[indexEnimalse])
            }
        }, 1000);
    })
}


//תרגיל 4
//RUNCODE דרך 1 לפנק 
const runCode = () => {
    generate7BoomAfterDelayAsync()

        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

}
// //דרך2 לפנק runcode
const runCode = async () => {

    try {
        let n = await generate7BoomAfterDelayAsync()
        console.log("n: " + n)
    } catch (e) {
        console.log("error: " + e)
    }

}
const generate7BoomAfterDelayAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let days = ["שבת", "שישי", "חמישי", "רביעי", "שלישי", "שני", "ראשון"]
            let indexDays = Math.floor(Math.random() * enimalse.length);
            if (days[indexDays] != "שישי" || days[indexDays] != "שבת") {
                resolve("הצלחה")
            }
            else {
                reject(days[indexDays])
            }
        }, 1000);
    })
}
//תרגיל 5
//RUNCODE דרך 1 לפנק 
const runCode = () => {
    let sizeNumber = Number(document.getElementById("size").value)

    generate7BoomAfterDelayAsync(sizeNumber)

        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

}
// //דרך2 לפנק runcode
const runCode = async () => {
    let sizeNumber = Number(document.getElementById("size").value)

    try {
        let n = await generate7BoomAfterDelayAsync(sizeNumber)

        console.log("n: " + n)
    } catch (e) {
        console.log("error: " + e)
    }

}
const generate7BoomAfterDelayAsync = (size) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let arr = []
            let n = Math.floor(Math.random() * enimalse.length);
            if (n % 2 === 0) {
                for (let i = 0; i <= size; i++) {

                    arr.push(Math.floor(Math.random() * enimalse.length))
                }
                resolve(arr)
            }
            else {
                reject("לא ניתן להביא את המערך מהשרת")
            }
        }, 1000);
    })
}


//תרגיל 6
//RUNCODE דרך 1 לפנק 
const runCode = () => {
    generate7BoomAfterDelayAsync()

        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

}
// //דרך2 לפנק runcode
const runCode = async () => {

    try {
        let n = await generate7BoomAfterDelayAsync()

        console.log("n: " + n)
    } catch (e) {
        console.log("error: " + e)
    }

}
const generate7BoomAfterDelayAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let piza = {}
            let n = Math.floor(Math.random() * enimalse.length);
            if (n % 2 === 0) {
                piza = {
                    diameter:getRndInteger=(10, 50),
                    price:getRndInteger=(20, 80),
                    adds:getRndInteger=(0, 4)

                }
                resolve(piza)
            }
            else {
                reject("לא ניתן להביא אובייקט פיצה מהשרת")
            }
        }, 1000);
    })
}

const getRndInteger=(min, max)=> {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

// //תרגיל 7
// //RUNCODE דרך 1 לפנק 
// const runCode = () => {
//     generate7BoomAfterDelayAsync()

//         .then((data) => {
//             console.log(data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })

// }
// // //דרך2 לפנק runcode
// const runCode = async () => {

//     try {
//         let n = await generate7BoomAfterDelayAsync()

//         console.log("n: " + n)
//     } catch (e) {
//         console.log("error: " + e)
//     }

// }
// const generate7BoomAfterDelayAsync = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let piza = {}
//             let n = Math.floor(Math.random() * enimalse.length);
//             if (n % 2 === 0) {
           
//                 resolve(piza)
//             }
//             else {
//                 reject("לא ניתן להביא אובייקט פיצה מהשרת")
//             }
//         }, 1000);
//     })
// }



