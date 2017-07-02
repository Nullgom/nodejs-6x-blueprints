WoodenLog
==========

Minimalist log node messages module to add colors for console.log for specific type of log.

## 설치 방법

```shell
    npm install woodenlog --save
```

## 사용 방법
````js
var woodenlog = require('woodenlog');
// woodenlog.configurate(null, 'white', 'green', 'red');

woodenlog.log('just log!');
woodenlog.warn('this is a warning!');
woodenlog.error('this is an error!');
````
## 테스트

```shell
    npm test
```

## Release History

* 1.0.0 Initial release
