  app.factory('HomeFactory', function() {
      // create a object using constructor function
      var HomeFactory = function() {
      var self = this;  
      var proto = HomeFactory.prototype;     
        // Attach methods to object
       proto.goToContact = function() {
          self.state.go('message');
       };
       proto.contactSubmit = function() {
          self.model.contactSubmitted = true;
       }
      };
      // returning the factory object
      return new HomeFactory();
  });