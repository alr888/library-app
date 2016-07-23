import Ember from 'ember';
	
export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveMessage(newContact) {
      newContact.save();
	  this.controller.set('responseMessage', 'The message is saved');
	  this.transitionTo('index');
	  this.transitionTo('contact');
    }
  } 
});

