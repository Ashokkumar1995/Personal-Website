export class WorkDetails {
  name = '';
  position = '';
  year = '';
  awards: string[] = [];
  details: string[] = [];

  constructor(name: string, position: string, year: string, details: string[], awards: string[]) {
    this.name = name;
    this.position = position;
    this.year = year;
    this.details = details;
    this.awards = awards;
  }
}
