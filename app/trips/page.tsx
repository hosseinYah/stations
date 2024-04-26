import styles from "../page.module.css";
import { useState } from "react";


async function getTrips() {
    try {
      const response = await fetch('http://localhost:3000/api/trips');
      const data = await response.json();
      console.log(data);
  
      const stations = data.trips;
      // Now you can work with the 'stations' array
      return stations;
    } catch (error) {
      console.error('Error fetching stations:', error);
      return [];
    }
  }

export default async function Trips() {

    const trips = await getTrips(); 

    return (

        <main className={styles.main}>
       <div>

{
    trips ? 
    <>
    {trips.map((station:any) => {
          return <h1>{station.name}</h1>
        })}
    </>: <> No Trips yet</>
}
 </div>

        </main>
    );
}
