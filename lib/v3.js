"use strict";

/**
 * react-router v3 懒加载
 * Created by vincent on 2018/01/25.
 *
 * import lazy from 'react-router-lazy';
 * <Route path="/about" getComponent={lazy(()=>import('./modules/ModuleA'))}/>
 *
 */
module.exports = function (promiseFactory) {
  return function (location, callback) {
    promiseFactory().then(function (component) {
      callback(null, component.default || component);
    });
  };
};