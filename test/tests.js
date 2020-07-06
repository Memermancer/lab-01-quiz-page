// IMPORT MODULES under test here:
// import example from '../example.js';
import isYes from '../is-yes';

const test = QUnit.test;

test('does is-yes work', function(assert) {
    const result = isYes('Y');
    const result1 = isYes('YES');
    const result2 = isYes('yes');
    const result3 = isYes('uhhuh');
    const result4 = isYes('yAsSs');

    //Assert
    assert.equal(result, true);
    assert.equal(result1, true);
    assert.equal(result2, true);
    assert.equal(result3, false);
    assert.equal(result4, true);
});
