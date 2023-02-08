'use strict';

// const getCountryData = function(country) {

//     const btn = document.querySelector('.btn-country');
//     const countriesContainer = document.querySelector('.countries');

//     ///////////////////////////////////////
//     // 1st API call
//     // old school
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();


//     request.addEventListener('load', function() {
//             //request is this
//             // console.log(this.responseText);

//         const [data] = JSON.parse(this.responseText);
        
//         //this data displays when the application loads 
//         //data population rounds to the nearest million

//         //the unsassigned version of these values were hard to work with
//         const languages = Object.values(data.languages);
//         const currency = Object.values(data.currencies);
        
//             const html = `
//             <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${languages[0].name}</p>
//             <p class="country__row"><span>${currency[0].name}</span>CUR</p>
//             </div>
//             </article>
//             `;
            
//             countriesContainer.insertAdjacentHTML('beforeend', html);
//             countriesContainer.style.opacity = 1;
//         });
// };
// getCountryData('usa');
// getCountryData('turkey')
// getCountryData('japan');
// // console.log(data);

/////////////////////Welcome to callBack hell

'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data) {
    //the unsassigned version of these values were hard to work with
    const languages = Object.values(data.languages);
    const currency = Object.values(data.currencies);
    
        const html = `
        <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
        <p class="country__row"><span>🗣️</span>${languages[0].name}</p>
        <p class="country__row"><span>${currency[0].name}</span>CUR</p>
        </div>
        </article>
        `;
        
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}
    const renderError = function(msg) {
        countriesContainer.insertAdjacentText('beforeend', msg);
        countriesContainer.style.opacity = 1;
    }
    
    /*
    const getCountryAndNeighbor = function(country) {
        //AJAX call Country 1
        const request = new XMLHttpRequest();
        request.open('GET', `https://restcountries.com/v2/name/${country}`);
        request.send();
        request.addEventListener('load', function() {
                //request is this
                // console.log(this.responseText);
            const [data] = JSON.parse(this.responseText);
            console.log(data);
            //render country 1
            renderCountry(data)
            //get neighbor country
            //destrucutre first element for more than one country object so we put it into an array
            const [neighbour] = data.borders;
            //incase of islands

            
            if(!neighbour) return;
            //if neighbour exists
            //AJAX call Country 2 looking for country codes
            const request2 = new XMLHttpRequest();
            request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
            request2.send();
            
            //lots of nested callbacks in sequence to achieve asynchroncy
            request2.addEventListener('load', function(){
                const data2 = JSON.parse(this.responseText);
                console.log(data2);

                renderCountry(data2, 'neighbour');
            });
        });
    };

    getCountryAndNeighbor('USA');
    //callBack hell 
    setTimeout(() => {
        console.log('1 second has passed');
        setTimeout(() => {
            console.log('2 seconds have passed');
            setTimeout(() => {
                console.log('3 seconds have passed');
                setTimeout(() => {
                    console.log('4 seconds have passed');
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000); */

    // How we use to do it 
    // const request = new XMLHttpRequest();
    //     request.open('GET', `https://restcountries.com/v2/name/${country}`);
    //     request.send();

    //Promises are nicer and easier to read
    const getJSON = function(url, errorMsg = 'Something went Wrong') {
        return fetch(url).then( response => {
            //using the ok property to set these error handling this is for false ok property
        if(!response.ok) 
           //throw keyword immediately kills a function like return
        throw new Error(`${errorMsg} (${response.status})`)
        return response.json()
        });
    };
    // const getCountryData = function(country) {
    //     //country 1
    //     fetch(`https://restcountries.com/v2/name/${country}`)
    //     //handle returned promises with the then method
    //     .then(response => { 
    //         console.log(response);

    //         //using the ok property to set these error handling this is for false ok property
    //        if(!response.ok) 
    //        //throw keyword immediately kills a function like return
    //        throw new Error(`${country} not found (${response.status})`)

    //         return response.json()
    //     })
    //     //then() is available on all the resolved values
    //     //to read the data we can again call the then method again
    //     .then(data => {
    //         renderCountry(data[0]);
    //         const neighbour = data[0].borders[0]

    //         if(!neighbour) return
    //         //country 2
    //         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    //     })
    //     // .then() returns a new promise then we can handle the succes value of that promise
    //     .then(response => { 

    //         return response.json()
    //     })
    //     .then(data => renderCountry(data, 'neighbour'))
    //     .catch(err => {
    //         console.error(`${err} :p`);
    //         renderError(`Something went wrong ${err.message}. Try again!`)
    //     })
    //     .finally(() => {
    //         countriesContainer.style.opacity = 1;
    //     });
    // };    

    // const getCountryData = function(country) {
    //     //country 1
    //     getJSON(`https://restcountries.com/v2/name/${country}`, `${country} not found`)


    //     .then(data => {
    //         renderCountry(data[0]);
    //         const neighbour = data[0].borders[0] 

    //         if(!neighbour) throw new Error(`No neighbour found!`);
    //         //country 2
    //         return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, `${country} not found`);
    //     })

    //     .then(data => renderCountry(data, 'neighbour'))
    //     .catch(err => {
    //         console.error(`${err}`);
    //         renderError(`Something went wrong ${err.message}. Try again!`)
    //     })
    //     .finally(() => {
    //         countriesContainer.style.opacity = 1;
    //     });
    // };

    //     btn.addEventListener('click', function() {
    //         getCountryData('Japan')
    //     });

    //     // getCountryData('dadaf')
    //     getCountryData('usa');

        

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/

// const whereAmI = function(lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//         //ok was false
//         if(!res.ok) throw new Error(`problem with geocoding ${res.status}`)
//         return res.json()
//     })
//     .then(data => {
//          console.log(data);
//          console.log(`You are in ${data.city}, ${data.country}`);


//          return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//         if(!res.ok) throw new Error(`Country not found (${res.status})`)

//         return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} :p`));
// }
// whereAmI(52.208, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//Event loop in practice what prints first?

// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => 
// console.log(res));

// Promise.resolve('resolved promise 2').then(res => {
//     for (let i = 0; i < 1000000; i++) {}
//     console.log(res);
// });

// console.log('Test End');

//Building a Promise
//constructor takes in one takes in one executer function 
//executer passes in two other args for fulfilled state and failed state
//     const lotteryPromise = new Promise(function(resolve, reject) {

//     console.log('lottery draw is happening');
//     setTimeout(function() {
//         if(Math.random() >= 0.5) {
//             //fulfilled promise
//             resolve('You WIN :P');
//         } else {
//             //error construction for new error object
//             reject(new Error('You LOST your money'));
//         }
//     }, 2000)

// });

//     lotteryPromise.then(res => console.log(res)).catch
//     (err => console.error(err));

//     //promisfying setTimeout
//     const wait = function(seconds) {
//         return new Promise(function(resolve){
//             setTimeout(resolve, seconds * 1000);
//         });
//     };

//     //consuming the promise 
//     wait(1)
//         .then(() => {
//         console.log('1 second passed');
//         //return a new promise
//         return wait(1);
//     })
//         .then(() => {
//             console.log('2 seconds passed');
//             //return a new promise
//             return wait(1);
//     })
//         .then(() => {
//             console.log('3 seconds passed');
//             //return a new promise
//             return wait(1);
//     })
//         .then(() => console.log('4 seconds passed'))

//     //immediately make a fulfilled or rejected promise
//     Promise.resolve('abc').then(x => console.log(x));
//     Promise.reject(new Error('Problem!')).catch(x => console.log(x))

    // navigator.geolocation.getCurrentPosition(position => 
    // // console.log(position),
    // err => console.error(err)
    // );
    
    // const getPosition = function() {
    //     return new Promise(function(resolve, reject){
    //         navigator.geolocation.getCurrentPosition(resolve, reject);
    //     });
    // };
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );

    // getPosition().then(pos => console.log(pos));

//     const whereAmI = function() {
//     getPosition().then(pos => {
//         const {latitude: lat, longitude: lng} = pos.coords

//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//     .then(res => {
//         //ok was false
//         if(!res.ok) throw new Error(`problem with geocoding ${res.status}`)
//         return res.json()
//     })
//     .then(data => {
//          console.log(data);
//          console.log(`You are in ${data.city}, ${data.country} bet you wish you were somewhere else huh`);


//          return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//         if(!res.ok) throw new Error(`Country not found (${res.status})`)

//         return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} :p`));
// }

    // btn.addEventListener('click', whereAmI);


    
///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/
    // const wait = function(seconds){
    //     return new Promise(function(resolve){
    //         setTimeout(resolve, seconds * 1000);
    //     });
    // };

    // const imgContainer = document.querySelector('.images');
    // const createImage = function(imgPath) {
    //     return new Promise(function(resolve, reject){
    //         const img = document.createElement('img');
    //         //set source to arg
    //         img.src = imgPath;


    //         img.addEventListener('load', function() {
    //             imgContainer.append(img);
    //             resolve(img);
    //         })
    //         img.addEventListener('load', function() {
    //             imgContainer.append(img);
    //             reject(new Error('image not found'));
    //         })
    //     });
    // };
    // //need this to hide the img so we can add the wait() to the logic
    // let currentImg;

    // createImage('img/img-3.jpg').then(img => {
    //     currentImg = img;
    //     console.log('img1 loaded')
    //     return wait(2)
    // })
    // .then(() => {
    //     currentImg.style.display = 'none';
    //     return createImage('img/img-1.jpg' || 'img/img-2.jpg');
    // })
    // .then(img => {
    //     currentImg = img;
    //     console.log('img2 loaded')
    //     return wait(2)        
    // })
    // .then(() => {
    //     currentImg.style.display = 'none';
    //     return createImage('img/img-1.jpg');
    // })
    // .catch(err => console.error(err));

    //Consuming Promises with async/await syntatic sugar over consuming promises / error handling
    /*
     const getPosition = () => new Promise(function (resolve, reject) {
         navigator.geolocation.getCurrentPosition(resolve, reject);
     });

    const whereAmI = async (country) => {
        try {
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        //reverse Geo coding API
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if(!resGeo.ok) throw new Error(`problem getting location data`)
        const dataGeo = await resGeo.json();

        //same thing as below with async and await keyWords especially await(simplified .this())
        // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))
        //country data
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
        if(!resGeo.ok) throw new Error('Problem getting country')
        //get the json with res.json assign it to data
        const data = await res.json();
        // console.log(data);
        renderCountry(data[0])
            return `You are in ${dataGeo.city}, ${dataGeo.country}`
        } catch(err){
            console.log(`${err} 🖤`)
            renderError(`🖤${err.message}`);

            //reject promise returned from async function
            throw err;
        }
    };
    console.log('1: will get location');
    // const city = whereAmI();
    // console.log(city); //pending promise
    //succesfully return a fulfilled promise
    // whereAmI()
    //     .then(city => console.log(`2: ${city}`))
    //     .catch(err => console.error$(`2: ${err.message} 🖤`))
    //     //use finally to print thrown error at top of ec from queue
    //     .finally(() => console.log('3: finsihed getting location'))
        
    //async() calling other async()'s to return a value between them(IIFE)
        (async function(){
            try {
            const city = await whereAmI();
            console.log(`2: ${city}`)
            }catch(err){
            console.error$(`2: ${err.message} 🖤`)
            }
        })();

    // console.log('FIRST');
    // try {
    //     let y = 1;
    //     const x = 2;
    //     x = 3;
    // }
    // //script doesn't die here(processed for handlings)
    // catch(err) {
    //     alert(err.message);
    // }
    */
/*
    //running promises in parallel with Promise.all()
    const get3Countries = async function(c1, c2, c3) {
        try {
            // const [data1] = await getJSON(
            //     `https://restcountries.com/v2/name/${c1}`
            //     );
            // const [data2] = await getJSON(
            //     `https://restcountries.com/v2/name/${c2}`
            //     );
            // const [data3] = await getJSON(
            //     `https://restcountries.com/v2/name/${c3}`
            //     );
                
            //returns a new promise in an array returns all promises simultaneously
            // Promise.all short circuits when one promise rejects 
            // .all is a combinator function
                const data = await Promise.all([ 
                    getJSON(
                    `https://restcountries.com/v2/name/${c1}`
                    ), getJSON(
                        `https://restcountries.com/v2/name/${c2}`
                    ), getJSON(`https://restcountries.com/v2/name/${c3}`
                        ),
                        ]);
                        //for every item at position zero return it's capital
        console.log(data.map(d => d[0].capital));
        }
        catch(err){
            console.error
        }
    };
    get3Countries('gb', 'japan', 'mexico');//(3) ['Lisbon', 'Ottawa', 'Dodoma']
*/
    /*
    //Promise.race
    //first settled promise has priority
    //only returns one result based on performance
    //short circuits when one of the promises gets settled(even rejected promises)
    (async function() {
        const res = await Promise.race([
            getJSON(`https://restcountries.com/v2/name/italy`),
            getJSON(`https://restcountries.com/v2/name/japan`),
            getJSON(`https://restcountries.com/v2/name/egypt`),
        ]);
        console.log(res[0]);
    })();

    const timeout = function(sec) { //_emptyparam convention
        return new Promise(function(_, reject){
            setTimeout(function() {
                reject(new Error('Request took too long'));
            }, sec * 1000);
        });
    };

    Promise.race([ //!
        getJSON(`https://restcountries.com/v2/name/tanzania`),
        timeout(5) //one second timeout
    ])
    .then(res => console.log(res[0]))
    .catch(err => console.log(err));

    //promise.allSettled ES(2020)
    //never short circuits
    Promise.allSettled([
        Promise.resolve('Success'),
        Promise.resolve('ERROR'),
        Promise.resolve('Another Success'),
    ]).then(res => console.log(res[0]));

    //short circuits on faulty promise
    Promise.all([ //!
        Promise.resolve('Success'),
        Promise.resolve('ERROR'),
        Promise.resolve('Another Success'),
    ]).then(res => console.log(res[0]))
    .catch(err => console.log(err));

    //Promise.any() ES(2021)
    //takes in an array of promises
    // returns the first fulfilled Promise
    //ignores rejected promises
    Promise.any([
        Promise.resolve('Success'),
        Promise.resolve('ERROR'),
        Promise.resolve('Another Success'),
    ]).then(res => console.log(res[0]))
    .catch(err => console.log(err));
    */

    // coding challenge #3
    /* 
    PART 1
    Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
    Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
    PART 2
    1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
    2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
    3. Check out the 'imgs' array in the console! Is it like you expected?
    4. Use a promise combinator function to actually get the images from the array 😉
    5. Add the 'paralell' class to all the images (it has some CSS styles).
    TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
    GOOD LUCK 😀
    */
   /*
        const wait = function(seconds){
        return new Promise(function(resolve){
            setTimeout(resolve, seconds * 1000);
        });
    };

    const imgContainer = document.querySelector('.images');
    const createImage = function(imgPath) {
        return new Promise(function(resolve, reject){
            const img = document.createElement('img');
            //set source to arg
            img.src = imgPath;


            img.addEventListener('load', function() {
                imgContainer.append(img);
                resolve(img);
            })
            img.addEventListener('load', function() {
                imgContainer.append(img);
                reject(new Error('image not found'));
            })
        });
    };
    //need this to hide the img so we can add the wait() to the logic
    let currentImg;

    createImage('img/img-3.jpg').then(img => {
        currentImg = img;
        console.log('img1 loaded')
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-1.jpg' || 'img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('img2 loaded')
        return wait(2)        
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-1.jpg');
    })
    .catch(err => console.error(err));

    const loadNPause = async function() {
        try {
            let img = await createImage('img/img-1.jpg')
            console.log('image 1 loaded')
            await wait (2)
            img.style.display = 'none';

            img = await createImage('img/img-3.jpg')
            console.log('image 2 loaded')
            await wait (2)
            img.style.display = 'none';
        }
        catch(err){
            console.error(err)
        }
    };
    loadNPause();
    //part2 
    const loadAll = async function(imgArr) {
        try{
            const imgs = imgArr.map(async img => await
                createImage(img));
                console.log(imgs)
                const imgEl = Promise.all(imgs)
                console.log(imgEl);
                imgEl.forEach(img => img.classList.add('parallel'));
        }
        catch(err){
            console.error(err)
        };
    };
    loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
    */