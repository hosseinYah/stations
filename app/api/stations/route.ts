import { NextResponse } from "next/server";
import { getStations } from "../../lib/data";

// get all the stations
export const GET = async (req:Request, res: Response) => {
    console.log('GET-stations');

    try {
        const stations = getStations();
        return  NextResponse.json({stations})

    } catch (error) {
        return NextResponse.json({message : 'Eroor', error}, {status: 500})
    }

}
