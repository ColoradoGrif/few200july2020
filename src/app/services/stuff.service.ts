import { BehaviorSubject, Observable } from 'rxjs';


export class StuffService {

  private subject: BehaviorSubject<string[]>;
  private list = ['Cat', 'Dog', 'Mouse'];

  constructor() {
    this.subject = new BehaviorSubject(this.list);
  }

  getData(): Observable<string[]> {
    return this.subject.asObservable();
  }

  addItem(item: string): void {

    this.list = [item, ...this.list]; // do what you have to do when an item is added.
    this.subject.next(this.list); // the next version of this list is ready. Here ya go subscribers!
  }
}
