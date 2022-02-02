var ImmerseSectionTr = function(element) {
    this.element = element;
    this.media = this.element.getElementsByClassName('js-immerse-section-tr__media');
    this.scrollContent = this.element.getElementsByClassName('js-immerse-section-tr__content');
    // other properties here
    this.scrollingFn = false;
    this.scrolling = false;
    initImmerseSectionTr(this);
  };
  
  function initImmerseSectionTr(element) {
    updateMediaHeight(element); // update height of media element + set padding/margin values
  
    // observe when the element is sticky - update scale value and opacity layer 
    var observer = new IntersectionObserver(immerseSectionTrCallback.bind(element));
    observer.observe(element.media[0]);
  };
  
  function immerseSectionTrCallback(entries) {
    if(entries[0].isIntersecting) {
      if(this.scrollingFn) return; // listener for scroll event already added
      immerseSectionTrScrollEvent(this);
    } else {
      if(!this.scrollingFn) return; // listener for scroll event already removed
      window.removeEventListener('scroll', this.scrollingFn);
      this.scrollingFn = false;
    }
  };
  
  function immerseSectionTrScrollEvent(element) {
    // animate scale value here
  };