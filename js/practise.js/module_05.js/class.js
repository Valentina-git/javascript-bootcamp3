// 1. Реализуй модель пользователя

class User {
  // Добавь свойства:
  // name,
  // age,
  // role(по умолчанию user),
  // permissions(по умолчаию пустой массив)
  //   isOnline(по умолчаию пустой false)
  // isAuthenticated(по умолчаию пустой false)
    constructor({name,age}, role = 'user',permissions=[],isOnline=false,isAuthenticated=false) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.permissions = permissions;
        this.isOnline = isOnline;
        this.isAuthenticated = isAuthenticated;
    }
    get newPermissions() { 
        return this.permissions;
    }
    set newPermissions(value) {
        // this.permissions.push(value);
         this.permissions = [...this.permissions, value];
    }
    get newRole() { 
         return this.role;
    }
    set newRole(admin) {
         this.role = admin;
    }
  //   добавить геттер и сеттер для свойства permissions.
  //   Сеттер будет записывать в permissions новые данные
    // добавить геттер и сеттер для свойства role. 
    //Будут записываться admin или partner

    //   Добавь код для того, 
    //чтобы пользователь вошел в аккаунт. 
    //Свойство isAuthenticated измени в true

    authenticate() {
        this.isAuthenticated = true;
    }

    //   Добавь код для того, 
    //чтобы пользователь стал активным.
    //Свойство isOnline измени в true
    connect() {
      this.isOnline = true;
    }

    //   Добавь код для того, 
    //чтобы пользователю можно было расширить 
    //права доступа.БУдут записываться
  //   данные: "html", "js", "react", "node"
    addPermission(permission) {
      this.permissions = [...this.permissions, permission]
  }
}

const alex = new User({ name: "Alex", age: 25 }, 'partner');


alex.authenticate();
console.log(alex.newPermissions);
// Проверь функционал
alex.newPermissions = 'html';
alex.newPermissions = 'js';
console.log(alex.newPermissions);
// alex.newRole = 'admin';
console.log(alex.newRole);
console.log(alex);

alex.addPermission("react");
alex.addPermission("node");
console.log(alex);
console.log(alex.permissions);
// 2. Расширь функционал базового класса 
//на свое усмотрение.
// Как вариант, ты можешь:
// Добавить новый класс Admin

// Добавить ему собственные свойства 
//логирования его данных.
// Дописать ему методы disconnect(), removePermissions()

class Admin extends User {
    constructor({name,age}, ...rest) {
        super({ name, age }, ...rest);
        this.data = rest
        //this.rate = rate;
    }
    getInfo() {
        //console.log(this.name, this.age, this.data);
        for (const item of this.data) {
            console.log(item);
        }
    }
    disconnect() { }
    removePermissions() {}
}
const nikita = new Admin({ name: 'Nikita', age: 30 }, 'admin', [], true, true);
console.log(nikita);
nikita.getInfo()