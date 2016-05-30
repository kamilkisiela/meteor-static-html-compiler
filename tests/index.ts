import './stubs';

import {
  StaticHtmlCompiler,
} from '../src/index';

import {
  FileObject,
} from '../src/file';

function loadHTML(file: FileObject) {
  return new StaticHtmlCompiler();
}
