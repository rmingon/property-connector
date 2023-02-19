# Property connector with channel name

### @Connector(name)

```bash
   npm i property-connector
```

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

```bash
  npm run dev
  gogo2
  gogo1
```