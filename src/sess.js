export default {
  get (name) {
    let value = window.sessionStorage.getItem(name)
    if (/^\{.*\}$/.test(value)) value = JSON.parse(value)
    return value
  },
  set (name, value) {
    if (typeof value === typeof {}) value = JSON.stringify(value)
    return window.sessionStorage.setItem(name, value)
  },
  remove (name) {
    return window.sessionStorage.removeItem(name)
  }
}
