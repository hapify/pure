import { Model } from '../../../nodes';
import { ModelWithOwnership } from '../../interfaces';

/**
 * Checks if the model has an owner.
 */
export function hasOwnership<T extends Model>(
  model: T,
): model is T & ModelWithOwnership {
  return model.ownershipField !== undefined;
}
