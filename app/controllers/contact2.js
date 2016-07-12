//app/controllers/contact.js
import Ember from 'ember';

export default Ember.Controller.extend({
	
	isTemp: false,
	isDisabled: true,
	
	
	
	emailAddress: '',
	message: '',
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

	
    isLong: Ember.computed.gte('message.length',7),

 
    isTemp: Ember.computed.and('isValid','isLong'),

   
    isDisabled: Ember.computed.not('isTemp'),  
  
  
  actions: {

    saveMessage() {
      
	  const email = this.get('emailAddress');
      const message = this.get('message');
	  
      const newContact = this.store.createRecord('contact', { email: email, message: message });
      newContact.save();
	  
	  alert(`Saving of the following message is in progress: ${this.get('message')}`);
      this.set('responseMessage', `Thank you! Your  email address: ${this.get('emailAddress')} and message: ${this.get('message')} was sent.`);
      
	  
	  
	  this.set('emailAddress', '');
	  this.set('message', '');
    }
  }

  
  
	
});
