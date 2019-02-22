var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            return ("Test failed: did not match")
        } else {
            return ("Test passed: match checks out ")
        }
    },

    isEqual: function(assertionToCheck, valueToEqual) {
        if (assertionToCheck !== valueToEqual) {
            return ("Test failed: not equal")
        } else {
            return ("Test passed: equal")
        }
    },

    contains: function(assertionToCheck, shouldContain) {
    if (assertionToCheck.indexOf(shouldContain) !== -1) {
            return ("Test passed: " + shouldContain + " found")
        } else { return ("Test failed: Not found")
        }
    }
};
