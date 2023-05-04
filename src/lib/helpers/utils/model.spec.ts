import { getOwnershipChain } from './model';
import { EntityOneToOneField, Model } from '../../nodes';

describe('getOwnershipChain', () => {
  it('should return the ownership chain', () => {
    const model = new Model('User');
    const owner = new Model('Owner');
    const superOwner = new Model('SuperOwner');
    model.addField(new EntityOneToOneField('owner', owner).setOwnership(true));
    owner.addField(
      new EntityOneToOneField('superOwner', superOwner).setOwnership(true),
    );
    expect(getOwnershipChain(model)).toEqual([
      model.fields[0],
      owner.fields[0],
    ]);
  });
  it('should return an empty array if the model has no owner', () => {
    const model = new Model('User');
    const owner = new Model('Owner');
    const superOwner = new Model('SuperOwner');
    owner.addField(
      new EntityOneToOneField('superOwner', superOwner).setOwnership(true),
    );
    expect(getOwnershipChain(model)).toEqual([]);
  });
  it('should stops in case of circular ownership', () => {
    const model = new Model('User');
    const owner = new Model('Owner');
    const superOwner = new Model('SuperOwner');
    model.addField(new EntityOneToOneField('owner', owner).setOwnership(true));
    owner.addField(
      new EntityOneToOneField('superOwner', superOwner).setOwnership(true),
    );
    superOwner.addField(
      new EntityOneToOneField('user', model).setOwnership(true),
    );
    expect(getOwnershipChain(model)).toEqual([
      model.fields[0],
      owner.fields[0],
      superOwner.fields[0],
    ]);
  });
});
