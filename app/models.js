class User {
  constructor(username, password) {
    this.username = username
    this.password = password
    this.shortenedUrls = {}
  }

  withUrl(username, password, urls) {
    const user = User(username, password)
    user.shortenedUrls = urls
    return user
  }
}
