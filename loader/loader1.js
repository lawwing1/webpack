const loaderUtils = require("loader-utils");
const { validate } = require("schema-utils");
const schemaJson = require("./schema.json");
const babel = require("@babel/core");

// webpack5 不用loader-utils, 用 this.query
function loader1(source) {
  const options = this.query;
  validate(schemaJson, options);

  console.log("getOptions", this.getOptions(schemaJson));
  console.log("query", options);

  const callback = this.async();

  babel.transform(
    source,
    {
      presets: options.presets,
      sourceMap: true,
    },
    (err, result) => {
      callback(err, result.code, result.map);
    }
  );

  return source;
}

module.exports = loader1;

// module.exports.pitch = function (res) {
//   // console.log("pitch1", res);
// };

// 返回二进制
// module.exports.raw = true;
