var makeRandom = {
    checkRepeat: function (randomNumber) {
        for (var index = 0; index < randomNumber.length; index++) {
            for (var target = index + 1; target < randomNumber.length; target++) {
                if (randomNumber[index] == randomNumber[target]) {
                    return false;
                }
            }
        }
        return true;
    },
    makeRandom: function () {
        var randomNumber = Math.round(Math.random() * 10000).toString();
        while (!this.checkRepeat(randomNumber)||randomNumber.length!=4) {
            randomNumber = Math.round(Math.random() * 10000).toString();
        }
        return randomNumber;
    }
}