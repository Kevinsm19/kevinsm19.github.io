document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    const videoContainer = document.querySelector('.video-container');
    const photoContainer = document.querySelector('.photo-container');
    const paragraphs = document.querySelectorAll('p');
    const images = document.querySelectorAll('img');
  
    setTimeout(function() {
      content.style.opacity = '1';
    }, 500);
  
    setTimeout(function() {
      videoContainer.style.opacity = '1';
    }, 1500);
  
    setTimeout(function() {
      photoContainer.style.opacity = '1';
    }, 2500);
  
    paragraphs.forEach(function(paragraph, index) {
      setTimeout(function() {
        paragraph.style.opacity = '1';
      }, (index + 1) * 1000);
    });
  
    images.forEach(function(image, index) {
      setTimeout(function() {
        image.style.opacity = '1';
      }, (index + 1) * 1000);
    });
  });
  
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  