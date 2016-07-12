import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  email: attr('string'),
  message: attr('string'),
  
  isDisabled: true,
  
   //isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

   isValid: Ember.computed.match('email', /^.+@.+\..+$/),

   
   isLong: Ember.computed.gte('message.length',7),
   
   /*
     actions: {

    saveMessage() {
      
	  const email = this.get('email');
      const message = this.get('message');
	  
      const newContact = this.store.createRecord('contact', { email: email, message: message });
      newContact.save();
	  
	  alert(`Saving of the following message is in progress: ${this.get('message')}`);
      this.set('responseMessage', `Thank you! Your  email address: ${this.get('emailAddress')} and message: ${this.get('message')} was sent.`);
      
	  
	  
	  //*Disabled for Lesson 4*this.set('emailAddress', '');
	  //*Disabled for Lesson 4*this.set('message', '');
    }
  }
   */

 
   //ALR isTemp: Ember.computed.and('isValid','isLong'),
   
   //contact.set('email', ''),
   //.set('message', ''),

   //isValid: Ember.computed.notEmpty('name'),
  // isValid: Ember.computed.notEmpty('name'),
   
    //isDisabled: Ember.computed.not('isTemp'),  
  
  
});
