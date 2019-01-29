const { src, dest } = require("gulp");

function clean(cb) {
  cb();
}

function moveIndexHtml() {
  return src("public/index.html").pipe(dest("build"));
}

exports.moveIndexHtml = moveIndexHtml;
exports.default = clean;
