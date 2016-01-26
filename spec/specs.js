describe('movieName', function() {
  it("will setup an object for movie titles", function() {
    var movie = new Movie("Carol");
    expect(movie.title).to.equal("Carol");
    expect(movie.run).to.eql([]);
    expect(movie.time).to.eql([]);
    expect(movie.age).to.eql([]);
  });
});
