# react-router-lazy

react-router 懒加载

## Usage

```js
import lazy from 'react-router-lazy';

<Route path="/about" getComponent={lazy(()=>import('./modules/ModuleA'))}/>

```