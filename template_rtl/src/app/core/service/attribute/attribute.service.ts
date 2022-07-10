import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor() { }
  public usersideMenuresponsive(): void {
    if(window.innerWidth <= 991) {
      $(document).on('click', '.main-nav a', function (e) {
        if ($(this).parent().hasClass('has-submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('submenu')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('submenu');
          $(this).next('ul').slideDown(350);
          $(this).addClass('submenu');
        } else if ($(this).hasClass('submenu')) {
          $(this).removeClass('submenu');
          $(this).next('ul').slideUp(350);
        }
      });
    }
      // Mobile menu sidebar overlay	
      $('body').append('<div class="sidebar-overlay"></div>');
      $(document).on('click', '#mobile_btn', function() {
        $('main-wrapper').toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').addClass('menu-opened test');
        return false;
      });
      
      $(document).on('click', '.sidebar-overlay', function() {
        $('html').removeClass('menu-opened');
        $(this).removeClass('opened');
        $('main-wrapper').removeClass('slide-nav');
      });
      
      $(document).on('click', '#menu_close', function() {
        $('html').removeClass('menu-opened');
        $('.sidebar-overlay').removeClass('opened');
        $('main-wrapper').removeClass('slide-nav');
      });
  }

  public adminsideMenuresponsive(): void {

  }

}
