class Timeline {
    constructor(count) {
        this.count = count;
        this.progress = 0;
        this.setLineWidth($(window).width());
        this.bind();
    }   

    setLineWidth(windowWidth) {
        if (windowWidth > 768) {
            this.lineWidth = (windowWidth > fixedWidth) ? 50 : 33.33;
        }
    }

    counter() {
        this.progress += this.lineWidth;

        if (this.progress > 100)
            this.progress = 0;
    }

    getWidth(){
        return  this.progress ? this.progress : 0;
    }

    bind() {
        $(window).on('resize', () => {
            this.progress = 0;
            this.setLineWidth($(window).width());
        });
    }
}
