 (function($) {


     function Select(element) {
         this.selector = {
             checked: '.select__checked',
             input: '.select__input',
             icon: '.select__icon',
             list: '.select__list',
             item: '.select__item',
             active: 'active'
         }

         this.obj = {
             root: element,
             checked: element.find(this.selector.checked),
             input: element.find(this.selector.input),
             icon: element.find(this.selector.icon),
             list: element.find(this.selector.list),
             item: element.find(this.selector.item)
         }

         this.state = false;
         this.getHeight();
         this.bind();
     }

     Select.prototype.getHeight = function() {
         this.height = this.obj.item.outerHeight() * this.obj.item.length;
     }

     // open and close select list
     Select.prototype.changeViev = function() {
         if (this.state) {
             this.obj.list.css('height', this.height);
             this.obj.icon.addClass(this.selector.active);
         } else {
             this.obj.list.css('height', 0);
             this.obj.icon.removeClass(this.selector.active);
         }
     }

     // determinate select is open or not
     Select.prototype.changeState = function() {
         this.state = this.state ? false : true;
         this.changeViev();
     }

     // processing focus on select
     Select.prototype.focus = function(e) {
         e.preventDefault();
         this.changeState();
     }

     //set select value
     Select.prototype.setValue = function(newValue) {

         if (this.value === newValue)
             return;

         this.value = newValue;

         // set value in the viev 
         this.obj.checked.text(this.value);
         // then in the input
         this.obj.input.val(this.value);
         // close list
         this.changeState();

     }

     // get item value
     Select.prototype.getValue = function(e) {
         let item = $(e.target);

         if (item.is(this.selector.item)) {
             let text = item.text();
             this.setValue(text);
         }

     }

     Select.prototype.bind = function(e) {
         let self = this;

         self.obj.checked.on('click', (e) => { this.focus(e) });
         self.obj.item.on('click', (e) => { this.getValue(e) });
     }

     $.fn.select = function() {

         this.each(function() {
             new Select($(this));
         });

         return this;
     }

 })(jQuery);
