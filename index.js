var chain = require('stack-chain')

module.exports = function hideStackFramesFrom() {
  [].forEach.call(arguments, function(name) {
    chain.filter.attach(function(error, frames) {
      // TODO: Figure out how to remove the entries for anonymous functions and anonymous waits: if (error.toString().indexOf("anonymous") !== -1) THEN REMOVE THE ENTIRE ENTRY
      return frames.filter(function(frame) {
        var f = frame.getFileName()
        // TODO: Keep only the file and line number, instead of removing the entire frame, because we want the first one from protractor that tells us where our test file we failed
        // Remove useless "at: " entries from the stacktrace & avoid NPE
        if (!frame || !frame.length || frame.receiver === undefined || frame.receiver.value_ === undefined || f == null || f === "") {
          return false;
        }
        // Remove stacktraces matching the provided regex
        if (name instanceof RegExp) {
          return !name.test(f)
        }
        // Remove stacktraces matching the provided name
        return f.indexOf('node_modules/' + name + '/') === -1 &&
               f.indexOf('node_modules\\' + name + '\\') === -1
      })
    })
  })
  return hideStackFramesFrom
}
