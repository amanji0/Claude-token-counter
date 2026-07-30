document.addEventListener('DOMContentLoaded', () => {
  const enableToggle = document.getElementById('enableToggle');
  const statusIndicator = document.getElementById('statusIndicator');
  const statusText = document.getElementById('statusText');

  // Load initial state
  chrome.storage.local.get(['counterEnabled'], (result) => {
    // Default to true if not set
    const isEnabled = result.counterEnabled !== false; 
    enableToggle.checked = isEnabled;
  });

  // Handle toggle changes
  enableToggle.addEventListener('change', (e) => {
    const isEnabled = e.target.checked;
    chrome.storage.local.set({ counterEnabled: isEnabled });
    
    // Notify content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].url.includes('claude.ai')) {
        chrome.tabs.sendMessage(tabs[0].id, { 
          type: 'TOGGLE_COUNTER', 
          enabled: isEnabled 
        }).catch(() => {
          // Content script might not be injected yet
          console.log('Could not message content script');
        });
      }
    });
  });

  // Check if we're on claude.ai
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && tabs[0].url.includes('claude.ai')) {
      statusIndicator.classList.add('active');
      statusText.textContent = 'Active on claude.ai';
    } else {
      statusIndicator.classList.remove('active');
      statusText.textContent = 'Inactive (navigate to claude.ai)';
    }
  });
});
