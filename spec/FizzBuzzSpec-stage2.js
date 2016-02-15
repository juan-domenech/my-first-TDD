  describe("A function FizzBuzz()", function() {
    it("should be defined", function() {
        expect( FizzBuzz ).toBeDefined();
      });

    it("should not accept any parameter", function() {
      expect( FizzBuzz.length ).toEqual(0);
    });

    it("should return a string", function() {
      expect( typeof( FizzBuzz() ) ).toEqual("string");
    });

    it("should return 100 lines", function() {
      expect( FizzBuzz().split('\n').length ).toEqual( 100 );
    });

    it("should return 'FizzBuzz' for #90", function () {
      var result = FizzBuzz().split('\n')[90-1];
      expect( result ).toEqual('FizzBuzz');
    });

    it("should return 'Fizz' for #33", function () {
      var result = FizzBuzz().split('\n')[33-1];
      expect( result ).toEqual('Fizz');
    });

    it("should return 'Buzz' for #100", function () {
      var result = FizzBuzz().split('\n')[100-1];
      expect( result ).toEqual('Buzz');
    });

    it("should return '97' for #97", function () {
      var result = FizzBuzz().split('\n')[97-1];
      expect( result ).toEqual('97');
    });

    // Test for Stage2
    it("(Stage-2) should return 'Buzz' for #51", function () {
      var result = FizzBuzz().split('\n')[51-1];
      expect( result ).toEqual('Buzz');
    });

    // Test for Stage2
    it("(Stage-2) should return 'Fizz' for #31", function () {
      var result = FizzBuzz().split('\n')[31-1];
      expect( result ).toEqual('Fizz');
    });

  });