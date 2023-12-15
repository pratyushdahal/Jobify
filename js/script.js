function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/* window.onscroll = () => {
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    var header = document.getElementById('scroll-up');
    scrollY <= this.lastScroll ?
      header.style.visibility = 'visible' :
      header.style.visibility = 'hidden';

    // Add background color change
    if (scrollY > 0) {
      var opacity = Math.min(scrollY / 100, 1); // Adjust 100 to control when the background color appears
      var backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Replace '0, 0, 0' with your desired color
      header.style.backgroundColor = backgroundColor;
    } else {
      header.style.backgroundColor = 'transparent';
    }

    this.lastScroll = scrollY;
  } */