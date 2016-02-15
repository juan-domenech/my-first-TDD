  describe("A function rockPaperScissors()", function() {
    it("should be defined", function() {
        expect( rockPaperScissors ).toBeDefined();
      });

    it("should accept two parameters", function() {
      expect( rockPaperScissors.length ).toEqual(2);
    });

    it("should fail with 'ERROR!' when there are no players", function() {
      expect( rockPaperScissors() ).toEqual('ERROR!');
    });

    it("should return a string when there is at least player1 present", function() {
      expect( typeof( rockPaperScissors('PAPER') ) ).toEqual("string");
    });

    it("should fail with 'ERROR!' when player1 is not a valid option", function() {
      expect( rockPaperScissors('WATER') ).toEqual('ERROR!');
    });

    it("should fail with 'ERROR!' when player2 is not a valid option", function() {
      expect( rockPaperScissors('PAPER','WATER') ).toEqual('ERROR!');
    });

    it("should return 'tie' when both players choose PAPER", function() {
     expect( rockPaperScissors('PAPER','PAPER') ).toMatch(/tie!$/);
    });

    it("should return 'tie' when both players choose ROCK", function() {
     expect( rockPaperScissors('ROCK','ROCK') ).toMatch(/tie!$/);
    });

    it("should return 'tie' when both players choose SCISSORS", function() {
     expect( rockPaperScissors('SCISSORS','SCISSORS') ).toMatch(/tie!$/);
    });

    it("should return 'SCISSORS wins!' when PAPER vs SCISSORS", function() {
      expect( rockPaperScissors('PAPER','SCISSORS') ).toMatch(/SCISSORS wins!$/);
    });

    it("should return 'SCISSORS wins!' when PAPER vs ROCK", function() {
      expect( rockPaperScissors('PAPER','ROCK') ).toMatch(/PAPER wins!$/);
    });

    it("should return 'PAPER wins!' when ROCK vs PAPER", function() {
      expect( rockPaperScissors('ROCK','PAPER') ).toMatch(/PAPER wins!$/);
    });

    it("should return 'ROCK wins!' when ROCK vs SCISSORS", function() {
      expect( rockPaperScissors('ROCK','SCISSORS') ).toMatch(/ROCK wins!$/);
    });

    it("should return 'ROCK wins!' when SCISSORS vs ROCK", function() {
      expect( rockPaperScissors('SCISSORS','ROCK') ).toMatch(/ROCK wins!$/);
    });

    it("should return 'SCISSORS wins!' when SCISSORS vs PAPER", function() {
      expect( rockPaperScissors('SCISSORS','PAPER') ).toMatch(/SCISSORS wins!$/);
    });


  });