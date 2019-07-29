const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Fresh',
    description: "They're dope, they're fresh.",
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/scotttolinski/Sites/fresh-forms/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Fresh',
        description: "They're dope, they're fresh.",
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: ['Home', { name: 'Components', menu: ['Components'] }],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root: '/Users/scotttolinski/Sites/fresh-forms',
          templates:
            '/Users/scotttolinski/Sites/fresh-forms/node_modules/docz-core/dist/templates',
          packageJson: '/Users/scotttolinski/Sites/fresh-forms/package.json',
          docz: '/Users/scotttolinski/Sites/fresh-forms/.docz',
          cache: '/Users/scotttolinski/Sites/fresh-forms/.docz/.cache',
          app: '/Users/scotttolinski/Sites/fresh-forms/.docz/app',
          appPublic: '/Users/scotttolinski/Sites/fresh-forms/.docz/public',
          appNodeModules: '/Users/scotttolinski/Sites/fresh-forms/node_modules',
          appPackageJson: '/Users/scotttolinski/Sites/fresh-forms/package.json',
          appYarnLock:
            '/Users/scotttolinski/Sites/fresh-forms/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/scotttolinski/Sites/fresh-forms/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/scotttolinski/Sites/fresh-forms/gatsby-config.js',
          gatsbyBrowser:
            '/Users/scotttolinski/Sites/fresh-forms/gatsby-browser.js',
          gatsbyNode: '/Users/scotttolinski/Sites/fresh-forms/gatsby-node.js',
          gatsbySSR: '/Users/scotttolinski/Sites/fresh-forms/gatsby-ssr.js',
          importsJs:
            '/Users/scotttolinski/Sites/fresh-forms/.docz/app/imports.js',
          rootJs: '/Users/scotttolinski/Sites/fresh-forms/.docz/app/root.jsx',
          indexJs: '/Users/scotttolinski/Sites/fresh-forms/.docz/app/index.jsx',
          indexHtml:
            '/Users/scotttolinski/Sites/fresh-forms/.docz/app/index.html',
          db: '/Users/scotttolinski/Sites/fresh-forms/.docz/app/db.json',
        },
      },
    },
  ],
}

module.exports = merge(config, custom)
