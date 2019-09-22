class MahaLap {
  static tamnaiWithDay(day) {
    switch (day) {
      case "อาทิตย์":
        return 1;
      case "จันทร์":
        return 2;
      case "อังคาร":
        return 3;
      case "พุธ":
        return 4;
      case "พฤหัสบดี":
        return 5;
      case "ศุกร์":
        return 6;
      case "เสาร์":
        return 7;
      case "สงกรานต์":
        return 13;
      case "ฮาโลวีน":
        return 31;
      case "คริสมาสต์":
        return 25;
      default:
        return 77;
    }
  }

  static tamnaiWithStory(story) {
    const n = story.length;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum % 100;
  }

  static tamnaiWithTime(time) {
    const randomNumber = Math.random();

    if (time === "กลางวัน") {
      if (randomNumber >= 0.5) {
        return randomNumber;
      } else {
        return 0.5;
      }
    } else if (time === "กลางคืน") {
      if (randomNumber <= 0.5) {
        return randomNumber;
      } else {
        return 0.5;
      }
    }
  }

  static TwoFiveZero(day, time, story) {
    const resultDay = this.tamnaiWithDay(day);
    const resultTime = this.tamnaiWithTime(time);
    const resultStory = this.tamnaiWithStory(story);
    console.log(day, story, time);
    let num = resultDay + resultTime * 100 + resultStory;
    console.log(resultTime);
    if (num < 100) {
      return num * 10;
    } else return num;
  }
}

module.exports = MahaLap;
