'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

//Creating

class BaseStatus {
    name = 'Player'
    baseClass = 'Main'
    hp = 100 //เลือด
    ap = 10  //พลัง
    atk = 10 //ค่าการโจมตี
    died = false
    constructor(playerName){
        this.name = playerName
    }
    attack (target){
        if(this.ap > 0){
            target.hp  -= this.atk  //ลดค่า hp ของเป้าหมายตามจำนวนค่าการโจมตี
            this.ap--
            if(target.hp <= 0){
                target.die()
            }
        }
    }
    die(){
        this.died = true
    }
    showStatus(){
        if(this.died){
            return this.name + ' has been died'
        }else{
           return `${this.name} (class=${this.baseClass}) (hp=${this.hp}) (ap=${this.ap}) (atk=${this.atk})'`
        }
    }

}

class Tank extends BaseStatus {
    baseClass = 'Tank'
    hp = 200 //เลือด
    ap = 20  //พลัง
    atk = 5 //ค่าการโจมตี

}

class Hunter extends BaseStatus {
    baseClass = 'Hunter'
    hp = 50 //เลือด
    atk = 15 //ค่าการโจมตี
}

let a = new Hunter('A')
let b = new Tank('B')

a.attack(b)
a.attack(b)
a.attack(b)
a.attack(b)
a.attack(b)
a.attack(b)
a.attack(b)
a.attack(b)
a.attack(b)

console.log(a.showStatus())
console.log(b.showStatus())