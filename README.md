# Property connector with channel name

## This library is maybe not a good practice and you can probably make it by yourself

### @Connector(channel_name)

- TODO
- [ ] Inject type 
- [ ] emit value of property

### Install
```bash
   npm i property-connector
```

### Use
```typescript
import Connector from "property-connector";

class Bar {

  @Connector('toto')
  test2: Subject<any> | undefined
}



class Foo {

  @Connector('toto')
  test1: Subject<any> | undefined
}



class Zerg {

  @Connector('toto')
  test1: Subject<any> | undefined
}


let foo = new Foo()
foo.test1?.subscribe((next) => console.log(next))

let bar = new Bar()
bar.test2?.next("gogo2")

let zerg = new Zerg()
zerg.test1?.next("gogo1")
```

### Result
```bash
  npm run dev
  gogo2
  gogo1
```