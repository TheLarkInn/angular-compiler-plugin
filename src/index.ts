/// <reference path='../node_modules/typescript/lib/typescriptServices.d.ts' />
/// <reference path="./defines.d.ts"/>
const path = require('path');

export default class AngularCompilerPlugin {
  public options;

  constructor() {
    console.log("CONSTRUCTOR!\n\n")
  }

  apply(compiler) {
    var compilation;

    compiler.plugin('run-watch', function(compiler, callback) {
      console.log('run-watch\n\n');
      callback();
    });

    compiler.plugin('run', function(compiler, callback) {
      console.log('run\n\n');
      callback();
    });

    compiler.plugin('compile', function(params) {
      console.log('compile\n\n');
    });

    compiler.plugin('make', function(compilation, callback) {
      console.log('make\n\n');
      callback();
    });

    compiler.plugin('emit', function(params, callback) {
      console.log('emit\n\n');
      callback();
    });

    compiler.plugin('compilation', function(compilation) {
      console.log('compilation\n\n');
    });

    // compiler.plugin("normal-module-factory", function(nmf) {
    //   console.log('normal-module-factory\n\n');

    //   nmf.plugin("after-resolve", function(data) {
    //     console.log('after-resolve\n\n');
    //   });
    // });

    compiler.plugin("after-compile", function(compilation, callback) {
      debugger;
      console.log("COMPILATION IS DONE", compilation);
      callback();
    });

  }
}




