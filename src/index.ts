import {Subject} from "rxjs";

let sujects = new Map<string, Subject<any>>()
export default function Connector(name: string) {
  return function<T>(target: T, key: keyof T) {

    Object.defineProperty(target, key, {
      set: (val) => {throw "cannot set this property"},
      get: () => {
        if (sujects.has(name)) {
          return sujects.get(name)
        } else {
          const sub = new Subject()
          sujects.set(name, sub)
          return sub
        }
      }
    })
  }
}
