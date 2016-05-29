describe('guessNumber', function () {
    describe('checkRepeat', function () {
        it('when given a no repaeted numeber should return true', function () {
            var result = gameController.checkRepeat("1234");
            var expectResult = true;
            expect(result).toBe(expectResult);
        });
        it('when given a repaeted numeber should return false', function () {
            var result = gameController.checkRepeat("1134");
            var expectResult = false;
            expect(result).toBe(expectResult);
        });
    });
    
    describe('makeRandom', function () {
        it('when call makeRandom should return number', function () {
            spyOn(gameController,'checkRepeat').and.returnValue(true);
            var result = gameController.makeRandom();
            expect(parseInt(result)).toEqual(jasmine.any(Number));
        });
        it('when call makeRandom should return 4 length result', function () {
            spyOn(gameController,'checkRepeat').and.returnValue(true);
            var result = gameController.makeRandom();
            var expectLength = 4;
            expect(result.length).toBe(expectLength);
        });
    });
});
