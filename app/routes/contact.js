import Ember from 'ember';

export default Ember.Route.extend({
	

   model() {
    return this.store.createRecord('contact');
  },

   
  actions: {


    routeaction:  function(email, message) {

      const newContact = this.store.createRecord('contact', {
        email: email,
         message: message
      });

     newContact.save();
     
     alert('Saving of the following message is in progress:' + message ); 


    /* 
    newContact.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
        this.set('message', '');
      });
    */


   // saveContact(newContact) {
    //  newContact.save().then(() => this.transitionTo('contact'));
    //},

    //alert('Saving of the following message is in progress: ' + message );
    

  
    }
  }

/*
  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', {
        email: email
      });

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });

    }
  }
	*/
	
});
