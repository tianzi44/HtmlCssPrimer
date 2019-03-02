export class Name {
    constructor(private name:string,private age:string) {
        this.name = name;
        this.age = age;
    };

    get nameMessage() {
        return `this.name age=${this.age}`;
    }
}

export class WeatherLocation {
    constructor(private weather:string) {
        this.weather = weather;
    }
    get weatherMesaage(){
        return `本地的天气${this.weather}`;
    }
}