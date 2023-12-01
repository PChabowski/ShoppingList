function Counter() {
    this.count = 0;
    this.increment = function() {
        return this.count++
    };
    this.reset = function() {
        this.count = 0;
    }
}

export { Counter };