module.exports = {
  npm: {/*
    globals: {
      ajax: '@fdaciuk/ajax',
      marked: 'marked'
    }*/
  },
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  plugins: {
    babel: { presets: ['latest'] },
    postcss: { processors: [require('autoprefixer')] },
    afterBrunch: [
      'npm run build:docs'
    ]
  },
  modules: {
    autoRequire: {
      'app.js': ['initialize']
    }
  }
};
