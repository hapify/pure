import {
  BooleanField,
  EntityManyToOneField,
  EnumField,
  FileImageField,
  Model,
  NumberIntegerField,
  Project,
  StringBasicField,
  StringEmailField,
  StringPasswordField,
  StringTextField,
} from '../../src';

const project = new Project('My project');
const userModel = new Model('User')
  .addField(
    new StringBasicField('name')
      .setSearchable(true)
      .setMaxLength(64)
      .setSortable(true)
      .setNotes('The name of the user'),
  )
  .addField(
    new StringEmailField('email')
      .setSearchable(true)
      .setSortable(true)
      .setUnique(true)
      .setNotes('The email of the user'),
  )
  .addField(new StringPasswordField('password').makeNotReadable())
  .addField(
    new NumberIntegerField('age')
      .setSortable(true)
      .setMin(0)
      .setMax(120)
      .setNullable(true),
  )
  .addField(
    new BooleanField('validated')
      .makeNotReadable()
      .makeNotWritable()
      .setSearchable(true)
      .setSortable(true),
  );

const shop = new Model('Shop')
  .addField(
    new StringBasicField('name')
      .setSearchable(true)
      .setMaxLength(64)
      .setSortable(true)
      .setNotes('The name of the shop'),
  )
  .addField(
    new StringTextField('description').setNotes('The description of the shop'),
  )
  .addField(
    new EnumField('type')
      .addValue('food')
      .addValue('clothes')
      .addValue('other')
      .setDefaultValue('other'),
  )
  .addField(
    new FileImageField('logo')
      .setNullable(true)
      .setMaxSize(1024 * 1024 * 5)
      .setMinHeight(100)
      .setMinWidth(100)
      .setNotes('The logo of the shop'),
  )
  .addField(
    new EntityManyToOneField('owner', userModel)
      .setOwnership(true)
      .setSearchable(true),
  );

project.addModel(userModel).addModel(shop);

export default project;
