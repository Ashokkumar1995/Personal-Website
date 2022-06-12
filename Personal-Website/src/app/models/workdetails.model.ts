export class WorkDetails {
  name = '';
  position = '';
  year = '';
  awards: string[] = [];
  details: string[] = [];
  logo = '';

  constructor(name: string, position: string, year: string, details: string[], awards: string[], logo: string) {
    this.name = name;
    this.position = position;
    this.year = year;
    this.details = details;
    this.awards = awards;
    this.logo = logo;
  }
}
