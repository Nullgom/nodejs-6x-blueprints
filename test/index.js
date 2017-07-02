/**
 * mocha 모듈을 이용안 테스트 코드
 */
var should = require('chai').should(),
    woodenlog = require('../index'),
    log = woodenlog.log,
    warn = woodenlog.warn,
    error = woodenlog.error;

describe('#log', function() {
    it('log message', function() {
        log('message').should.equal(true);
    });
});

describe("#wran", function() {
    it('warn message', function() {
        warn('message').should.equal(true);
    });
});

describe("#error", function() {
    it('error message', function() {
        error('message').should.equal(true);
    });
});