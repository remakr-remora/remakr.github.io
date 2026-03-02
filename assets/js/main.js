document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navTrigger = document.querySelector('.nav-trigger');
  if (navTrigger) {
    navTrigger.addEventListener('change', function() {
      document.body.classList.toggle('nav-open', this.checked);
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // FAQ toggle (if present on page)
  const faqQuestions = document.querySelectorAll('.faq-question');
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isOpen = answer.style.maxHeight;
        
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(item => {
          if (item !== answer) {
            item.style.maxHeight = null;
            item.previousElementSibling.classList.remove('active');
          }
        });
        
        // Toggle current answer
        if (isOpen) {
          answer.style.maxHeight = null;
          this.classList.remove('active');
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
          this.classList.add('active');
        }
      });
    });
  }
});
