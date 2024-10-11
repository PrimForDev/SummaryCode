'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

class CustomArray {
    _value = []
    set value (n) {
        this._value.push(n)
    }
    get value() {
        return this._value.join('\n')
    }
}

let customArray = new CustomArray()
customArray.value = 1
customArray.value = 2
customArray.value = 3
console.log(customArray.value)
console.log(customArray._value)