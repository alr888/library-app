import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  email: attr('string'),
  message: attr('string'),
  
  //isValid: Ember.computed.notEmpty('name'),
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isLong: Ember.computed.gte('message.length',7),
    
});
