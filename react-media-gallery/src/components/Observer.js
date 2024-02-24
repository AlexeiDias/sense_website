// Observer.js
const createObserver = () => {
    const options = {
      root: null, // uses the viewport
      rootMargin: '0px',
      threshold: 0.1 // adjust this value according to your needs
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, options);
  
    return observer;
  };
  
  export default createObserver;
  