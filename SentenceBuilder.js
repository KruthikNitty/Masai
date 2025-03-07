let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    buildSentence: function() {
        if (!this.subject || !this.verb || !this.object) {
            console.log("Incomplete sentence");
            return "Incomplete sentence";
        }
        let sentence = `${this.subject} ${this.verb} ${this.object}`;
        console.log(sentence);
        return sentence;
    },

    updateProperty: function(property, value) {
        if (this.hasOwnProperty(property)) {
            this[property] = value;
            console.log("Property updated");
            return "Property updated";
        }
        console.log("Invalid property");
        return "Invalid property";
    }
};

// Example Usage
sentenceBuilder.buildSentence(); // "I am coding"
sentenceBuilder.updateProperty("verb", "am learning");
sentenceBuilder.buildSentence(); // "I am learning coding"
sentenceBuilder.updateProperty("subject", "The cat");
sentenceBuilder.buildSentence(); // "The cat am learning coding"
sentenceBuilder.updateProperty("mood", "happy"); // "Invalid property"
sentenceBuilder.updateProperty("verb", "");
sentenceBuilder.buildSentence(); // "Incomplete sentence"