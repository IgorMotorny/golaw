class Slider {

    constructor(selector) {
        this.selector = selector;
        this.active = 0;
        this.len = $(this.selector.slider.item).length;
        this.activeItem = $(selector.slider.item).eq(this.active);
        this.init();
        this.bind();
    }

    //sey initial state
    init() {
        // set initial width to slider elements
        this.clearInterval();
        $(this.selector.slider.item).css('height', '');
        this.itemWidth = $(this.selector.slider.obj).width();

        $(this.selector.slider.item).css('width', this.itemWidth);
        $(this.selector.slider.list).css('width', this.itemWidth * this.len);
        $(this.selector.slider.list).css('left', -this.itemWidth * this.active);

        this.time = 10000;
        this.video = document.getElementsByClassName('slider-main__video')[this.active];
        $(this.video).addClass(this.selector.active);
    }

    start() {
        //video
        this.play();
        this.setInterval();
    }

    //animation
    slide() {
        this.activeItem
            .toggleClass(this.selector.hide);
    }

    //play video
    play() {

        this.video.play();
        $(this.selector.timeline.progress).addClass(this.selector.active);

    }

    //increment active
    next() {
        console.log(this);
        if (++this.active >= this.len)
            this.active = 0;

    }

    //decrement active
    prev() {
        if (--this.active < 0)
            this.active = this.len - 1;
    }

    //change slide to the next or prev
    changeSlide(counter) {
        $(this.selector.timeline.progress).removeClass(this.selector.active);

        this.slide();

        $(this.selector.slider.nextImg)
            .eq(this.active)
            .addClass(this.selector.active);



        (counter === this.next) ? this.next(): this.prev();

        this.activeItem = $(this.selector.slider.item)
            .eq(this.active);

        setTimeout(() => {
            $(this.selector.slider.list).css('margin-left', -this.itemWidth * this.active);
            this.slide();
              this.video = document.getElementsByClassName('slider-main__video')[this.active];
        $(this.video).addClass(this.selector.active);
            setTimeout(() => {
                $('.timeline__counter.active').removeClass('active');
                $('.timeline__counter').eq(this.active).addClass('active');

                $(this.video).removeClass(this.selector.active);
                
                this.play();


            }, 1000);

        }, 700);

    }


    bind() {
        $(window).on('resize', () => this.init());
        $(this.selector.slider.next).on('click touch', () => this.changeSlide(this.next));
        $(this.selector.slider.nextImg).on('click touch', () => this.changeSlide(this.next));
        $(this.selector.slider.prev).on('click touch', () => this.changeSlide(this.prev));
        $(this.selector.timeline.more).on('click touch', () => this.clearInterval());
    }

    setInterval() {
        this.interval = setInterval(() => {
            this.changeSlide(this.next)
        }, this.time);

    }

    clearInterval() {
        clearInterval(this.interval);
        $(this.selector.timeline.progress).removeClass(this.selector.active);
    }
}
