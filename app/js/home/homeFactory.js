  app.factory('HomeFactory', function() {
      // create a object using constructor function
      var HomeFactory = function() {

      };
      // Attach methods to object
     HomeFactory.goToContact = function() {
        var self = this;
        self.state.go('message');
     };
     HomeFactory.contactSubmit = function() {
        var self = this;
        self.model.contactSubmitted = true;
     }
      // returning the factory object
      return (HomeFactory);
  });