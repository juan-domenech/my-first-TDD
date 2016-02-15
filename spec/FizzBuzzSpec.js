  describe("A function FizzBuzz()", function() {
    it("should be defined", function() {
        expect( FizzBuzz ).toBeDefined();
      });

    it("should return a string", function() {
      var result = FizzBuzz();
      expect( typeof(result) ).toEqual("string");
    });

    it("should return 100 lines", function() {
      var result = FizzBuzz().split('\n');
      expect( result.length ).toEqual(100);
    });

    it("should return 'FizzBuzz' for 90", function () {
      var result = FizzBuzz().split('\n')[90-1];
      expect( result ).toEqual('FizzBuzz');
    });

    it("should return 'Fizz' for 33", function () {
      var result = FizzBuzz().split('\n')[33-1];
      expect( result ).toEqual('Fizz');
    });

    it("should return 'Buzz' for 100", function () {
      var result = FizzBuzz().split('\n')[100-1];
      expect( result ).toEqual('Buzz');
    });

    it("should return '97' for 97", function () {
      var result = FizzBuzz().split('\n')[97-1];
      expect( result ).toEqual('97');
    });


  });