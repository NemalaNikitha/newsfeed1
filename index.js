import angular from "angular";
import uiRouter from "angular-ui-router";
import LoginController from "./registration.controller";
import route from "./registration.route";
var loginComponent=angular.module("Newsfeed.registration",[uiRouter])
.config(RegistrationRoute)
.controller("RegistrationController",RegistrationController)
.name;
export default registrationComponent;