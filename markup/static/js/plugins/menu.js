  const fixedWidth = 1260;

  class Menu {

      constructor(obj, list, width) {
          // needs to stop bubling
          this.root = $(obj);
          // object with elements 
          // like getClick: showAfterClick
          // getClick is id
          // showAfterClick is class
          this.fixedWidth = width ? width : fixedWidth;
          this.list = list;
          this.bind();
          this.init();
      }



      //find target in the list object
      getTarget(target) {

          while (target !== document) {

              if (this.list[target.id])
                  return target;

              target = target.parentNode;
          }

      }

      // change active element
      changeState(newActive) {
        let breadcrumbs;
          if (this.active) {
              breadcrumbs = this.active.link.attr('data-breadcrumbs');
              if (breadcrumbs)
                  $(breadcrumbs).removeClass('active');
          }



          $.each(this.active, function() {
              $(this).removeClass('active');
          });

          this.active = newActive;

          $.each(this.active, function() {
              $(this).addClass('active');
          }); 

          breadcrumbs = this.active.link.attr('data-breadcrumbs');
          console.log(breadcrumbs);
          if (breadcrumbs)
              $(breadcrumbs).addClass('active');
      }


      click(e) {
          //only desctop
          if ($(window).width() < this.fixedWidth) return;

          let element = this.getTarget(e.target);

          if (!element) return;

          e.preventDefault();

          let active = {
              link: $(element),
              item: $(this.list[element.id])
          };

          this.changeState(active);
      }

      init() {

          for (let key in this.list) {
              let active = {
                  link: $('#' + key),
                  item: $(this.list[key])
              }
              this.changeState(active);
              break;

          }

      }

      bind() {
          let self = this;
          this.root.on('click', (e) => this.click(e));
      }


  }
