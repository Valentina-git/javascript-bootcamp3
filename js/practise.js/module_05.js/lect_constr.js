// const Hero = function (name, hp = 100, hitPower = 2, hitSpeed = 1) {
//     this.name = name;
//     this.hp = name;
//     this.hitPower = hitPower;
//     this.hitSpeed = hitSpeed;
// }
// Hero.prototypy.getHit = function (hitPower, hitSpeed) {
//     this.hp = this.hp - hitPower * hitSpeed;
// }
// const GoodHero = function (name, hp, hitPower, hitNess) {
//     this.kindNess = kindNess;
//     Hero.call(this, name, hitPower, hitSpeed);
// }

// const spiderMan = new GoodHero('SpiderMan', 100, 5, 2, 10);
// console.log(spiderMan);

//____________________

// const Hero = function (name,xp) {
//     this.name = name;
//     this.xp = xp;
// }
// Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
// }
// const Warrior = functiom(name, xp, weapon) {
//     this.weapon = weapon;
//     Hero.call(this, name, xp);
// }
// const alex = new Warrior('Alex', 200, 'sword');
// Warrior.prototype.attack = Object.create(Hero.prototypy);