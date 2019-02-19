# Typescript Fullstack Monorepo

A fullstack boilerplate application using typescript, node, react, and mobx.

# Quick Start

## Install dependencies

```
git clone https://github.com/jeffkhull/typescript-fullstack-monorepo.git
cd typescript-fullstack-monorepo
npm i
cd packages/boilerplate-server && npm i
```

## Start Processes

### If you are using vscode

1. From the project root, open client.code-workspaces and server.code-workspace in separate instances of vscode
2. In the client code workspace, run the vscode task "server all"
3. In the client code workspace, run the vscode task "client start"

### If you're not using vscode

#### From a terminal in the project root

1. cd packages/boilerplate-server
2. npm run watch & npm run start

#### From a second terminal in the project root

1. cd packages/boilerplate-client
2. npm run start

# Dependencies

1. Node.js 8+

# Motivation

The large number of language, framework, library, and toolchain choices in today's javascript ecosystem can make it difficult to get started in any javascript development, let alone develop a full-stack application. This repository is one such full-stack application meant as an example and easy starting point for those interested in building an application using typescript, node, react, and mobx.

# Technology Choices

This boilerplate uses my current preferred development stack. I've moved on from other technologies and will continue to do so as I learn. Here's the reasoning behind the technologies used thus far, and some explanation for why I've chosen some tech over others.

## Typescript

I've been impressed at the active role Microsoft has taken in the open source community, in large part caused (as far as I can tell) by the leadership of [Satya Nadella](https://twitter.com/satyanadella). Typescript is one Microsoft project whose momentum, quality, and versatility are impressive. I started with vanilla ES6 and after some time in development, came to appreciate the power of strong typing and static analysis. Many popular open source projects have been adopting typescript. Angular was an early adopter, and recently, Vue.js [announced version 3.0 was being written in typescript](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf). My first exposure to strong typing in javascript was [this video](https://www.youtube.com/watch?v=Qiqsg02nXFE), and several talks by [Andrews Hejlsberg](https://twitter.com/ahejlsberg) shed light on the design and philosophy behind Typescript. The javascript community as a whole has seen a flurry of innovation in the past few years, being rekindled perhaps with ES6 (AKA ES2015) and the leadership of the folks on the [TC39](https://github.com/tc39/proposals). Typescript's commitment to the community and commitment to support all official javascript features, so that it is a true superset and maintains compatibility with javascript as a whole, coupled with the power of its associated tooling has made Typescript the current clear choice for my projects.

## Mobx

When I started developing with React, I adopted Redux as my state management library of choice. After working with it for a year or so, I became tired of the amount of code I needed to maintain X piece of shared state in my React application. That's when I ran into the ideas of [Michel Westrate](https://twitter.com/mweststrate) and his React state management library, [Mobx](https://medium.com/@mweststrate/interactive-introduction-to-mobx-and-reactjs-1760e448103c). After putting it off for a while, I tried mobx out in one of my apps and haven't looked back.

A caveat to this though: [Immer](https://github.com/mweststrate/immer) greatly reduces Redux reducer boilerplate, so that is worth a look. Also, react hooks are making possible some really interesting an elegant global state management solutions, a couple examples [here](https://medium.com/@Charles_Stover/manage-global-state-with-react-hooks-6065041b55b4) and [here](https://github.com/dai-shi/react-hooks-global-state)

### No React.setState

The main reason I love React is the bundling of view and behavior into components using the thin syntactic sugar on top of javascript called JSX. That said, from a developer experience perspective, I'm not a fan of React.setState and keeping component state in one large object. After having managed my shared state in Mobx stores for a while, I moved to using observables and computed values for my [local component state too](https://blog.cloudboost.io/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e). All of this said, the current React Hooks proposal is likely to change this, as state can be used to manage individual values directly, and useMemo can provide easy momoized/computed values.

## No React Router

Like many starting out with react, I started with React Router as my routing solution. However, when I started migrating to react router v4 from v3, I developed the opinion that having my components control my routes is backward in an application where the state of my components should be driven by the contents of my stores, not the other way around. So once again Michel Westrate writes [an article](https://hackernoon.com/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37) laying out the reasons to ditch route aware components for a store based approach using the simple [director](https://github.com/flatiron/director) routing library. I couldn't be happier with the decision - my application routing is so much simpler than before.

## Function Components

The introduction of hooks has made it possible to create a react application without any class components. I'm a big fan of this approach, one reason being the conciseness and simplicity of just using functions everywhere, and another being not needing to deal with "this." in my components.

## Disclaimer

This repository contains one set of technology choices and doesn't intend to claim the choices made are the best possible. I'm always looking to optimize my workflow, so if you have any interesting alternatives, please let me know!
