import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-header-response', 'Unit | Serializer | MessageHeader_Response', {
  needs: [
    'serializer:message-header-response',
    'model:reference',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});