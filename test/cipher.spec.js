describe("cipher", () => {

  it("should be an object", () => {
    assert.equal(typeof cipher, "object");
  });

  //ENCODE
  describe("cipher.encode", () => {

    it("should be a function", () => {
      assert.equal(typeof cipher.encode, "function");
    });
    //teste encode letras maiúsculas no offset negativo  
    it("should return \"TUVWXYZABCDEFGHIJKLMNOPQRS\" for \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" with offset -33", () => {
      assert.equal(cipher.encode(-33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "TUVWXYZABCDEFGHIJKLMNOPQRZ");
    });  
    //teste encode cifra letras maiúsculas no offset positivo  
    it("should return \"HIJKLMNOPQRSTUVWXYZABCDEFG\" for \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" with offset 33", () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFS");
    });

    // Hacker edition
    //teste encode cifra letras minúsculas no offset negativo  
    it("should return \"tuvwxyzabcdefghijklmnopqrs\" for \"abcdefghijklmnopqrstuvwxyz\" with offset -33", () => {
      assert.equal(
        cipher.encode(-33, "abcdefghijklmnopqrstuvwxyz"), "tuvwxyzabcdefghijklmnopqrs"
      );
    });
    //teste encode letras minúsculas no offset positivo
    it("should return \"hijklmnopqrstuvwxyzabcdefg\" for \"abcdefghijklmnopqrstuvwxyz\" with offset 33", () => {
      assert.equal(
        cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg"
      );
    });

    // Hacker edition
    //teste encode simbolos
    it("should return \" !@\" for \" !@\"", () => {
      assert.equal(cipher.encode(33, " !@"), " !@");
    });
  });

  //DECODE
  describe("cipher.decode", () => {

    it("should be a function", () => {
      assert.equal(typeof cipher.decode, "function");
    });
    //teste decode letras maiúsculas no offset negativo 
    it("should return \"HIJKLMNOPQRSTUVWXYZABCDEFG\" for \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" with offset -33", () => {
      assert.equal(cipher.decode(-33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    //teste decode letras maiúsculas no offset positivo
    it("should return \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" for \"HIJKLMNOPQRSTUVWXYZABCDEFG\" with offset 33", () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    // Hacker edition
    //teste decode letras minusculas no offset negativo
    it("should return \"hijklmnopqrstuvwxyzabcdefg\" for \"abcdefghijklmnopqrstuvwxyz\" with offset -33", () => {
      assert.equal(
        cipher.decode(-33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg"
      );
    });
    //teste decode letras minusculas no offset positivo
    it("should return \"abcdefghijklmnopqrstuvwxyz\" for \"hijklmnopqrstuvwxyzabcdefg\" with offset 33", () => {
      assert.equal(
        cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz"
      );
    });

    // Hacker edition
    //teste decode simbolos
    it("should return \"!@\" para \" !@\"", () => {
      assert.equal(cipher.decode(33, " !@"), " !@");
    });
  });

});
