export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }

  // ** shorthand example **
  // (1) remove public at the top and add it into the constructor
  // (2) we can also remove the this mapping to the variable
  // constructor(public name: string, public description: string, public imagePath: string) {}
}
