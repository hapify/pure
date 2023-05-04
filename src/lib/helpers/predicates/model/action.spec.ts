import { Model } from '../../../nodes';
import {
  isModelAction,
  isModelActionAuth,
  isModelActionOwner,
  isModelActionPublic,
  isModelActionSystem,
} from './action';

describe('isModelActionPublic', () => {
  it('should return true if the action scope is public', () => {
    const model = new Model('User');
    model.setActionScope('create', 'public');
    expect(isModelActionPublic('create')(model)).toBe(true);
  });
  it('should return false if the action scope is not public', () => {
    const model = new Model('User');
    model.setActionScope('create', 'auth');
    expect(isModelActionPublic('create')(model)).toBe(false);
  });
});

describe('isModelActionAuth', () => {
  it('should return true if the action scope is auth', () => {
    const model = new Model('User');
    model.setActionScope('create', 'auth');
    expect(isModelActionAuth('create')(model)).toBe(true);
  });
  it('should return false if the action scope is not auth', () => {
    const model = new Model('User');
    model.setActionScope('create', 'system');
    expect(isModelActionAuth('create')(model)).toBe(false);
  });
});

describe('isModelActionOwner', () => {
  it('should return true if the action scope is owner', () => {
    const model = new Model('User');
    model.setActionScope('create', 'owner');
    expect(isModelActionOwner('create')(model)).toBe(true);
  });
  it('should return false if the action scope is not owner', () => {
    const model = new Model('User');
    model.setActionScope('create', 'system');
    expect(isModelActionOwner('create')(model)).toBe(false);
  });
});

describe('isModelActionSystem', () => {
  it('should return true if the action scope is system', () => {
    const model = new Model('User');
    model.setActionScope('create', 'system');
    expect(isModelActionSystem('create')(model)).toBe(true);
  });
  it('should return false if the action scope is not system', () => {
    const model = new Model('User');
    model.setActionScope('create', 'auth');
    expect(isModelActionSystem('create')(model)).toBe(false);
  });
});

// isModelAction
describe('isModelAction', () => {
  it('should return true if the action scope match', () => {
    const scopes = ['public', 'auth', 'owner', 'system'] as const;
    const actions = [
      'create',
      'read',
      'update',
      'delete',
      'search',
      'count',
    ] as const;

    for (const scope of scopes) {
      for (const action of actions) {
        const model = new Model('User');
        model.setActionScope(action, scope);
        expect(isModelAction(action, scope)(model)).toBe(true);
      }
    }
  });
});
