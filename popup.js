document.getElementById('changeColor').addEventListener('click', function() {
    let chosenColor = document.getElementById('colorPicker').value;
  
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (chrome.scripting) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: (color) => {  // Pass chosenColor as an argument
            document.body.style.backgroundColor = color; 
          },
          args: [chosenColor]     // Pass the value as an argument
        });
      } else {
        console.error("chrome.scripting is not available");
      }
    });
  });