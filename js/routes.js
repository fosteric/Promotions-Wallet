angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.availablePage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/availablePage.html',
        controller: 'availablePageCtrl'
      }
    }
  })

  .state('tabsController.activePage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/activePage.html',
        controller: 'activePageCtrl'
      }
    }
  })

  .state('tabsController.redeemedPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/redeemedPage.html',
        controller: 'redeemedPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('promotionsWallet', {
    url: '/page6',
    templateUrl: 'templates/promotionsWallet.html',
    controller: 'promotionsWalletCtrl'
  })

$urlRouterProvider.otherwise('/page1/page4')


});