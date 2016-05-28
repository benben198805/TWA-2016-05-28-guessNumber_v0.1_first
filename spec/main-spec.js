describe('guessNumber', function () {
    describe('guessNumber', function () {
        it('should print correct text', function () {

            spyOn(console, 'log');

            var result = checkRandom(inputs);

            var expectText = "";

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });

});
