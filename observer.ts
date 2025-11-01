type ObserverFunc<T> = (data: T) => void;

export class Observer<T = unknown> {
    private observers: ObserverFunc<T>[] = []

    subscribe(func: ObserverFunc<T>): void {
        this.observers.push(func)
    }

    unsubscribe(func: ObserverFunc<T>): void {
        this.observers = this.observers.filter(obs => obs !==func)
    }

    notify(data: T): void {
        this.observers.forEach(observer => observer(data))
    }
}

const observer1 = new Observer<string>()

const sub1 = observer1.subscribe(data => console.log("Listener 1:", data))
observer1.notify('Hello');
