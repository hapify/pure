import { EntityField, Model } from '../../nodes';
import { OwnershipField } from '../../helpers';

/**
 * Returns the chain of ownership.
 * Get to the owner recursively until there is no owner.
 * If it loops, it means there is a circular dependency. In this case, it stops and returns the chain.
 * Returns an array of EntityField.
 */
export function getOwnershipChain(
  model: Model,
): (EntityField & OwnershipField)[] {
  const chain: (EntityField & OwnershipField)[] = [];
  let ownershipField = model.ownershipField;

  while (ownershipField) {
    // Check for circular dependency
    if (chain.some((item) => item === ownershipField)) {
      return chain;
    }
    // Add the owner to the chain
    chain.push(ownershipField);
    // Get the next owner
    ownershipField = ownershipField.model.ownershipField;
  }
  return chain;
}
