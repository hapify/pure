import {Field, FieldAction, Scope} from '../../../nodes';
import { FieldActionScope } from '../../interfaces';
export function isFieldAction<T extends Field, A extends FieldAction, S extends Scope>(
    action: A,
    scope: S,
): (field: T) => field is T & FieldActionScope<A, S> {
  return (field: T): field is T & FieldActionScope<A, S> =>
      field.actionsScopes[action] === scope;
}
export function isFieldActionPublic<T extends Field, A extends FieldAction>(
  action: A,
): (field: T) => field is T & FieldActionScope<A, 'public'> {
  return isFieldAction(action, 'public');
}

export function isFieldActionAuth<T extends Field, A extends FieldAction>(
  action: A,
): (field: T) => field is T & FieldActionScope<A, 'auth'> {
  return isFieldAction(action, 'auth');
}

export function isFieldActionOwner<T extends Field, A extends FieldAction>(
    action: A,
): (field: T) => field is T & FieldActionScope<A, 'owner'> {
  return isFieldAction(action, 'owner');
}

export function isFieldActionSystem<T extends Field, A extends FieldAction>(
  action: A,
): (field: T) => field is T & FieldActionScope<A, 'system'> {
  return isFieldAction(action, 'system');
}

export function isFieldActionEmpty<T extends Field, A extends FieldAction>(
  action: A,
): (field: T) => field is T & FieldActionScope<A, undefined> {
  return (field: T): field is T & FieldActionScope<A, undefined> =>
    !field.actionsScopes[action];
}
