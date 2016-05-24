//Factory and service are different. Here using a factory 
  app.factory('HomeService', function() {
      var HomeService = function() {
      };
      HomeService.callRk = function() {
        var self = this;
        self.information = "So instead of using scope, attaching variables to the service, this instance directly";
      };
      return (HomeService);
  });
