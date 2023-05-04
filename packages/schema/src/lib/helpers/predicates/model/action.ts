import { Model, ModelAction, Scope } from '../../../nodes';
import { ModelActionScope } from '../../interfaces';

export function isModelAction<
  T extends Model,
  A extends ModelAction,
  S extends Scope
>(action: A, scope: S): (model: T) => model is T & ModelActionScope<A, S> {
  return (model: T): model is T & ModelActionScope<A, S> =>
    model.actionsScopes[action] === scope;
}

export function isModelActionPublic<T extends Model, A extends ModelAction>(
  action: A
): (model: T) => model is T & ModelActionScope<A, 'public'> {
  return isModelAction(action, 'public');
}

export function isModelActionAuth<T extends Model, A extends ModelAction>(
  action: A
): (model: T) => model is T & ModelActionScope<A, 'auth'> {
  return isModelAction(action, 'auth');
}

export function isModelActionOwner<T extends Model, A extends ModelAction>(
  action: A
): (model: T) => model is T & ModelActionScope<A, 'owner'> {
  return isModelAction(action, 'owner');
}

export function isModelActionSystem<T extends Model, A extends ModelAction>(
  action: A
): (model: T) => model is T & ModelActionScope<A, 'system'> {
  return isModelAction(action, 'system');
}
