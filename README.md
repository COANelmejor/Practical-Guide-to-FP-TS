# Practical-Guide-to-Fp-ts

Practical Guide to Fp-ts, based on
[Practical Guide to Fp‑ts Series' Articles](https://dev.to/ryanleecode/series/7325) by
[Ryan Lee](https://dev.to/ryanleecode).

## Description

This repository is a practical guide with examples to show how to use
[`FP-TS`](https://www.npmjs.com/package/fp-ts), a library for functional programming in TypeScript.

It is a collection of useful examples.

To run the examples, you need to install all the dependencies.

```bash
npm install
```

## Veifying the installation

After installing the dependencies, you can run the following command to verify the installation.

```bash
npm run start
```

The `start` script will check if the dependencies are installed correctly, showing the following
output:

```bash
Installation is working correctly. (•◡•)
[ 2, 3, 4, 5 ]
```

## Running the examples

Then you can run the examples.

Follow the next order to better conprehend of [`FP-TS`](https://www.npmjs.com/package/fp-ts)

```bash
// Example of pipe
npm run start:p1:pipe 

// Example of flow
npm run start:p1:flow

// Example of Option.map
npm run start:p2:option.map

// Example of Option.flatten
npm run start:p2:option.flatten

// Example of Option.chain
npm run start:p2:option.chain

// Example of Task
npm run start:p3:task

// Example of Either
npm run start:p3:either

// Example of chaining various Eithers
npm run start:p3:chaining_eithers

// Example of TaskEither
npm run start:p3:taskeither
```
