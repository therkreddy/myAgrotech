  app.factory('HomeFactory', function() {
      // create a object using constructor function 
      var HomeFactory = function() {
      };
      // Attach methods to object
     HomeFactory.sayHello = function() {
        var self = this;
        self.information = 'హోం సర్వీస్ నీకు దండం పెడ్తుంది';
      };
     HomeFactory.goToContact = function() {
        console.log('hi');
     };
      // returning the factory object
      return (HomeFactory);
  });