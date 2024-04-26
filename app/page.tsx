import Image from "next/image";
import styles from "./page.module.css";
import UseAutocomplete from './component/box'

async function getStations() {
  try {
    const response = await fetch('http://localhost:3000/api/stations');
    const data = await response.json();
    console.log(data);

    const stations = data.stations;
    // Now you can work with the 'stations' array
    return stations;
  } catch (error) {
    console.error('Error fetching stations:', error);
    return [];
  }
}

export default async function Home() {

  const stations = await getStations();

  // console.log(stations);

  return (
    <main className={styles.main}>

      <UseAutocomplete props={stations}/>
            {

      <div>
              {stations.map((station:any) => {
                return <h1>{station.name}</h1>
              })}
      </div>


      }
    </main>
  );
}
