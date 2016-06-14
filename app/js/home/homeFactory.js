  app.factory('HomeFactory', function() {
      // create a object using constructor function
      var HomeFactory = function() {
      var self = this;       
        // Attach methods to object
       self.goToContact = function() {
          self.state.go('message');
       };
       self.contactSubmit = function() {
          self.model.contactSubmitted = true;
       }
      };
      // returning the factory object
      return new HomeFactory();
  });