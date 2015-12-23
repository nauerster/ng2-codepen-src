System.config({
  defaultJSExtensions: true,
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    app: 'https://cdn.rawgit.com/nauerster/ng2-codepen-src/master/hello-world/'
  },
  packages: {
    app: {
      main: 'app.ts',
      defaultExtension: 'ts',
    }
  }
});