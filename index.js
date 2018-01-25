/**
 * react-router 懒加载
 * Created by vincent on 2018/01/25.
 *
 * import lazy from 'react-router-lazy';
 * <Route path="/about" getComponent={lazy(()=>import('./modules/ModuleA'))}/>
 *
 */

module.exports = function (promiseFactory) {
  return function (location, callback) {
    return promiseFactory().then(function (cb) {
      return cb(function (component) {
        return callback(null, component.default || component);
      });
    });
  };
};
