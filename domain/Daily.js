class Daily {
    constructor(text, imageUrl, date) {
        this.date = date
        this.text = text
        this.imageUrl = imageUrl
    }

    toJson() {
        return JSON.stringify({
            date: this.date,
            text: this.text,
            imageUrl: this.imageUrl,
        })
    }
}