document.addEventListener("DOMContentLoaded", function() {
  const formGroups = document.querySelectorAll('.form-group');
  const nextBtns = document.querySelectorAll('.nextBtn');
  const finalStep = document.getElementById('finalStep');
  const submitBtn = document.querySelector('button[type="submit"]');
  const fs = require('fs');

  let currentStep = 0;

  function showStep(step) {
    formGroups.forEach((group, index) => {
      if (index === step) {
        group.classList.add('active');
      } else {
        group.classList.remove('active');
      }
    });
    if (step === formGroups.length) {
      submitBtn.style.display = 'block';
      finalStep.style.display = 'block';
    } else {
      submitBtn.style.display = 'none';
      finalStep.style.display = 'none';
    }
  }

  nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      currentStep++;
      showStep(currentStep);
    });
  });

  document.getElementById('multiStepForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const q1Value = document.querySelector('input[name="question1"]:checked').value;
    const q2Value = document.querySelector('input[name="question2"]:checked').value;
    const form = document.getElementById('multiStepForm');
    const profileDiv = document.getElementById('profile');
    form.style.display = 'none';

    console.log("Question 1:", q1Value);
    console.log("Question 2:", q2Value);

    const answerCombo = [q1Value, q2Value];
    displaySillyProfile(answerCombo);
    writeToCSV(answerCombo) 

    function displaySillyProfile(answerCombo) {
      console.log("getSillyProfile");
      // Update the profileDiv innerHTML with the silly profile text
      text = getSillyProfileText(answerCombo);
      console.log("text:", text);
      profileDiv.innerHTML = text;
      profileDiv.style.display = 'block'; // Display the profile div
    }
  
    function getSillyProfileText(answerCombo) {
       console.log("getSillyProfileText");
       console.log("answerCombo:", answerCombo.join("-"));
       switch(answerCombo.join("-")) {
        case "a-a":
          // console.log("You're a vibrant morning person who loves starting the day with a splash of energy.");
          return "You're a vibrant morning person who loves starting the day with a splash of energy.";
          break;
        case "a-b":
          // console.log("You're an adventurous individual who enjoys exploring new flavors and experiences.");
          return "You're an adventurous individual who enjoys exploring new flavors and experiences.";
          break;
        case "a-c":
          // console.log("You're a bold and dynamic personality, always ready to dive into the excitement of the evening.");
          return "You're a bold and dynamic personality, always ready to dive into the excitement of the evening.";
          break;
        case "b-a":
          // console.log("You're a cheerful optimist who brightens up any breakfast table with your sunny disposition.");
          return "You're a cheerful optimist who brightens up any breakfast table with your sunny disposition.";
          break;
        case "b-b":
          // console.log("You're a laid-back soul who savors the leisurely pace of a relaxed lunchtime.");
          return "You're a laid-back soul who savors the leisurely pace of a relaxed lunchtime.";
          break;
        case "b-c":
          // console.log("You're a versatile individual, equally comfortable enjoying a casual lunch or a fancy dinner out on the town.");
          return "You're a versatile individual, equally comfortable enjoying a casual lunch or a fancy dinner out on the town.";
          break;
        case "c-a":
          // console.log("You're a night owl who thrives in the evening, embracing the vibrant nightlife and its endless possibilities.");
          return "You're a night owl who thrives in the evening, embracing the vibrant nightlife and its endless possibilities.";
          break;
        case "c-b":
          return "You're a practical individual who appreciates the simplicity and convenience of a satisfying lunch.";
          break;
        case "c-c":
          return "You're a gourmet connoisseur who delights in the fine dining experience of a luxurious dinner affair.";
          break;
        default:
          // console.log("No profile available for the given answer combo.");
          return "No profile available for the given answer combo.";
      }
    }

    function writeToCSV(data) {
      const csvFilePath = 'existing-file.csv'; // Path to the existing CSV file
      const csvContent = data.map(row => row.join(',')).join('\n'); // Convert data array to CSV format

      // Append data to the existing CSV file
      fs.appendFile(csvFilePath, csvContent, (err) => {
          if (err) {
              console.error('Error writing to CSV file:', err);
          } else {
              console.log('Data appended to CSV file successfully!');
          }
      });
    }
  });
});