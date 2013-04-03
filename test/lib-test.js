module("lib-test");

asyncTest ("async test", function() {
    console.log("Beginning test...");
    setTimeout(function() {
        ok(true, "true is true");
        start();
        console.log("Test should now end...");
    }, 200);
});
