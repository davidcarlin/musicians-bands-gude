const { sequelize } = require("./db");
const { Band, Musician } = require("./index");

describe("Band and Musician Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const testBand = await Band.create({
      name: "Arctics",
      genre: "rock",
    });
    expect(testBand.name).toBe("Arctics");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const testMusician = await Musician.create({
      name: "Alex Turner",
      instrument: "guitar",
    });
    expect(testMusician.name).toBe("Alex Turner");
  });
});
