import type { Model } from '../../model';
import { BaseField } from '../base-field';

/**
 * This class is tested via the children classes, especially the EntityOneToOneField class
 */
export abstract class BaseEntityField extends BaseField {
  /**
   * Denotes of the field points to the owner of the entity
   */
  protected _ownership = false;

  constructor(name: string, protected _model: Model) {
    super(name);
  }

  /**
   * The model to which the field is linked
   */
  get model(): Model {
    return this._model;
  }

  /**
   * Set the ownership property of the field
   */
  setOwnership(ownership: boolean): this {
    this._ownership = ownership;
    return this;
  }

  /**
   * Returns true if the field points to the owner of the entity
   */
  get ownership(): boolean {
    return this._ownership;
  }
}
