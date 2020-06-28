export class Course{
    name: string;
    days: number;
    price: number;

    constructor(course : Course){
        this.name=course.name
        this.days=course.days
        this.price=course.price
    }
}