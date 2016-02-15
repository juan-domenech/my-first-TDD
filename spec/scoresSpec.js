describe("function to check grades from results", function(){
  //case 1//
  it ('should have a defined function', function(){
      expect(grades).toBeDefined();
  });
  //case 2//
  it("takes 3 parameters", function(){
    expect(grades.length).toEqual(3);
  });
  //case 3 grade return
  it("returns a grade from A to F", function(){
    result=grades(1,2,3);
    expect(result).toMatch(/^[ABCDF]$/);
  });
  //create mean
  /*it('needs to add the parameters and divide by 3', function(){
    expect(grades(10,20,30)).toEqual(20);

  })*/
  //check mean and give grade
  it("should return A if mean is 90+", function(){
    expect(grades(90,95,98)).toEqual('A');
  });

  it("should return B if mean is between 80 and 90", function(){
    expect(grades(88,85,83)).toEqual('B');
  });

 it("should return C if mean is between 70 and 80", function(){
    expect(grades(79,71,72)).toEqual('C');
  });

 it("should return D if mean is between 60 and 70", function(){
    expect(grades(61,60,65)).toEqual('D');
  });
it("should return F if mean is less than 60", function(){
    expect(grades(59, 42, 38)).toEqual('F');
  });

//make sure string values are accepted
it ("should accept string values", function(){
 expect(grades('22', 45, "56")).toEqual('F');
});

// checks for attendance at all 3 exams
it ("should return F if less that 3 parameters exist", function(){
  expect(grades(100)).toEqual('F');
  expect(grades(45,45)).toEqual('F');
});

});//end all checks