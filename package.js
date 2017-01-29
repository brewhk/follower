Package.describe({
  name: 'brewhk:follower',
  version: '0.1.1',
  summary: 'Keeps track of who you follow, and who\'s following you.',
  git: 'https://github.com/brewhk/follower.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'check', 'mongo', 'aldeed:collection2@2.5.0', 'stevezhu:lodash@0.0.0 || 1.0.0 || 3.0.0']);
  api.addFiles('lib/collections.js', ['client', 'server']);
  api.addFiles('server/schema.js', 'server');
  api.addFiles('server/methods.js', 'server');
  api.addFiles('server/publications.js', 'server');
  api.addFiles('client/follower.js', 'client');
  api.export('Follower', 'client');
  api.export('Followers', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('brewhk:follower');
  api.addFiles('follower-tests.js');
});
