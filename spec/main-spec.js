describe('guessNumber', function () {
    describe('checkRepeat', function () {
        it('when given a no repaeted numeber should return true', function () {
            var result = makeRandom.checkRepeat("1234");
            var expectResult = true;
            expect(result).toBe(expectResult);
        });
        it('when given a repaeted numeber should return false', function () {
            var result = makeRandom.checkRepeat("1134");
            var expectResult = false;
            expect(result).toBe(expectResult);
        });
    });
    
    describe('makeRandom', function () {
        it('when call makeRandom should return number', function () {
            var result = makeRandom.makeRandom();
            expect(parseInt(result)).toEqual(jasmine.any(Number));
        });
        it('when call makeRandom should return 4 length result', function () {
            var result = makeRandom.makeRandom();
            var expectLength = 4;
            expect(result.length).toBe(expectLength);
        });
        it('when call makeRandom should return different result in 10 round', function () {
            var isRandom=true;
            var firstNumber=makeRandom.makeRandom();
            for (var index = 0; index < 9; index++) {
                var nextNumber=makeRandom.makeRandom();
                isRandom=isRandom&&(firstNumber!=nextNumber);
            };
            expect(isRandom).toBe(true);
        });
    });


    describe('checkUserInputIsNumber', function () {
        it('when call checkUserInputIsNumber with 123a should return true', function () {
            var result = validateUserInput.checkUserInputIsNumber("123a");
            expect(result).toEqual(false);
        });
        it('when call checkUserInputIsNumber with 1235 should return false', function () {
            var result = validateUserInput.checkUserInputIsNumber("1235");
            expect(result).toEqual(true);
        });
    });

    describe('validateUserInput', function () {
        it('when call validateUserInput with 1234 should return true', function () {
            spyOn(makeRandom,'checkRepeat').and.returnValue(true);
            var result = validateUserInput.validateUserInput("1234");
            expect(result).toEqual(true);
        });
        it('when call validateUserInput with 123a should return true', function () {
            spyOn(makeRandom,'checkRepeat').and.returnValue(true);
            var result = validateUserInput.validateUserInput("123a");
            expect(result).toEqual(false);
        });
        it('when call validateUserInput with 123 should return true', function () {
            spyOn(makeRandom,'checkRepeat').and.returnValue(true);
            var result = validateUserInput.validateUserInput("123");
            expect(result).toEqual(false);
        });
        it('when call validateUserInput with 1123 should return true', function () {
            spyOn(makeRandom,'checkRepeat').and.returnValue(false);
            var result = validateUserInput.validateUserInput("1123");
            expect(result).toEqual(false);
        });
    });

    describe('judgeUserInput', function () {
        it('when call judgeUserInput with 1234 and 1234 should return 4A0B', function () {
            var result = judgeUserInput.judgeUserInput("1234","1234");
            expect(result).toEqual("4A0B");
        });
        it('when call judgeUserInput with 1234 and 5678 should return 0A0B', function () {
            var result = judgeUserInput.judgeUserInput("1234","5678");
            expect(result).toEqual("0A0B");
        });
        it('when call judgeUserInput with 1234 and 4321 should return 0A4B', function () {
            var result = judgeUserInput.judgeUserInput("1234","4321");
            expect(result).toEqual("0A4B");
        });
        it('when call judgeUserInput with 1234 and 1324 should return 2A2B', function () {
            var result = judgeUserInput.judgeUserInput("1234","1324");
            expect(result).toEqual("2A2B");
        });
    });

    describe('gameController', function () {
        it('when call beginGame should set targetNumber and round', function () {
            gameController.beginGame();
            expect(gameController.targetNumber.length).toBeGreaterThan(0);
            expect(gameController.round).toEqual(1);
        });
        it('when call endGame should set targetNumber and round', function () {
            gameController.endGame();
            expect(gameController.targetNumber.length).toEqual(0);
            expect(gameController.round).toEqual(0);
        });

        it('when call userInput with Illegal number at first time return Illegal input', function () {
            spyOn(validateUserInput,'validateUserInput').and.returnValue(false);
            var result = gameController.userInput("123a");
            expect(result).toEqual("Illegal input");
        });
        it('when call userInput with Illegal number at seconde time return Illegal input', function () {
            spyOn(validateUserInput,'validateUserInput').and.returnValue(true).and.returnValue(false);
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue("2A2B");
            gameController.userInput("1234");
            var result = gameController.userInput("123a");
            expect(result).toEqual("Illegal input");
            expect(gameController.round).toEqual(1);
        });


        it('when call userInput with right number on the fist time should return Congratulation!', function () {
            spyOn(makeRandom,'checkRepeat').and.returnValue(true);
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue("4A0B");
            var result = gameController.userInput("1234");
            expect(result).toEqual("Congratulation!");
        });
        it('when call userInput with right number on the third time should return Congratulation!', function () {
            spyOn(makeRandom,'checkRepeat').and.returnValue(true).and.returnValue(true).and.returnValue(true);
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue("2A2B").and.returnValue("2A2B").and.returnValue("4A0B");
            gameController.userInput("1234");
            gameController.userInput("1234");
            var result=gameController.userInput("1234");
            expect(result).toEqual("Congratulation!");
        });
        it('when call userInput with right number on the sixth time should return Congratulation!', function () {
            spyOn(makeRandom,'checkRepeat').and.returnValue(true).and.returnValue(true).and.returnValue(true).and.returnValue(true).and.returnValue(true).and.returnValue(true);
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue("2A2B").and.returnValue("2A2B").and.returnValue("2A2B").and.returnValue("2A2B").and.returnValue("2A2B").and.returnValue("4A0B");
            gameController.userInput("1234");
            gameController.userInput("1234");
            gameController.userInput("1234");
            gameController.userInput("1234");
            gameController.userInput("1234");
            var result = gameController.userInput("1234");
            expect(result).toEqual("Congratulation!");
        });
        it('when call userInput with wrong number on the sixth time should return Game Over', function () {
            spyOn(makeRandom,'checkRepeat').and.returnValue(true).and.returnValue(true).and.returnValue(true).and.returnValue(true).and.returnValue(true).and.returnValue(true);
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue("2A2B").and.returnValue("2A2B").and.returnValue("2A2B").and.returnValue("2A2B").and.returnValue("2A2B").and.returnValue("2A2B");
            gameController.userInput("1234");
            gameController.userInput("1234");
            gameController.userInput("1234");
            gameController.userInput("1234");
            gameController.userInput("1234");
            var result = gameController.userInput("1234");
            expect(result).toEqual("Game Over");
        });
    });
});
