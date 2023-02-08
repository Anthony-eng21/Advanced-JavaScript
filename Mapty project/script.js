'use strict';

class Workout {
    //class fields
        //need this to show some marker date data to the user
        date = new Date();
        //not really a unique ID but Randomized enough
        //gets the date.now converts it to an array
        //gets the last 10 characters of the string
        id = (Date.now() + '').slice(-10); 
        clicks = 0;

        constructor(coords, distance, duration) {
            this.coords = coords; //[lat, lng] 
            this.distance = distance; //in Km
            this.duration = duration;//in min
        };

        _setDescription() {
            // prettier-ignore
            const months = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]
        } 
            ${this.date.getDate()}`;
        }

        click() {
            this.clicks++
        }
    };
    
    class Running extends Workout{
        //available on all the instances of ${type}
        type = 'running';

        constructor(coords, distance, duration, cadence){
            super(coords, distance, duration); //initialize parent class variables
            this.cadence = cadence;
            this.calcPace(); //immediately calculates the pace
            this._setDescription();
        };

        calcPace() {
            // pace = min   /  distance
            this.pace = this.duration / this.distance;
            //incase we need this in our code later
            return this.pace;
        };
    }
    
    class Cycling extends Workout {
        //available on all the instances of ${type} 
        type = 'cycling';

        constructor(coords, distance, duration, elevationGain){
            super(coords, distance, duration); //initialize parent class variables
            this.elevationGain = elevationGain;
            // this.type = 'cycling;
            this.calcSpeed();
            //can be inherited from parent class
            this._setDescription();
        };
        calcSpeed() {
            //km/h divide by 60 to return hours else minutes
            this.speed = this.distance / (this.duration / 60);
            return this.speed;
        };
    }
    
    
    const run1 = new Running([39, 12], 5.2, 24, 178);
    const cycling1 = new Cycling([39, 12], 27, 95, 523);
    // console.log(run1, cycling1);
    
    
    //////////////////////////////////////////////////////
    ///////////////////////// App Architecture:
    
    const form = document.querySelector('.form');
    const containerWorkouts = document.querySelector('.workouts');
    const inputType = document.querySelector('.form__input--type');
    const inputDistance = document.querySelector('.form__input--distance');
    const inputDuration = document.querySelector('.form__input--duration');
    const inputCadence = document.querySelector('.form__input--cadence');
    const inputElevation = document.querySelector('.form__input--elevation');
    
// let map, mapEvent; //GV
class App {

        //classfields
        #map
        //2nd arg for setView()
        #mapZoomLevel = 13 
        #mapEvent
        #workouts = [];

       constructor() { //not necessary to have parameters 
            // already have method of input
            this._getPosition();
            //invokes as soon as the application loads

            //Get data from local storage 
            this._getLocalStorage();

            //Attach Event handlers
            // this points to the form not the app{} so we have to bind the method's this 
            // to the same as form(DOM) element's this key word
            form.addEventListener('submit', this._newWorkout.bind(this));

            //change option values between running(cadence) and cycling(elevation)
            //no this keyword so no manual binding
            inputType.addEventListener('change', this._toggleElevationField);

            containerWorkouts.addEventListener('click', this._moveToPopup.bind(this)); 
        };

        _getPosition() {
        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this)
                //this binds to the current object
                //we want the this key word in this method
                //to also be in the _loadMap method which comes
                //from the app object itself
                , function(){
                alert('Could not get you location');
            }
        );
        
     }
        
        _loadMap(position) {
                //get vurrent locaton with geolocation
                //get latitude from browser api, store into object
                const { latitude } = position.coords;
                //get longitude from browser api, store into object
                const { longitude } = position.coords; 
                // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
                
                const coords = [latitude, longitude]; //pass latlng objects into coords 
                    //leaflet library logic(if i need check documentation later https://leafletjs.com/reference.html)
                    //storing the map in to a variable for later logic handling
                    this.#map = L.map('map').setView(coords, this.#mapZoomLevel); //13 is the amount of view we have on the map api
                    // console.log(map);
                    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', { //where the map comes from(load-in tiles styled map)
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    //add tile layer to the map
                    }).addTo(this.#map); 
       
               //handling clicks on map
               //on method comes from the leaflet acts as built-in addEventListener library
               // so map is a special non js object
               //bind for the win: sharing the same this keyWord with a callBack function
               this.#map.on('click', this._showForm.bind(this));
               
               //call this method here because the map has already been loaded 
               this.#workouts.forEach(work => {
                this._renderWorkout(work);
                // this._renderWorkoutMarker(work);
              });
            };
            
         _showForm(mapE) {
            //private field = the event
            this.#mapEvent = mapE; 
            form.classList.remove('hidden');
               //.focus() immediately goes to that specified input onClick
            inputDistance.focus();
        };

        _hideform() {
            //empty inputs
            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
            '';
            
            form.style.display = 'none';
            form.classList.add('hidden');
            setTimeout(() => (form.style.display = 'grid'), 1000)
        }

        _toggleElevationField() {
            //the element we are working withclosest is an inversed querySelctor(looks for parentElems)
            //by toggling each element we now know that either one will either show or be hidden with toggle
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        };

        _newWorkout(e) {
            //helper()
                const validInputs = (...inputs) => //rest parameter(unlimited amount of parameters) returns an array
                //this array every method will only return true if all of them are true 
                inputs.every(inp => Number.isFinite(inp));

             //helper()
                const allPositive = (...inputs) =>
                inputs.every(
                    inp => 
                        inp > 0
                );
            //takes in an arbitrary amount of inputs
            //goes through every input and compares > against 0
            //prevent event default, page refresh on input element's enterKey behavior
            e.preventDefault(); 
                    
            //Get data from the form
            //value of </options>
                const type = inputType.value;
                    // + implicitly converts the String to a Number type
                const distance = +inputDistance.value
                const duration = +inputDuration.value
                //make latitude and longitude based off this object
                const { lat, lng } = this.#mapEvent.latlng; 
                //we want this variable to be accesible everywhere in the global scope 
                let workout;
                

            //Validations
            //if workout Running, create runnning object
                 if(type === 'running') {
            //Check if the data is valid
                    const cadence = +inputCadence.value;
                    //or(||) because we need to find the first valid numbers not 
                    // all faulty values checks if the each is a valid number or not
                if(                        
                    // !Number.isFinite(distance) ||
                    // !Number.isFinite(duration) ||
                    // !Number.isFinite(cadence)
                    //inverting the condition 
                    //if all of these are numbers then validInputs becomes true
                    !validInputs(distance, duration, cadence) ||
                    !allPositive(distance, duration, cadence)
                )
                return alert('Input has to be positive numbers!');
                     
            //array of coords
                workout = new Running([lat, lng], distance, duration, cadence);
                     //store this object(workout) into the #workouts array
              }
                //if activity cycling, create cyling object
                if(type === 'cycling') {
                    //Check if the data is valid
                    const elevation = +inputElevation.value;
                    if(
                        // !Number.isFinite(distance) ||
                        // !Number.isFinite(duration) ||
                        // !Number.isFinite(cadence)
                        //inverting the condition 
                        //if all of these are numbers then validInputs becomes true
                        !validInputs(distance, duration, elevation) ||
                        !allPositive(distance, duration)
                        )
                            return alert('Input has to be positive numbers!');
                //class declaration
                     workout = new Cycling([lat, lng], distance, duration, elevation);
                //store this (objects) into the #workouts array 
                }
        //add new object to workout array
            this.#workouts.push(workout);      
        //render workout on map as marker               
            this._renderWorkoutMarker(workout);                
        //render new workout on the list 
            this._renderWorkout(workout);
        //hide the form and clear the input fields
            this._hideform();
        
        //Set local storage to all workouts
            this._setLocalStorage();
        };
            
        _renderWorkoutMarker(workout) {
            //a lot of this is leaflet(library) logic
            //creates pop up obj and binds it to the marker
                L.marker(workout.coords) //marker code for pop up  with lat, lng declared in this object parameters
                .addTo(this.#map) //adds it to the passed in map argument
                .bindPopup(
                L.popup({
                 maxWidth: 25,
                 minWidth: 100,
            //keeps marker open automatically
                 autoClose: false, 
            //prevents from closing when making a new marker on click
                 closeOnClick: false, 
            //custom popup running/cycling class    
            //dynaically set the custom class color for each type          
                 className: `${workout.type}-popup`, 
                    })
                ) 
            .setPopupContent(
                    `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
                    ) //method(popup) text in marker string
                 .openPopup(); //opens popup method
            }

        _renderWorkout(workout) {
        //let variable to acces it later in this method
        let html = `
          <<li class="workout workout--${workout.type}" data-id="${workout.id}">
           <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${
                    workout.type === 'running' ? '🏃' : '🚴'
                }</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div> 
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>
            `;

        if(workout.type === 'running')
        html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
        </div>
        </li>
                    `;
            
        if (workout.type === 'cycling')
        html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">${workout.elevationGain}</span>
            <span class="workout__value">223</span>
            <span class="workout__unit">m</span>
        </div>
        </li> -->            
        `;
        //afterend adds the element as a siblling at the end of the form 
        //(right after the last form entry as well)
            form.insertAdjacentHTML('afterend', html);
    }
    //e to match the event we're looking for
    _moveToPopup(e) {
        // BUGFIX: When we click on a workout before the map has loaded, we get an error. But there is an easy fix:
        if (!this.#map) return;
        //parent element .workout that we're looking for(event delegation)
        const workoutEl = e.target.closest('.workout')
        //.closest is really good at getting whole child element once rendered
        //important because the li element has the data-id element so we can find the workout 
        //in the workouts array using the id 
        // console.log(workoutEl); //<li>element it self</li>

        //if there is no work out element in the container return(guard clause)
        if(!workoutEl) return;
        //finds the element of the array //work is the param for the workout{}
        const workout = this.#workouts.find(
            work => work.id === workoutEl.dataset.id
            ); 
            // console.log(workout)
        //this is the id of the li item specified
        //in the dom on the li element's dataset attribute

        //take coords from this element and move the map to this 
        //position Leaflet method for this 
            
        // {} object of options 
        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1,
            },
        });
        //using public interface to interact with objects through Workout class
        //the returned JSON Objects don't inherit any properties because they are 
        //completely new objects without a prototype chain
        // workout.click();
    }

    _setLocalStorage() {
        //Localstorage api parameters work like key value's 
        //convert this object to a strong with JSON.stringify  
        //dont use local storage to store lots of data (blocking)
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
        
    }

    _getLocalStorage() {
       const data = JSON.parse(localStorage.getItem('workouts'));

       if(!data) return;

       this.#workouts = data;

       this.#workouts.forEach(work => {
        this._renderWorkout(work);
        // this._renderWorkoutMarker(work);
      });

    }

    Reset() {
        //remove by key
        localStorage.removeItem('workouts');
        location.reload();
    }

};
    

    // new class variable
    const app = new App(); 


    //Original App class before refactoring Concept
//Geo-Location
//     if(navigator.geolocation)
//     navigator.geolocation.getCurrentPosition(
//     function(position){ //get vurrent locaton with geolocation
//         const {latitude} = position.coords;
//         const {longitude} = position.coords;
//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//         const coords = [latitude, longitude];

//         //storing the map in to a variable for later logic handling
//         map = L.map('map').setView(coords, 13); //13 is the amount of view we have on the map api
//        // console.log(map);
//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', { //where the map comes from(load-in tiles styled map)
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         //add tile layer to the map
//         }).addTo(map); 

//         //handling clicks on map
//         //on method comes from the leaflet acts as built-in addEventListener library so map is a special non js object
//         map.on('click', function(mapE){ //has handler and callbackfunciton also 
//             //copy event to global variable
//             mapEvent = mapE; 
//             form.classList.remove('hidden');
//             //.focus() immediately goes to that specified input onClick
//             inputDistance.focus();
//        }); 
//     },
//  function(){
//     alert('Could not get you location');
//    }
// );

// form.addEventListener('submit', function(e) {
//     //prevent event default, page refresh on input enterKey behavior
//     e.preventDefault(); 

//     //clear Input field values assigning everything to an empty string
//     inputDistance.value = 
//     inputDuration.value = 
//     inputCadence.value = 
//     inputElevation.value =
//     '';

//     //displays marker
//     console.log(mapEvent); 
//     const { lat, lng } = mapEvent.latlng; //we can now access the event in the global variable
//     //at this point in the code
//     L.marker({lat, lng}) //marker code for pop ups of our location(s) with lat, lng
//     .addTo(map) //adds it to the passed in map argument
//     .bindPopup(L.popup({
//      maxWidth: 25,
//      minWidth: 100,
//      autoClose: false, //keeps marker open automatically
//      closeOnClick: false, //prevents from closing when making a new marker on click
//      className: 'running-popup', //custom popup class              
//         })
//     ) //creates pop up obj and binds it to the marker
//      .setPopupContent('Workout') //method that popups text in string
//      .openPopup(); //opens popup method
// });
// //change option values between running(cadence) and cycling(elevation)
//      inputType.addEventListener('change', function(e) {
//     //the element we are working with
//     //closest is an inversed querySelctor(looks for parentElems)

//     //by toggling each element we now know that either one will either show or be hidden with toggle
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   });
