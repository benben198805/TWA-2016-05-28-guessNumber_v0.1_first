var validateUserInput = {
    checkUserInputIsNumber:function(userInput){
        var isNumber=true;        
        for (var index = 0; index < userInput.length; index++) {
            isNumber=isNumber&&!isNaN(parseInt(userInput[index]));
        };
        return isNumber;
    },
    validateUserInput:function(userInput){
        var isNotRepeated=makeRandom.checkRepeat(userInput);
        var isFourLength=userInput.length==4;
        var isNumber=this.checkUserInputIsNumber(userInput);

        var returenMes=isNotRepeated&&isFourLength&&isNumber;
        return returenMes;
    }
}