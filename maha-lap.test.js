const MahaLap = require("./maha-Lap");

describe("Test Maha-Lap", () => {
  test("Test Tamnai with Sunday expect 1", () => {
    const result = MahaLap.tamnaiWithDay("อาทิตย์");
    expect(result).toEqual(1);
  });

  test("Test Tamnai with Monday expect 2", () => {
    const result = MahaLap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });

  test("Test Tamnai with Tuesday expect 3", () => {
    const result = MahaLap.tamnaiWithDay("อังคาร");
    expect(result).toEqual(3);
  });

  test("Test Tamnai with Wednesday expect 4", () => {
    const result = MahaLap.tamnaiWithDay("พุธ");
    expect(result).toEqual(4);
  });

  test("Test Tamnai with Thursday expect 5", () => {
    const result = MahaLap.tamnaiWithDay("พฤหัสบดี");
    expect(result).toEqual(5);
  });

  test("Test Tamnai with Friday expect 6", () => {
    const result = MahaLap.tamnaiWithDay("ศุกร์");
    expect(result).toEqual(6);
  });

  test("Test Tamnai with Saturday expect 7", () => {
    const result = MahaLap.tamnaiWithDay("เสาร์");
    expect(result).toEqual(7);
  });

  test("Test Tamnai with Songkran expect 13", () => {
    const result = MahaLap.tamnaiWithDay("สงกรานต์");
    expect(result).toEqual(13);
  });

  test("Test Tamnai with Chrismas expect 25", () => {
    const result = MahaLap.tamnaiWithDay("คริสมาสต์");
    expect(result).toEqual(25);
  });

  test("Test Tamnai with Haloween expect 31", () => {
    const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
    expect(result).toEqual(31);
  });

  test("Test Tamnai with ETC expect UptoYou", () => {
    const result = MahaLap.tamnaiWithDay(60);
    expect(result).toEqual(77);
  });

  test("Test Tamnai with Words expect 3", () => {
    const result = MahaLap.tamnaiWithStory("งู");
    expect(result).toEqual(3);
  });

  test("Test Tamnai with Words expect 6", () => {
    const result = MahaLap.tamnaiWithStory("แมว");
    expect(result).toEqual(6);
  });

  test("Test Tamnai with time กลางวัน random = 0.98 return 0.98", () => {
    global.Math.random = jest.fn(() => 0.98);
    const result = MahaLap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.98);
  });

  test("Test Tamnai with time กลางวัน random = 0.4 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = MahaLap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลางวัน random = 0.5 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = MahaLap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลางวัน random = 0.4 return 0.4", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = MahaLap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.4);
  });

  test("Test Tamnai with time กลางวัน random = 0.6 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.6);
    const result = MahaLap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลางวัน random = 0.5 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.5);
    const result = MahaLap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with ฝันอาทิตย์ ตอนกลางวัน สอบเนตเวิร์ค", () => {
    global.Math.random = jest.fn(() => 0.89);
    const result = MahaLap.TwoFiveZero("อาทิตย์", "กลางวัน", "สอบเนตเวิร์ค"); //1+(0.89*100)+78
    expect(result).toEqual(168);
  });

  test("Test Tamnai with ฝันจันทร์ ตอนกลางคืน เจอแมว", () => {
    global.Math.random = jest.fn(() => 0.32);
    const result = MahaLap.TwoFiveZero("จันทร์", "กลางคืน", "เจอแมว"); //2+(0.32*100)+21
    expect(result).toEqual(550);
  });
});
