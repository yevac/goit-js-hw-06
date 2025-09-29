class StringBuilder {
    constructor(initialValue) {
        this.value = initialValue;
    }

    getValue() {
        return this.value;
    }

    padEnd(str) {
        str += this.value;
        this.value = str;
    }

    padStart(str) {
        this.value += str;
    }

    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

