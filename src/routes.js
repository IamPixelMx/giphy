import { compile } from 'path-to-regexp';

const routes = {
  home: '/',
  compile: (path, keys) => compile(path)(keys),
};

export default routes;
