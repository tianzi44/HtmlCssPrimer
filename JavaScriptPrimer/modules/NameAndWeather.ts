export class Name {
    constructor(public name:string,private age:number) {
        this.name = name;
        this.age = age;
    };

    get nameMessage() {
        return `姓名：${this.name} 年龄:${this.age}岁`;
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