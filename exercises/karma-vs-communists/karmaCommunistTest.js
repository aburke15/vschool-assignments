describe("Penguins Vs Communists", function() {
    it("should set the parties", function() {
        var party = new Parties("example", 50); 
        expect(party.party).toBe("example"); 
    });
    
    it("should set the populations", function() {
       var party = new Parties("example", 50); 
        expect(party.population).toBe(50); 
    });
    
    it("should set a party to attack first", function() {
        var party = new Parties("example", 50); 
        expect(sendNuke(party.party, onHit, onMiss)).toBe(); 
    }); 
    
    it("should hit one party", function() {
        var party = new Parties("example", 50); 
        expect(onHit(party.party)).toBe(); 
    }); 
    
    it("should miss one party", function() {
        var party = new Parties("example", 50); 
        expect(onMiss(party.party)).toBe(); 
    }); 
    
    it("should have a timed delay", function() {
        expect(setTimeout(function() {}), 1000).toBe(2); 
    });
    
    it("should have recursive point to keep game going", function() {
       expect(game()).toBe();  
    });
    
});