import { EntityOneToOneField, Model } from '../../../nodes';
import { hasOwnership } from './ownership';

describe('hasOwnership', () => {
  it('should return true if the model has an owner', () => {
    const model = new Model('User');
    const owner = new Model('Owner');
    model.addField(new EntityOneToOneField('owner', owner).setOwnership(true));
    expect(hasOwnership(model)).toBe(true);
  });
  it('should return false if the model has no owner', () => {
    const model = new Model('User');
    expect(hasOwnership(model)).toBe(false);
  });
});
