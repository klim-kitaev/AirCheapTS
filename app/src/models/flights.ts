export class Segment{
    duration:number;
    departureTime:string;
    arrivalTime:string;
    origin:string;
    destination:string;
    connectionDuration:number | undefined;
}


export class Flight{
    id:string;
    company:string;
    points:number;
    duration:number;
    segment:Segment[]
}