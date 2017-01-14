define('THREE_global', ['{cdnurl}build/three.min.js'], function (THREE) {
    // three.js modules require global THREE:
    //  https://github.com/mrdoob/three.js/issues/9602#issuecomment-253678783
    window.THREE = THREE;
    return THREE;
});
require.config({config});