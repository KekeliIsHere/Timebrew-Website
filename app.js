document.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.getElementById('menuButton');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');

  menuButton.addEventListener('click', () => {
    sidebar.classList.add('open');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });

  // Optional: Close the sidebar when clicking outside of it
  window.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  const streakCounter = document.getElementById('streakCounter');
  const progressBar = document.getElementById('progressBar');
  const confirmButton = document.getElementById('confirmButton');

  if (confirmButton) {
    let streak = 0;
    confirmButton.addEventListener('click', () => {
  
      streak++;
      streakCounter.textContent = streak;


      progressBar.style.width = '0%';
      setTimeout(() => {
        progressBar.style.width = '100%';
      }, 100);
    });
  }

  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  const chatForm = document.getElementById('chat-form');
  const chatBox = document.getElementById('chat-box');

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user input
    const userInput = document.getElementById('user-input').value;

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Clear input field
    document.getElementById('user-input').value = '';

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = document.createElement('div');
      aiMessage.classList.add('ai-message');
      aiMessage.textContent = `TimeBrew: I'm here to help with "${userInput}"!`;
      chatBox.appendChild(aiMessage);

      // Scroll to the bottom of the chat box
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  });
});