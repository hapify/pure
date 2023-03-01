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
- Written in TypeScript
- Simple and intuitive API for describing the data model
- Can be used with third-party code generators like Eta

## Installation

You can install Hapify Schema using npm:

```bash
npm install @hapify-schema
```

## Usage

To use Hapify Schema, you first need to create a data model using the provided classes. Here's an example:

```typescript
// Coming soon...
```

Once you have a data model, you can pass it as a context to a third-party code generator like [Eta](https://eta.js.org/) to generate the actual implementation code.

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
