import { NextResponse } from "next/server";
import { getTrips, addTrip} from "../../lib/data";

// get all the trips
export const GET = async (req:Request, res: Response) => {
    console.log('GET-trips');

    try {
        const trips = getTrips();
        return  NextResponse.json({trips})

    } catch (error) {
        return NextResponse.json({message : 'Eroor', error}, {status: 500})
    }
}

// add a trip to trip list
export const POST = async (req:Request, res: Response) => {
    console.log('GET statement working');

    try {
        const trip = await req.json();
        addTrip(trip);
        return  NextResponse.json({ message: 'OK', trip}, {status:200})

    } catch (error) {
        return NextResponse.json({message : 'Eroor', error}, {status: 500})
    }

}