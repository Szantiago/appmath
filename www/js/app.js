
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.logaritmo', {
      url: '/logaritmo',
      views: {
        'menuContent': {
          templateUrl: 'templates/logaritmo.html'
        }
      }
    })
    .state('app.potencia', {
        url: '/potencia',
        views: {
          'menuContent': {
            templateUrl: 'templates/potencia.html'
          }
        }
      })
      .state('app.radicacion', {
          url: '/radicacion',
          views: {
            'menuContent': {
              templateUrl: 'templates/radicacion.html'
            }
          }
        })
        .state('app.inicio', {
            url: '/inicio',
            views: {
              'menuContent': {
                templateUrl: 'templates/inicio.html'
              }
            }
          })
          .state('app.ajustes', {
              url: '/ajustes',
              views: {
                'menuContent': {
                  templateUrl: 'templates/ajustes.html'
                }
              }
            })
            .state('app.acercade', {
                url: '/acercade',
                views: {
                  'menuContent': {
                    templateUrl: 'templates/acercade.html'
                  }
                }
              })
            .state('app.ejemplorad', {
                url: '/ejemplorad',
                views: {
                  'menuContent': {
                    templateUrl: 'templates/ejemplorad.html'
                  }
                }
              })
              .state('app.ejemplopot', {
                  url: '/ejemplopot',
                  views: {
                    'menuContent': {
                      templateUrl: 'templates/ejemplopot.html'
                    }
                  }
                })
                .state('app.ejemplolog', {
                    url: '/ejemplolog',
                    views: {
                      'menuContent': {
                        templateUrl: 'templates/ejemplolog.html'
                      }
                    }
                  })
                  .state('app.jugar', {
                      url: '/jugar',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/jugar.html'
                        }
                      }
                    })
                    



  // if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/app/inicio');
});
