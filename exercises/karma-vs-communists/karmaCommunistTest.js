describe("Penguins Vs Communists", function() {
    it("should set the parties", function() {
        var party; 
        party = new Parties("example", 50); 
        expect(party.party).toBe("example"); 
    });
    
    it("should set the populations", function() {
       var party; 
        party = new Parties("example", 50); 
        expect(party.population).toBe(50); 
    });
    
});