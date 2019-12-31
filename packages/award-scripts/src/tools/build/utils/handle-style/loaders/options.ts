export default {
  additionalProperties: true,
  properties: {
    name: {
      anyOf: [
        {
          type: 'string'
        },
        {
          instanceof: 'Function'
        }
      ]
    },
    outputPath: {
      anyOf: [
        {
          type: 'string'
        },
        {
          instanceof: 'Function'
        }
      ]
    },
    publicPath: {
      anyOf: [
        {
          type: 'string'
        },
        {
          instanceof: 'Function'
        }
      ]
    },
    context: {
      type: 'string'
    },
    emitFile: {
      type: 'boolean'
    },
    regExp: {
      anyOf: [
        {
          type: 'string'
        },
        {
          instanceof: 'RegExp'
        }
      ]
    }
  },
  errorMessages: {
    name: 'should be {String} or {Function} (https://github.com/webpack-contrib/file-loader#name)',
    outputPath:
      'should be {String} or {Function} (https://github.com/webpack-contrib/file-loader#outputpath)',
    publicPath:
      'should be {String} or {Function} (https://github.com/webpack-contrib/file-loader#publicpath)',
    context: 'should be {String} (https://github.com/webpack-contrib/file-loader#context)',
    emitFile: 'should be {Boolean} (https://github.com/webpack-contrib/file-loader#emitfile)',
    regExp: 'should be {String} or {RegExp} (https://github.com/webpack-contrib/file-loader#regexp)'
  },
  type: 'object'
};
