var gameController = {
    targetNumber:"",
    round:0,
    maxRound:6,

    beginGame:function(){
        this.targetNumber=makeRandom.makeRandom();
        this.round++;
    },
    userInput:function(userInput){
        if(this.round==0)
        {
            this.beginGame();
        }

        var result="";
        if(validateUserInput.validateUserInput(userInput)){
            if(this.round<this.maxRound){
                result=judgeUserInput.judgeUserInput(userInput);
                if(result=="4A0B"){
                    result="Congratulation!";
                    this.endGame();
                }else{
                    this.round++;
                }
            }else{
                result="Game Over";
                this.endGame();
            }
        }else{
            result="Illegal input";
        }
        return result;
    },
    endGame:function(){
        this.targetNumber="";
        this.round=0;
    }
}