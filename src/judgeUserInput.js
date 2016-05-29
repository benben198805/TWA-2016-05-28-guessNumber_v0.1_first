var judgeUserInput = {
    judgeUserInput:function(targetNumber,userInput){
        var aCount = 0;
        var containedCount = 0;
        for (var index = 0; index < targetNumber.length; index++) {
            if (targetNumber.charAt(index) == userInput.charAt(index)) {
                aCount++;
            }
            if (userInput.indexOf(targetNumber.charAt(index)) != -1) {
                containedCount++;
            }
        }
        return `${aCount}A${containedCount - aCount}B`;
    }
}