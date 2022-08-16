class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        let result = Math.round((this.minNum + this.maxNum) / 2);
        return result;
    }

    lower() {
        this.maxNum = Math.round((this.minNum + this.maxNum) / 2);
        return this.maxNum;
    }

    greater() {
        this.minNum = Math.round((this.minNum + this.maxNum) / 2);
        return this.minNum;
    }
}

module.exports = GuessingGame;
