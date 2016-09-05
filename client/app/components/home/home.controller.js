class HomeController {
  constructor() {
    this.name = 'home';
    this.showNavbar = true;
  }

  toggleNavbar() {
    this.showNavbar != this.showNavbar;
  }
}

export default HomeController;
