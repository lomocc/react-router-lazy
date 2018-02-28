# react-router-lazy

react-router 懒加载

## Usage

* `v3` lazy

```js
import lazy from 'react-router-lazy';
import {Route} from 'react-router; // v3

<Route path="/about" getComponent={lazy(() => import('./modules/ModuleA'))}/>
```

* `v4` Route

```js
import {Route} from 'react-router-lazy';

<Route path="/about" getComponent={() => import('./modules/ModuleA')}/>
```

* `BundleLoader`

```js
import {BundleLoader} from 'react-router-lazy';

<BundleLoader getComponent={import('./module/ModuleA')} {...propsOfModuleA}/>
```