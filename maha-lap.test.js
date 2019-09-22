const MahaLap = require("./maha-lap");
describe("Test maha-Lap", () => {
  test("Test Tamnai With day", () => {
    const result = MahaLap.tamnaiWithmDay("วันจันทร์");
    expect(result).toEqual(2);
  });
});
