import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  version: attr('string'),
  releaseDate: attr('date')
});