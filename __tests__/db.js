const obj = require('../src/db/db.js');

/**
 * Like many testing frameworks, in Jest we use the "describe" function to
 * separate our tests into sections. They make your test outputs readable.
 *
 * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
 * functions inside of "describe" blocks and they will only run for tests
 * inside that describe block. You can even nest describes within describes!
 */
describe('db unit tests', () => {
  /**
   * Jest runs the "beforeAll" function once, before any tests are executed.
   * Here, we write to the file and then reset our database model. Then, we
   * invoke the "done" callback to tell Jest our async operations have
   * completed. This way, the tests won't start until the "database" has been
   * reset to an empty Array!
   */
  // beforeAll((done) => {
  //   fs.writeFile(testJsonFile, JSON.stringify([]), () => {
  //     db.reset();
  //     done();
  //   });
  // });

  // afterAll((done) => {
  //   fs.writeFile(testJsonFile, JSON.stringify([]), done);
  // });

  describe('createCard and readCard test', () => {
    it('creates a new card with a valid entry', async () => {
      const newCard = {
        title: 'title',
        front: 'front',
        back: 'back',
        difficulty: 0,
        hints: 'hints',
      };
      const result = await obj.createCard(newCard);
      expect(result.back).toBe('back');
      expect(result.front).toBe('front');
      expect(result.difficulty).toBe(0);
      expect(result.hints).toBe('hints');
      expect(result).not.toBeInstanceOf(Error);
    });
  });
  // TODO: Finish unit testing the sync function

  //   xit('overwrites previously existing markets', () => {
  //     // pull db as is
  //     const oldDB = JSON.parse(fs.readFileSync(testJsonFile));
  //     // write a new market list
  //     const marketList = [
  //       { location: 'here', cards: 12 },
  //       { location: 'there', cards: 10 },
  //     ];
  //     // put the new market list in our db
  //     const result = db.sync(marketList);
  //     expect(result).not.toBeInstanceOf(Error);
  //     // check if db is changed from what we pulled
  //     const newDB = JSON.parse(fs.readFileSync(testJsonFile));
  //     expect(newDB).not.toEqual(oldDB);
  //   });

  //   xit('returns an error when location and/or cards fields are not provided', () => {
  //     // invoke db.sync passing in array with object with only location as a property
  //     const result = db.sync([{ location: 'randomville' }]);
  //     expect(result).toBeInstanceOf(Error);
  //     const result1 = db.sync([{ cards: 11 }]);
  //     expect(result1).toBeInstanceOf(Error);
  //     const result2 = db.sync([{ nonsense: 'more nonsense' }]);
  //     expect(result2).toBeInstanceOf(Error);
  //   });

  //   /**
  //    *  TODO: Type validation is not yet correctly implemented! Follow the TDD
  //    *  (test driven development) approach:
  //    *    1. Write a test describing the desired feature (db.sync returns a
  //    *      TypeError when the types are wrong)
  //    *    2. Confirm that your tests fail
  //    *    3. Follow the errors to implement your new functionality
  //    */
  //   xit('returns an error when location value is not a string', () => {
  //     // expected functionality: return an error if location given is not a string
  //     // test: provide a market list with an object that has a location that's not a string (all cases?)
  //     const marketListWithNumber = [
  //       { location: 1234, cards: 2 },
  //       { location: 'some place', cards: 123 },
  //     ];
  //     const resultWithNumber = db.sync(marketListWithNumber);
  //     expect(resultWithNumber).toBeInstanceOf(Error);
  //     const marketListWithUndefined = [
  //       { location: undefined, cards: 2 },
  //       { location: 'some place', cards: 123 },
  //     ];
  //     const resultWithUndefined = db.sync(marketListWithUndefined);
  //     expect(resultWithUndefined).toBeInstanceOf(Error);
  //   });

  //   xit('returns an error when cards value is not a number', () => {
  //     // returns an error if cards value is not a number
  //     // test: provide a market list with an object where the value of cards property is not a number. this should throw an error
  //     const marketList = [
  //       { location: 'hello', cards: null },
  //       { location: 'johanna', cards: undefined },
  //     ];
  //     const result = db.sync(marketList);
  //     expect(result).toBeInstanceOf(Error);
  //     const marketList2 = [
  //       { location: 'hello', cards: 'goodbye' },
  //       { location: 'johanna', cards: 'christian' },
  //     ];
  //     const result2 = db.sync(marketList2);
  //     expect(result2).toBeInstanceOf(Error);
  //   });
  // });

  // // Extension TODO: Unit test the #find and #drop functions
  // xdescribe('#find', () => {
  //   xit('returns list of all markets from the json file', () => {
  //     const marketList = JSON.parse(fs.readFileSync(testJsonFile));
  //     expect(db.find()).toEqual(marketList);
  //   });

  //   xit('works if the list of markets is empty', () => {});
  //   fs.writeFileSync(testJsonFile, JSON.stringify([]));
  //   expect(db.find()).toEqual([]);
  // });

  // xdescribe('#drop', () => {
  //   xit('writes an empty array to the json file', () => {});
  //   fs.writeFileSync(
  //     testJsonFile,
  //     JSON.stringify([{ location: 'hello', cards: 10 }]),
  //   );
  //   db.drop();
  //   const newDB = JSON.parse(fs.readFileSync(testJsonFile));
  //   expect(newDB).toEqual([]);
  // });
});
