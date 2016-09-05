import angular from 'angular';
import Header from './header/header';
import Navbar from './navbar/navbar';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Header.name,
  User.name
]);

export default commonModule;
