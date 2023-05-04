# Hapify Schema

Hapify Schema is a TypeScript library that provides a unified data modeling approach for backend and frontend constraints.
It aims to simplify the data modeling process by providing a set of common use cases that cover most scenarios.

## Concept

Hapify Schema uses an agnostic and behavior-oriented approach to data modeling,
allowing you to define data models that meet the specific requirements of your project.

With Hapify Schema, you specify what the model should do rather than how it should do it,
providing maximum flexibility and adaptability to different use cases.

## Features

- Unified data modeling approach for backend and frontend constraints
- Written in TypeScript and fully typed
- Simple and intuitive API for describing the data model
- Can be used with third-party code generators like Eta

## Installation

You can install Hapify Schema using npm:

```bash
npm install @hapify/schema
```

## Usage

To use Hapify Schema, you first need to create a data model using the provided classes. Here's an example:

```typescript
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
```

Once you have a data model, you can pass it as a context to a third-party code generator like [Eta](https://eta.js.org/) to generate the actual implementation code.

It comes with a set of built-in helpers that let play with the data models and their fields in your templates:

```typescript
for (const model of project.models) {
  const searchableStringOrNumberFields = model.fields.filter(
    or(and(isString, isSearchable), isNumber),
  );
}
```

## Origins

The idea for this new library came from the realization that the existing [Hapify](https://github.com/hapify/hapify) code generator was doing too much.

While it was a powerful tool, it also included a lot of functionality that wasn't always necessary for developers who just needed to describe their data model and rely on well known generators.

So, we decided to create a new library that focused solely on the unified data modeling approach of Hapify, in order to provide a more streamlined and lightweight alternative.

## Contributing

We welcome contributions from the community! To contribute to Hapify Schema, please follow these steps:

- Fork the repository
- Create a new branch for your changes
- Make your changes and commit them
- Push your changes to your fork
- Submit a pull request

## License

Hapify Schema is released under the MIT License.
