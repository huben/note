
class List {
  constructor() {
    this.memory = []
    this.length = 0
  }

  get(index) {
    return this.memory[index]
  }

  push(value) {
    this.memory[this.length] = value
    this.length ++
  }

  pop() {
    if (this.length === 0) return

    let lastIndex = this.length - 1
    let value = this.memory[lastIndex]
    delete this.memory[lastIndex]
    this.length --
    return value
  }

  unshift(value) {
    let previous = value
    for (let i = 0; i < this.length; i ++) {
      let current = this.memory[i]
      this.memory[i] = previous
      previous = current
    }
    this.memory[this.length] = previous
    this.length ++
  }

  shift() {
    if (this.length === 0) return
    let value = this.memory[0]

    for (let i = 0; i < this.length - 1; i ++) {
      this.memory[i] = this.memory[i + 1]
    }
    delete this.memory[this.length - 1]
    this.length --

    return value
  }

}