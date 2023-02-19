# Property connector with channel name

##### This library is maybe not a good practice and you can probably make it by yourself

### @Connector(channel_name)

### Install
```bash
   npm i property-connector
```

### Use
```typescript
import Connector from "property-connector";

class Bar {
  @Connector('users')
  users: Subject<any> | undefined
}

class Foo {
  @Connector('users')
  users: Subject<any> | undefined
}

let foo = new Foo()
foo.users?.subscribe((next) => console.log(next))

let bar = new Bar()
bar.users?.next({
  name: "John"
})


class Zerg {
  @Connector('login')
  loginEvent: Subject<any> | undefined

  login(mail: string, pass: string) {
    this.loginEvent?.next({mail, pass})
  }
}

class Log {
  @Connector('login')
  loginEvent: Subject<any> | undefined
}

let log = new Log()
log.loginEvent?.subscribe(log => console.log(log))

let zerg = new Zerg()
zerg.login("test@test.fr", "password")
```

### Result
```bash
  npm run dev
    { name: 'John' }
    { mail: 'test@test.fr', pass: 'password' }
```