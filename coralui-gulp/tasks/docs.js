/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2017 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
module.exports = function(gulp) {
  const exec = require('child_process').exec;

  // @todo due to https://github.com/nanopx/gulp-esdoc/issues/19, we can't use gulp-esdoc
  gulp.task('docs', function() {
    return exec('node_modules/.bin/esdoc -c node_modules/coralui-gulp/configs/esdoc.conf.json');
  });
};
