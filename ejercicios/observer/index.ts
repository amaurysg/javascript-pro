interface Observer {
  update: (date: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];
  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });
    this.observers.splice(index, 1);
  }
  notify(data:any){
    this.observers.forEach(observer => observer.update(data))
  }
}
