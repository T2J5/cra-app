function getType(para) {
  return Object.prototype.toString.call(para)
}

export {
  getType,
}