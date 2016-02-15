  describe("A function peopleWithAgeDrink()", function() {
    it("should be defined", function() {
        expect( peopleWithAgeDrink ).toBeDefined();
      });

    it("should return a string", function() {
    	var result = peopleWithAgeDrink();
        expect( typeof(result) ).toEqual("string");
      });

    it("should return the word drink", function() {
    	var result = peopleWithAgeDrink();
        expect( result.indexOf("drink") ).toBeGreaterThan(-1);
      });

    it("should return 'drink toddy' when age < 14", function() {
        expect( peopleWithAgeDrink(13) ).toEqual("drink toddy");
      });

    it("should return 'drink coke' when age < 18", function() {
        expect( peopleWithAgeDrink(14) ).toEqual("drink coke");
      });

    it("should return 'drink beer' when age < 21 and > 18", function() {
        expect( peopleWithAgeDrink(20) ).toEqual("drink beer");
      });

    it("should return 'drink whiskey' when age >= 21", function() {
        expect( peopleWithAgeDrink(21) ).toEqual("drink whiskey");
      });
 });





