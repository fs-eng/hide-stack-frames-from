hide-stack-frames-from
======================

*cloned from: https://github.com/dtinth/hide-stack-frames-from*

### Extras:

Adds the ability to remove the extended stacktraces from tree-protractor-common, selenium, and protractor, in addition to any others you may want to quiet down.

## TODO:

 - Figure out how to remove the entries for anonymous functions and anonymous waits, so that the only thing in the console is the error.

### Example usage:

 - Add to your project's package.json: `"hide-stack-frames-from": "git+https://github.com/fs-eng/hide-stack-frames-from",`
- Add to each test you would like to suppress stacktraces:

	```javascript
	require('hide-stack-frames-from')(
	  'protractor',
	  'selenium-webdriver',
	  'tree-protractor-common'
	);
	```

---

Eliminates stack trace noise by hiding stack frames from any node module.

### Go from this:

```
      ✗ should set a user's default name template to match and display page in selected locale: en (12 secs)
        - Failed: No element found using locator: By.cssSelector("#ARGHLifeSketchNonVitalSection [conclusion=ALTERNATE_NAME] .template-link")
            at new bot.Error (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/atoms/error.js:108:18)
            at /Sandbox/frontier/tree/node_modules/protractor/lib/element.js:694:15
            at [object Object].promise.ControlFlow.runInFrame_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1857:20)
            at [object Object].goog.defineClass.notify (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:2448:25)
            at [object Object].promise.Promise.notify_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:564:12)
            at Array.forEach (native)
            at [object Object].promise.Promise.notifyAll_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:553:15)
            at [object Object].goog.async.run.processWorkQueue [as _onTimeout] (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/async/run.js:130:15)
        Error
            at [object Object].ElementArrayFinder.applyAction_ (/Sandbox/frontier/tree/node_modules/protractor/lib/element.js:392:21)
            at [object Object].self.(anonymous function) [as getText] (/Sandbox/frontier/tree/node_modules/protractor/lib/element.js:76:19)
            at [object Object].self.(anonymous function) [as getText] (/Sandbox/frontier/tree/node_modules/protractor/lib/element.js:721:11)
            at /Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:52:118
            at [object Object].promise.ControlFlow.runInFrame_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1857:20)
            at [object Object].goog.defineClass.notify (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:2448:25)
            at [object Object].promise.Promise.notify_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:564:12)
            at Array.forEach (native)
            at [object Object].promise.Promise.notifyAll_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:553:15)
            at [object Object].goog.async.run.processWorkQueue [as _onTimeout] (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/async/run.js:130:15)
        From: Task: <anonymous>
            at pollCondition (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1614:14)
            at eval (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1610:7)
            at new promise.Promise (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:368:5)
            at eval (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1608:12)
            at [object Object].promise.ControlFlow.runInFrame_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1857:20)
            at [object Object].promise.ControlFlow.runEventLoop_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1729:8)
            at [object Object].eval (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:2043:12)
            at [object Object].goog.async.run.processWorkQueue [as _onTimeout] (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/async/run.js:130:15)
        From: Task: <anonymous wait>
            at [object Object].promise.ControlFlow.wait (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1606:15)
            at [object Object].webdriver.WebDriver.wait (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:716:21)
            at [object Object].to.(anonymous function) [as wait] (/Sandbox/frontier/tree/node_modules/protractor/lib/protractor.js:65:25)
            at ProtractorExtensions.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/protractor-extensions/protractor-extensions.js:9:20)
            at ProtractorLib.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/tree-protractor-lib.js:67:36)
            at /Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:37:20
            at _fulfilled (/Sandbox/frontier/upstream/tree-protractor-common/node_modules/q/q.js:834:54)
            at self.promiseDispatch.done (/Sandbox/frontier/upstream/tree-protractor-common/node_modules/q/q.js:863:30)
            at Promise.promise.promiseDispatch (/Sandbox/frontier/upstream/tree-protractor-common/node_modules/q/q.js:796:13)
            at /Sandbox/frontier/upstream/tree-protractor-common/node_modules/q/q.js:604:44
        From: Task: <anonymous>
            at pollCondition (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1614:14)
            at eval (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1610:7)
            at new promise.Promise (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:368:5)
            at eval (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1608:12)
            at [object Object].promise.ControlFlow.runInFrame_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1857:20)
            at [object Object].promise.ControlFlow.runEventLoop_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1729:8)
            at [object Object].eval (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:2043:12)
            at [object Object].goog.async.run.processWorkQueue [as _onTimeout] (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/async/run.js:130:15)
        From: Task: couldn't read or incorrect nameTemplate preference
            at [object Object].promise.ControlFlow.wait (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1606:15)
            at [object Object].webdriver.WebDriver.wait (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:716:21)
            at [object Object].to.(anonymous function) [as wait] (/Sandbox/frontier/tree/node_modules/protractor/lib/protractor.js:65:25)
            at ProtractorExtensions.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/protractor-extensions/protractor-extensions.js:9:20)
            at ProtractorLib.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/tree-protractor-lib.js:67:36)
            at /Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:25:14
            at [object Object].promise.ControlFlow.runInFrame_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1857:20)
            at [object Object].goog.defineClass.notify (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:2448:25)
            at [object Object].promise.Promise.notify_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:564:12)
            at Array.forEach (native)
        From: Task: <anonymous>
            at pollCondition (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1614:14)
            at eval (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1610:7)
            at new promise.Promise (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:368:5)
            at eval (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1608:12)
            at [object Object].promise.ControlFlow.runInFrame_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1857:20)
            at [object Object].promise.ControlFlow.runEventLoop_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1729:8)
            at [object Object].eval (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:2043:12)
            at [object Object].goog.async.run.processWorkQueue [as _onTimeout] (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/async/run.js:130:15)
        From: Task: <anonymous wait>
            at [object Object].promise.ControlFlow.wait (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1606:15)
            at [object Object].webdriver.WebDriver.wait (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:716:21)
            at [object Object].to.(anonymous function) [as wait] (/Sandbox/frontier/tree/node_modules/protractor/lib/protractor.js:65:25)
            at ProtractorExtensions.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/protractor-extensions/protractor-extensions.js:9:20)
            at ProtractorLib.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/tree-protractor-lib.js:67:36)
            at switchLocaleAndCheckPreference (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:20:8)
            at Object.<anonymous> (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:110:9)
            at /Sandbox/frontier/tree/node_modules/protractor/node_modules/jasminewd2/index.js:96:23
            at new promise.Promise (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:368:5)
            at controlFlowExecute (/Sandbox/frontier/tree/node_modules/protractor/node_modules/jasminewd2/index.js:82:18)
        From: Task: Run it("should set a user's default name template to match and display page in selected locale: en") in control flow
            at Object.<anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/jasminewd2/index.js:81:14)
            at /Sandbox/frontier/tree/node_modules/protractor/node_modules/jasminewd2/index.js:18:5
            at [object Object].promise.ControlFlow.runInFrame_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:1857:20)
            at [object Object].goog.defineClass.notify (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:2448:25)
            at [object Object].promise.Promise.notify_ (eval at <anonymous> (/Sandbox/frontier/tree/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1124:19), <anonymous>:564:12)
            at Array.forEach (native)
        From asynchronous test:
        Error
            at checkEachLocale (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:109:7)
            at Suite.<anonymous> (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:115:7)
            at Suite.<anonymous> (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:101:3)
F
**************************************************
*                    Failures                    *
**************************************************

1) ### Smoke Test: Globalization user locale should set a user's default name template to match and display page in selected locale: en
  - Failed: No element found using locator: By.cssSelector("#ARGHLifeSketchNonVitalSection [conclusion=ALTERNATE_NAME] .template-link")

Executed 1 of 1 spec (1 FAILED) in 18 secs.


Failures:
1) ### Smoke Test: Globalization user locale should set a user's default name template to match and display page in selected locale: en
  Message:
    Failed: No element found using locator: By.cssSelector("#ARGHLifeSketchNonVitalSection [conclusion=ALTERNATE_NAME] .template-link")
  Stack:
    NoSuchElementError: No element found using locator: By.cssSelector("#ARGHLifeSketchNonVitalSection [conclusion=ALTERNATE_NAME] .template-link")
        at Array.forEach (native)
    Error
        at /Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:52:118
        at Array.forEach (native)
    From: Task: <anonymous>
    From: Task: <anonymous wait>
        at ProtractorExtensions.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/protractor-extensions/protractor-extensions.js:9:20)
        at ProtractorLib.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/tree-protractor-lib.js:67:36)
        at /Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:37:20
        at _fulfilled (/Sandbox/frontier/upstream/tree-protractor-common/node_modules/q/q.js:834:54)
        at self.promiseDispatch.done (/Sandbox/frontier/upstream/tree-protractor-common/node_modules/q/q.js:863:30)
        at Promise.promise.promiseDispatch (/Sandbox/frontier/upstream/tree-protractor-common/node_modules/q/q.js:796:13)
        at /Sandbox/frontier/upstream/tree-protractor-common/node_modules/q/q.js:604:44
    From: Task: <anonymous>
    From: Task: couldn't read or incorrect nameTemplate preference
        at ProtractorExtensions.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/protractor-extensions/protractor-extensions.js:9:20)
        at ProtractorLib.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/tree-protractor-lib.js:67:36)
        at /Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:25:14
        at Array.forEach (native)
    From: Task: <anonymous>
    From: Task: <anonymous wait>
        at ProtractorExtensions.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/protractor-extensions/protractor-extensions.js:9:20)
        at ProtractorLib.wait (/Sandbox/frontier/upstream/tree-protractor-common/lib/tree-protractor-lib.js:67:36)
        at switchLocaleAndCheckPreference (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:20:8)
        at Object.<anonymous> (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:110:9)
    From: Task: Run it("should set a user's default name template to match and display page in selected locale: en") in control flow
        at Array.forEach (native)
    From asynchronous test:
    Error
        at checkEachLocale (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:109:7)
        at Suite.<anonymous> (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:115:7)
        at Suite.<anonymous> (/Sandbox/frontier/tree/test/client/protractor/suites/cutoverSmoke/globalization-speck.js:101:3)

1 spec, 1 failure
```

<p align="center"><a href="http://imgur.com/rMkyO4g"><img src="http://i.imgur.com/rMkyO4g.jpg" title="source: imgur.com" /></a></p>

<br>

### To this:

```
      ✗ should set a user's default name template to match and display page in selected locale: en (11 secs)
        - Failed: No element found using locator: By.cssSelector("#ARGHLifeSketchNonVitalSection [conclusion=ALTERNATE_NAME] .template-link")
        Error
        From: Task: <anonymous>
        From: Task: <anonymous wait>
        From: Task: <anonymous>
        From: Task: couldn't read or incorrect nameTemplate preference
        From: Task: <anonymous>
        From: Task: <anonymous wait>
        From: Task: Run it("should set a user's default name template to match and display page in selected locale: en") in control flow
        From asynchronous test:
        Error
F
**************************************************
*                    Failures                    *
**************************************************

1) ### Smoke Test: Globalization user locale should set a user's default name template to match and display page in selected locale: en
  - Failed: No element found using locator: By.cssSelector("#ARGHLifeSketchNonVitalSection [conclusion=ALTERNATE_NAME] .template-link")

Executed 1 of 1 spec (1 FAILED) in 16 secs.


Failures:
1) ### Smoke Test: Globalization user locale should set a user's default name template to match and display page in selected locale: en
  Message:
    Failed: No element found using locator: By.cssSelector("#ARGHLifeSketchNonVitalSection [conclusion=ALTERNATE_NAME] .template-link")
  Stack:
    NoSuchElementError: No element found using locator: By.cssSelector("#ARGHLifeSketchNonVitalSection [conclusion=ALTERNATE_NAME] .template-link")
    Error
    From: Task: <anonymous>
    From: Task: <anonymous wait>
    From: Task: <anonymous>
    From: Task: couldn't read or incorrect nameTemplate preference
    From: Task: <anonymous>
    From: Task: <anonymous wait>
    From: Task: Run it("should set a user's default name template to match and display page in selected locale: en") in control flow
    From asynchronous test:
    Error

1 spec, 1 failure
```

<br>

<h3 align="center">By doing this:</h3>

<h3 align="center"><tt>require('hide-stack-frames-from')(
	  'protractor',
	  'selenium-webdriver',
	  'tree-protractor-common'
	);</tt></h3>

<br>

End transmission
