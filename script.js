// Function to get user's name
var username = getname();

window.onload = function() {
    document.getElementById('welcomeusername').textContent = "Welcome " + username + "!";
    document.getElementById('error').textContent = "";  // Clear the error message
}

function getname() {
    var username = null;
    while (username === null || username.trim() === "") {
        username = prompt("Please enter your Name:");
        if (username === null) {
            // Handle if user cancels the prompt
            document.getElementById('error').textContent = "Error: No name entered";
            break; // Exit the loop if the prompt is canceled
        } else if (username.trim() === "") {
            // Display error message if the entered name is empty
            document.getElementById('error').textContent = "Error: No name entered";
        }
    }
    return username;
}


// Creating Project buttons
// Sample array of button labels
const PbuttonLabels = ["Project X", "Project NDI", "Project CAM"];

// Variable to store the clicked button's label
let clickedProjectButton = null;

// Function to create buttons from the array
function createPButtons() {
    const PbuttonContainer = document.getElementById('Pbutton-container');

    // Clear existing buttons
    PbuttonContainer.innerHTML = '';

    // Create buttons from the array
    PbuttonLabels.forEach(label => {
        const projectbutton = document.createElement('button');
        projectbutton.textContent = label;
        projectbutton.classList.add('projectbutton'); // Add CSS class for styling
        projectbutton.addEventListener('click', () => {
               // Remove the "clicked" class from all buttons
               document.querySelectorAll('.projectbutton').forEach(button => {
                button.classList.remove('clicked');
                });
                // Store the clicked button's label
                clickedProjectButton = label;
                // Apply the "clicked" style to the clicked button
                projectbutton.classList.add('clicked');
                });
                PbuttonContainer.appendChild(projectbutton);
    });
}

// Call the function to create buttons initially
createPButtons();



// Creating Activity buttons
// Sample array of button labels
const buttonLabels = ["Planning", "Development", "Engagement", "Enhancement", "Service Journey"];

// Variable to store the clicked button's label
let clickedActivityButton = null;

// Function to create buttons from the array
function createButtons() {
    const buttonContainer = document.getElementById('button-container');

    // Clear existing buttons
    buttonContainer.innerHTML = '';

    // Create buttons from the array
    buttonLabels.forEach(label => {
        const activitybutton = document.createElement('button');
        activitybutton.textContent = label;
        activitybutton.classList.add('activitybutton'); // Add CSS class for styling
        activitybutton.addEventListener('click', () => {
            // Remove the "clicked" class from all buttons
               document.querySelectorAll('.activitybutton').forEach(button => {
                button.classList.remove('clicked');
                });
                // Store the clicked button's label
                clickedActivityButton = label;
                // Apply the "clicked" style to the clicked button
                activitybutton.classList.add('clicked');
                                   
        });
        buttonContainer.appendChild(activitybutton);
    });
}

// Call the function to create buttons initially
createButtons();



// Function to get current time
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const hoursStr = hours.toString().padStart(2);
    const timeString = `${hoursStr}:${minutes} ${ampm}`;
    document.getElementById('currenttime').textContent = timeString;
    return timeString;
}


//Update Expected End Time
function addTime() {
    const workhrs = parseInt(document.getElementById('inputhrs').value) || 0; // Get hours input value, default to 0 if not provided
    const workmins = parseInt(document.getElementById('inputmins').value) || 0; // Get hours input value, default to 0 if not provided

// Get current time
    const currentTime = new Date();

// Add hours and minutes to current time
    currentTime.setHours(currentTime.getHours()+workhrs );
    currentTime.setMinutes(currentTime.getMinutes()+workmins);

// Display the result
        // Define options for 12-hour format with AM/PM
        var options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        var formattedTime = currentTime.toLocaleTimeString('en-US', options);
        document.getElementById('endtime').textContent = formattedTime;
  }


//create a timer function
    let timerInterval;
    let timerseconds = 0;
    let timerminutes = 0;
    let timerhours=0;

    function updateTimer() {
        timerseconds++;

     if (timerseconds === 60) {
         timerseconds = 0;
         timerminutes++;
     }
     if (timerminutes === 60) {
         timerminutes = 0;
         timerhours++;
     }

     const timerDisplay = document.getElementById('duration');
     timerDisplay.textContent = timerhours.toString().padStart(2, '0') + 'hrs ' +timerminutes.toString().padStart(2, '0') + 'mins ' + timerseconds.toString().padStart(2, '0') + 's';
     return timerDisplay;
    }

    function startTimer() {
    // Reset timer values
    timerseconds = 0;
    timerminutes = 0;
    timerhours = 0;

    // Clear any existing interval to prevent multiple timers running simultaneously
    if (timerInterval) {
     clearInterval(timerInterval);
     timerInterval = null;
      }
     // Update the timer every second
     timerInterval = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
           
        var actualendtime = new Date();

        var endtimeoptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true

        }
        var formattedendtime = actualendtime.toLocaleTimeString('en-US', endtimeoptions);
        document.getElementById('endtime').textContent = formattedendtime;
        return formattedendtime;   
     

        }
      

    function startbutton() {
    updateTime();
    addTime();
    startTimer();
    }

    function endbutton() {
    let formattedendtime = stopTimer();
    let timeString = updateTime();
    let timerDisplay = updateTimer();
  
    
    alert("\nTime Tracked: " + timerDisplay.textContent + "\nStart Time: " + timeString + "\nEnd Time: " + formattedendtime + "\nOfficer Name: " + username + "\nProject: " + clickedProjectButton + "\nActivity: " + clickedActivityButton);

    }