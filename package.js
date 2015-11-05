Package.describe({
  name: 'pmary:extended-mde',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

// Specify npm modules
Npm.depends({
  //'simplemde':'1.8.1'
  //'upper-case':'1.1.2'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  var packages = [
    //'cosmos:browserify'  // https://atmospherejs.com/cosmos/browserify
    'deps',
    'service-configuration',
    'underscore',
    'templating',
    'handlebars',
    'promise',                   // https://atmospherejs.com/meteor/promise
    'session',
    'sha'
  ];

  api.use(packages, 'client');

  api.addFiles([
    // Marked
    //'node_modules/simplemde/node_modules/marked/lib/marked.js',
    'lib/client/marked-custom.js',
    // CodeMirror
    'node_modules/simplemde/node_modules/codemirror/lib/codemirror.js',
    'node_modules/simplemde/node_modules/codemirror/lib/codemirror.css',
      // Addons
      'node_modules/simplemde/node_modules/codemirror/addon/edit/continuelist.js',
      'node_modules/simplemde/node_modules/codemirror/addon/mode/overlay.js',
      'node_modules/simplemde/node_modules/codemirror/addon/display/fullscreen.js',
      // Mods
      'node_modules/simplemde/node_modules/codemirror/mode/markdown/markdown.js',
      'node_modules/simplemde/node_modules/codemirror/mode/gfm/gfm.js',
      'node_modules/simplemde/node_modules/codemirror/mode/xml/xml.js',
    // Spell checker
    'node_modules/simplemde/node_modules/codemirror-spell-checker/dist/spell-checker.min.css',
    'node_modules/simplemde/node_modules/codemirror-spell-checker/dist/spell-checker.min.js',
    'node_modules/simplemde/node_modules/codemirror-spell-checker/src/js/typo.js',
    // Custom SimpleMDE main script
    'lib/client/extended-mde.js',
    'lib/client/tablist.js',
    'lib/client/extended-mde.css'
  ], ['client']);

  api.export('SimpleMDE', 'client');
  //api.export('uppercase', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('pmary:extended-mde');
  api.addFiles('extended-mde-tests.js');
});
