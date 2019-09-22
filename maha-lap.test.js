const MahaLap = require("./maha-lap");
describe("Test maha-Lap", () => {
  test("Test Tamnai With day", () => {
    const result = MahaLap.tamnaiWithmDay("วันจันทร์");
    expect(result).toEqual(2);
  });
  test("Test Tamnai With day", () => {
    const result = MahaLap.tamnaiWithmDay("วันอังคาร");
    expect(result).toEqual(3);
  });
  test("Test Tamnai With day", () => {
    const result = MahaLap.tamnaiWithmDay("พุธ");
    expect(result).toEqual(4);
});
