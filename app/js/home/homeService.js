//Factory and service are different. Here using a factory 
  app.factory('HomeService', function() {
      var HomeService = function() {
      };
     HomeService.sayHello = function() {
        var self = this;
        self.information = 'హోం సర్వీస్ నీకు దండం పెడ్తుంది';
      };
     HomeService.goToContact = function() {
        console.log('hi');
     };
      return (HomeService);
  });