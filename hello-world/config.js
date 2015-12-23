System.config({
  defaultJSExtensions: true,
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    app: 'src'
  },
  packages: {
    app: {
      main: 'main.ts',
      defaultExtension: 'ts',
    }
  }
});