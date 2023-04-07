class DeleteCommentPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tap("deleteComment", (compilation) => {
      //   console.log("compilation", compilation.assets);
      for (let name in compilation.assets) {
        if (name.endsWith(this.options.target)) {
          const content = compilation.assets[name].source();

          const noComments = content.replace(/\/\*[\s\S*?]\*\//g, "");

          compilation.assets[name] = {
            source() {
              return noComments;
            },
            size() {
              return noComments.length;
            },
          };
        }
      }
    });
  }
}

module.exports = DeleteCommentPlugin;
