window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('scrollUp').style.display = 'block';
    } else {
      document.getElementById('scrollUp').style.display = 'none';
    }
  }
 document.getElementById('scrollUp').addEventListener('click', function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  });