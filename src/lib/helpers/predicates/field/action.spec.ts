import { StringBasicField } from '../../../nodes';
import {
  isFieldAction,
  isFieldActionAuth,
  isFieldActionEmpty,
  isFieldActionOwner,
  isFieldActionPublic,
  isFieldActionSystem,
} from './action';

describe('isFieldActionPublic', () => {
  it('should return true if the action scope is public', () => {
    const field = new StringBasicField('name');
    field.setActionScope('write', 'public');
    expect(isFieldActionPublic('write')(field)).toBe(true);
  });
  it('should return false if the action scope is not public', () => {
    const field = new StringBasicField('name');
    field.setActionScope('write', 'auth');
    expect(isFieldActionPublic('write')(field)).toBe(false);
  });
});

describe('isFieldActionAuth', () => {
  it('should return true if the action scope is auth', () => {
    const field = new StringBasicField('name');
    field.setActionScope('write', 'auth');
    expect(isFieldActionAuth('write')(field)).toBe(true);
  });
  it('should return false if the action scope is not auth', () => {
    const field = new StringBasicField('name');
    field.setActionScope('write', 'system');
    expect(isFieldActionAuth('write')(field)).toBe(false);
  });
});

// owner
describe('isFieldActionOwner', () => {
  it('should return true if the action scope is owner', () => {
    const field = new StringBasicField('name');
    field.setActionScope('write', 'owner');
    expect(isFieldActionOwner('write')(field)).toBe(true);
  });
  it('should return false if the action scope is not owner', () => {
    const field = new StringBasicField('name');
    field.setActionScope('write', 'system');
    expect(isFieldActionOwner('write')(field)).toBe(false);
  });
});

describe('isFieldActionSystem', () => {
  it('should return true if the action scope is system', () => {
    const field = new StringBasicField('name');
    field.setActionScope('write', 'system');
    expect(isFieldActionSystem('write')(field)).toBe(true);
  });
  it('should return false if the action scope is not system', () => {
    const field = new StringBasicField('name');
    field.setActionScope('write', 'auth');
    expect(isFieldActionSystem('write')(field)).toBe(false);
  });
});

describe('isFieldAction', () => {
  it('should return true if the action scope match', () => {
    const scopes = ['public', 'auth', 'owner', 'system'] as const;
    const actions = ['read', 'write'] as const;

    for (const scope of scopes) {
      for (const action of actions) {
        const field = new StringBasicField('name');
        field.setActionScope(action, scope);
        const predicate = isFieldAction(action, scope);
        expect(predicate(field)).toBe(true);
      }
    }
  });
});

describe('isFieldActionEmpty', () => {
  it('should return true if the action scope is empty', () => {
    const field = new StringBasicField('name');
    expect(isFieldActionEmpty('write')(field)).toBe(true);
  });
  it('should return false if the action scope is not empty', () => {
    const field = new StringBasicField('name');
    field.setActionScope('write', 'auth');
    expect(isFieldActionEmpty('write')(field)).toBe(false);
  });
});
