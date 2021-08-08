# TypeScript

- TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.

## Types

- Types:
  - `boolean`, `bigint`, `null`, `number`, `string`, `symbol`, and `undefined`
  - TypeScript extends this list with a few more:
    - `any` (allow anything)
    - `unknown` (ensure someone using this type declares what the type is)
    - `never` (it’s not possible that this type could happen)
    - `void` (a function which returns undefined or has no return value)
  - You’ll see that there are two syntaxes for building types: `Interfaces` and `Types`. You should prefer `interface`. Use `type` when you need specific features

### Composing Types

- With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with `Unions`, and with `Generics`
  - `Unions` can declare that a type could be one of many types.  For example, you can declare a boolean type as being either true or false:

    ```javascript
    type MyBool = true | false;
    ```

  -
