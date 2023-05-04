import { Model } from '../../../model';
import { BaseEntityField } from '../base-entity-field';
import { EntityOneToOneField } from './entity-one-to-one-field';

describe('BaseEntityField', () => {
  describe('constructor', () => {
    it('should create a field', () => {
      const field = new EntityOneToOneField('test', new Model('User'));
      expect(field).toBeInstanceOf(BaseEntityField);
    });
  });
  describe('model', () => {
    it('should return the model', () => {
      const model = new Model('User');
      const field = new EntityOneToOneField('test', model);
      expect(field.model).toBeInstanceOf(Model);
    });
  });
  describe('ownership', () => {
    it('should return the ownership', () => {
      const model = new Model('User');
      const field = new EntityOneToOneField('test', model);
      expect(field.ownership).toBe(false);
    });
    it('should set the ownership', () => {
      const model = new Model('User');
      const field = new EntityOneToOneField('test', model);
      field.setOwnership(true);
      expect(field.ownership).toBe(true);
    });
  });
});

describe('EntityOneToOneField', () => {
  describe('constructor', () => {
    it('should create a field', () => {
      const field = new EntityOneToOneField('test', new Model('User'));
      expect(field).toBeInstanceOf(EntityOneToOneField);
    });
  });
  describe('type', () => {
    it('should have the correct type and subType', () => {
      const field = new EntityOneToOneField('test', new Model('User'));
      expect(field.type).toBe('entity');
      expect(field.subType).toBe('oneToOne');
    });
  });
});
