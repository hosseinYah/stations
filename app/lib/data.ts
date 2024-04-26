type Trip = {
    "locationX": string,
    "locationY": string,
    "id": string,
    "name": string,
    "@id": string,
    "standardname": string,
}

// list of the trips
let trips: Array<Array<Trip>> = []

// the whole trips
let stations = [
    
    {
        "locationX": "4.32567070",
        "locationY": "51.2191653",
        "id": "BE.NMBS.000000252",
        "name": "Zwijndrecht-Dorp",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/000000252",
        "standardname": "Zwijndrecht-Dorp"
    },
    {
        "locationX": "14.436037",
        "locationY": "50.083058",
        "id": "BE.NMBS.005457076",
        "name": "Prague Central Station",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/005457076",
        "standardname": "Praha Hlavn\u00ed N\u00e1dra\u017e\u00ed"
    },
    {
        "locationX": "0.12380800",
        "locationY": "51.5304000",
        "id": "BE.NMBS.007015400",
        "name": "London Saint Pancras International",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/007015400",
        "standardname": "London Saint Pancras International"
    },
    {
        "locationX": "0.27577500",
        "locationY": "51.4511700",
        "id": "BE.NMBS.007015440",
        "name": "Ebbsfleet International",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/007015440",
        "standardname": "Ebbsfleet International"
    },
    {
        "locationX": "-0.1132",
        "locationY": "51.5031",
        "id": "BE.NMBS.007054650",
        "name": "London Waterloo",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/007054650",
        "standardname": "London Waterloo"
    },
    {
        "locationX": "6.795297",
        "locationY": "51.219178",
        "id": "BE.NMBS.008008094",
        "name": "Dusseldorf Hbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008008094",
        "standardname": "Duesseldorf Hbf"
    },
    {
        "locationX": "7.459293",
        "locationY": "51.517898",
        "id": "BE.NMBS.008010053",
        "name": "Dortmund Hbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008010053",
        "standardname": "Dortmund Hbf"
    },
    {
        "locationX": "6.77611800",
        "locationY": "51.4295200",
        "id": "BE.NMBS.008010184",
        "name": "Essen Hbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008010184",
        "standardname": "Essen Hbf"
    },
    {
        "locationX": "6.7759037",
        "locationY": "51.42978",
        "id": "BE.NMBS.008010316",
        "name": "Duisburg Hbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008010316",
        "standardname": "Duisburg Hbf"
    },
    {
        "locationX": "8.6653708",
        "locationY": "50.1071318",
        "id": "BE.NMBS.008011068",
        "name": "Frankfurt am Main Hbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008011068",
        "standardname": "Frankfurt am Main Hbf"
    },
    {
        "locationX": "8.569853",
        "locationY": "50.051696",
        "id": "BE.NMBS.008011090",
        "name": "Frankfurt am Main Flughafen Reginalbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008011090",
        "standardname": "Frankfurt am Main Flughafen Reginalbf"
    },
    {
        "locationX": "8.469722",
        "locationY": "49.479722",
        "id": "BE.NMBS.008014008",
        "name": "Mannheim Hbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008014008",
        "standardname": "Mannheim Hbf"
    },
    {
        "locationX": "6.105275",
        "locationY": "50.770832",
        "id": "BE.NMBS.008015345",
        "name": "Aachen Hbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008015345",
        "standardname": "Aachen Hbf"
    },
    {
        "locationX": "6.958823",
        "locationY": "50.942721",
        "id": "BE.NMBS.008015458",
        "name": "K\u00f6ln Hbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008015458",
        "standardname": "K\u00f6ln Hbf"
    },
    {
        "locationX": "7.203029",
        "locationY": "50.793916",
        "id": "BE.NMBS.008015588",
        "name": "Siegburg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008015588",
        "standardname": "Siegburg"
    },
    {
        "locationX": "6.76705200",
        "locationY": "51.2765600",
        "id": "BE.NMBS.008015653",
        "name": "Duesseldorf Flughafen (DE)",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008015653",
        "standardname": "Duesseldorf Flughafen (DE)"
    },
    {
        "locationX": "13.4965",
        "locationY": "52.5097",
        "id": "BE.NMBS.008032318",
        "name": "Berlin Lichtenberg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008032318",
        "standardname": "Berlin Lichtenberg"
    },
    {
        "locationX": "8.06326100",
        "locationY": "50.3842000",
        "id": "BE.NMBS.008032572",
        "name": "Limburg S\u00fcd",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008032572",
        "standardname": "Limburg S\u00fcd"
    },
    {
        "locationX": "6.786837",
        "locationY": "51.292008",
        "id": "BE.NMBS.008039904",
        "name": "D\u00fcsseldorf Flughafen Hbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008039904",
        "standardname": "D\u00fcsseldorf Flughafen Hbf"
    },
    {
        "locationX": "8.66361100",
        "locationY": "50.1308300",
        "id": "BE.NMBS.008061676",
        "name": "Frankfurt am Main Flughafen Fernbf",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008061676",
        "standardname": "Frankfurt am Main Flughafen Fernbf"
    },
    {
        "locationX": "13.369548",
        "locationY": "52.525589",
        "id": "BE.NMBS.008065969",
        "name": "Berlin HBF",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008065969",
        "standardname": "Berlin HBF"
    },
    {
        "locationX": "16.375864",
        "locationY": "48.184923",
        "id": "BE.NMBS.008101003",
        "name": "Vienna Main Station",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008101003",
        "standardname": "Wien Hbf"
    },
    {
        "locationX": "6.133331",
        "locationY": "49.599996",
        "id": "BE.NMBS.008200100",
        "name": "L\u00ebtzebuerg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200100",
        "standardname": "L\u00ebtzebuerg"
    },
    {
        "locationX": "6.13668",
        "locationY": "49.633838",
        "id": "BE.NMBS.008200101",
        "name": "Dommeldange",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200101",
        "standardname": "Dommeldange"
    },
    {
        "locationX": "6.13285300",
        "locationY": "49.6191260",
        "id": "BE.NMBS.008200102",
        "name": "Pfaffenthal-Kirchberg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200102",
        "standardname": "Pfaffenthal-Kirchberg"
    },
    {
        "locationX": "6.106111",
        "locationY": "49.748893",
        "id": "BE.NMBS.008200110",
        "name": "Mersch",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200110",
        "standardname": "Mersch"
    },
    {
        "locationX": "6.104169",
        "locationY": "49.847496",
        "id": "BE.NMBS.008200120",
        "name": "Ettelbr\u00e9ck",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200120",
        "standardname": "Ettelbr\u00e9ck"
    },
    {
        "locationX": "6.09149000",
        "locationY": "49.8972900",
        "id": "BE.NMBS.008200128",
        "name": "Michelau",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200128",
        "standardname": "Michelau"
    },
    {
        "locationX": "6.053335",
        "locationY": "49.92104",
        "id": "BE.NMBS.008200129",
        "name": "Goebelsm\u00fchle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200129",
        "standardname": "Goebelsm\u00fchle"
    },
    {
        "locationX": "6.020003",
        "locationY": "49.952777",
        "id": "BE.NMBS.008200130",
        "name": "Kautebaach",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200130",
        "standardname": "Kautebaach"
    },
    {
        "locationX": "5.999166",
        "locationY": "49.988887",
        "id": "BE.NMBS.008200132",
        "name": "Wilwerwiltz",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200132",
        "standardname": "Wilwerwiltz"
    },
    {
        "locationX": "6.006106",
        "locationY": "50.017778",
        "id": "BE.NMBS.008200133",
        "name": "Drauffelt",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200133",
        "standardname": "Drauffelt"
    },
    {
        "locationX": "6.031393",
        "locationY": "50.054724",
        "id": "BE.NMBS.008200134",
        "name": "Clervaux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200134",
        "standardname": "Clervaux"
    },
    {
        "locationX": "6.000281",
        "locationY": "50.121109",
        "id": "BE.NMBS.008200136",
        "name": "Troisvierges",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200136",
        "standardname": "Troisvierges"
    },
    {
        "locationX": "6.060601",
        "locationY": "49.613002",
        "id": "BE.NMBS.008200510",
        "name": "Bertrange Strassen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200510",
        "standardname": "Bertrange Strassen"
    },
    {
        "locationX": "6.02014",
        "locationY": "49.625663",
        "id": "BE.NMBS.008200516",
        "name": "Mamer",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200516",
        "standardname": "Mamer"
    },
    {
        "locationX": "5.99083300",
        "locationY": "49.6450000",
        "id": "BE.NMBS.008200518",
        "name": "Capellen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200518",
        "standardname": "Capellen"
    },
    {
        "locationX": "5.916385",
        "locationY": "49.646389",
        "id": "BE.NMBS.008200520",
        "name": "Klengbetten",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200520",
        "standardname": "Klengbetten"
    },
    {
        "locationX": "6.12093800",
        "locationY": "49.5951600",
        "id": "BE.NMBS.008200710",
        "name": "Hollerich",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200710",
        "standardname": "Hollerich"
    },
    {
        "locationX": "6.05930600",
        "locationY": "49.5871200",
        "id": "BE.NMBS.008200712",
        "name": "Leudelange",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200712",
        "standardname": "Leudelange"
    },
    {
        "locationX": "5.99526700",
        "locationY": "49.5725600",
        "id": "BE.NMBS.008200714",
        "name": "Dippach-Reckange",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200714",
        "standardname": "Dippach-Reckange"
    },
    {
        "locationX": "5.96007600",
        "locationY": "49.5736400",
        "id": "BE.NMBS.008200716",
        "name": "Schouweiler",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200716",
        "standardname": "Schouweiler"
    },
    {
        "locationX": "5.92374200",
        "locationY": "49.5583600",
        "id": "BE.NMBS.008200718",
        "name": "Bascharage-Sanem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200718",
        "standardname": "Bascharage-Sanem"
    },
    {
        "locationX": "5.87868100",
        "locationY": "49.5542500",
        "id": "BE.NMBS.008200930",
        "name": "Petange",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200930",
        "standardname": "Petange"
    },
    {
        "locationX": "5.86133500",
        "locationY": "49.5533400",
        "id": "BE.NMBS.008200935",
        "name": "Lamadeleine",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200935",
        "standardname": "Lamadeleine"
    },
    {
        "locationX": "5.845028",
        "locationY": "49.551283",
        "id": "BE.NMBS.008200940",
        "name": "Rodange",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008200940",
        "standardname": "Rodange"
    },
    {
        "locationX": "6.02968",
        "locationY": "49.618415",
        "id": "BE.NMBS.008210014",
        "name": "Mamer-Lyc\u00e9e",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008210014",
        "standardname": "Mamer-Lyc\u00e9e"
    },
    {
        "locationX": "4.91666700",
        "locationY": "52.3500000",
        "id": "BE.NMBS.008400058",
        "name": "Amsterdam CS",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400058",
        "standardname": "Amsterdam CS"
    },
    {
        "locationX": "4.7764000000",
        "locationY": "51.5944590000",
        "id": "BE.NMBS.008400131",
        "name": "Breda",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400131",
        "standardname": "Breda"
    },
    {
        "locationX": "4.666668",
        "locationY": "51.799998",
        "id": "BE.NMBS.008400180",
        "name": "Dordrecht",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400180",
        "standardname": "Dordrecht"
    },
    {
        "locationX": "5.709786",
        "locationY": "50.772135",
        "id": "BE.NMBS.008400219",
        "name": "Eijsden",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400219",
        "standardname": "Eijsden"
    },
    {
        "locationX": "4.299999",
        "locationY": "52.083329",
        "id": "BE.NMBS.008400280",
        "name": "Den Haag HS",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400280",
        "standardname": "Den Haag HS"
    },
    {
        "locationX": "5.29427800",
        "locationY": "51.6904200",
        "id": "BE.NMBS.008400319",
        "name": "'s Hertogenbosch",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400319",
        "standardname": "'s Hertogenbosch"
    },
    {
        "locationX": "5.70539200",
        "locationY": "50.8500000",
        "id": "BE.NMBS.008400424",
        "name": "Maastricht",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400424",
        "standardname": "Maastricht"
    },
    {
        "locationX": "5.716707",
        "locationY": "50.838502",
        "id": "BE.NMBS.008400426",
        "name": "Maastricht Randwyck",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400426",
        "standardname": "Maastricht Randwyck"
    },
    {
        "locationX": "4.45869200",
        "locationY": "51.5408340",
        "id": "BE.NMBS.008400526",
        "name": "Roosendaal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400526",
        "standardname": "Roosendaal"
    },
    {
        "locationX": "4.50000000",
        "locationY": "51.9166670",
        "id": "BE.NMBS.008400530",
        "name": "Rotterdam CS",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400530",
        "standardname": "Rotterdam CS"
    },
    {
        "locationX": "4.75000000",
        "locationY": "52.3000000",
        "id": "BE.NMBS.008400561",
        "name": "Schiphol",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400561",
        "standardname": "Schiphol"
    },
    {
        "locationX": "5.109722",
        "locationY": "52.089167",
        "id": "BE.NMBS.008400621",
        "name": "Utrecht Centraal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008400621",
        "standardname": "Utrecht Centraal"
    },
    {
        "locationX": "7.590716",
        "locationY": "47.547408",
        "id": "BE.NMBS.008500010",
        "name": "Basel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008500010",
        "standardname": "Basel"
    },
    {
        "locationX": "2.782184",
        "locationY": "48.868256",
        "id": "BE.NMBS.008711184",
        "name": "Marne-la-Vall\u00e9e - Chessy",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008711184",
        "standardname": "Marne-la-Vall\u00e9e - Chessy"
    },
    {
        "locationX": "6.16972200",
        "locationY": "48.9475000",
        "id": "BE.NMBS.008714210",
        "name": "Lorraine TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008714210",
        "standardname": "Lorraine TGV"
    },
    {
        "locationX": "7.366668",
        "locationY": "48.083335",
        "id": "BE.NMBS.008718201",
        "name": "Colmar",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008718201",
        "standardname": "Colmar"
    },
    {
        "locationX": "7.333336",
        "locationY": "47.749998",
        "id": "BE.NMBS.008718206",
        "name": "Mulhouse",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008718206",
        "standardname": "Mulhouse"
    },
    {
        "locationX": "7.555316",
        "locationY": "47.5907",
        "id": "BE.NMBS.008718213",
        "name": "Saint-Louis-Haut-Rhin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008718213",
        "standardname": "Saint-Louis-Haut-Rhin"
    },
    {
        "locationX": "6.166663",
        "locationY": "49.366663",
        "id": "BE.NMBS.008719100",
        "name": "Thionville",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008719100",
        "standardname": "Thionville"
    },
    {
        "locationX": "6.166663",
        "locationY": "49.13333",
        "id": "BE.NMBS.008719203",
        "name": "Metz",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008719203",
        "standardname": "Metz"
    },
    {
        "locationX": "7.733905",
        "locationY": "48.585437",
        "id": "BE.NMBS.008721202",
        "name": "Strasbourg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008721202",
        "standardname": "Strasbourg"
    },
    {
        "locationX": "7.362255",
        "locationY": "48.744798",
        "id": "BE.NMBS.008721222",
        "name": "Saverne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008721222",
        "standardname": "Saverne"
    },
    {
        "locationX": "7.449999",
        "locationY": "48.26667",
        "id": "BE.NMBS.008721405",
        "name": "Selestat",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008721405",
        "standardname": "Selestat"
    },
    {
        "locationX": "3.0756612",
        "locationY": "50.6391167",
        "id": "BE.NMBS.008722326",
        "name": "Lille Europe",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008722326",
        "standardname": "Lille Europe"
    },
    {
        "locationX": "2.33333300",
        "locationY": "48.8666670",
        "id": "BE.NMBS.008727100",
        "name": "Paris Nord",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008727100",
        "standardname": "Paris Nord"
    },
    {
        "locationX": "2.571123",
        "locationY": "49.003955",
        "id": "BE.NMBS.008727149",
        "name": "A\u00e9roport Charles-de-Gaulle TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008727149",
        "standardname": "A\u00e9roport Charles-de-Gaulle TGV"
    },
    {
        "locationX": "3.13381",
        "locationY": "50.675708",
        "id": "BE.NMBS.008728105",
        "name": "Croix l'Allumette",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728105",
        "standardname": "Croix l'Allumette"
    },
    {
        "locationX": "3.066669",
        "locationY": "50.633333",
        "id": "BE.NMBS.008728600",
        "name": "Lille Flandres",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728600",
        "standardname": "Lille Flandres"
    },
    {
        "locationX": "3.108892",
        "locationY": "50.626941",
        "id": "BE.NMBS.008728606",
        "name": "Hellemmes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728606",
        "standardname": "Hellemmes"
    },
    {
        "locationX": "3.15000000",
        "locationY": "50.7166670",
        "id": "BE.NMBS.008728654",
        "name": "Tourcoing",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728654",
        "standardname": "Tourcoing"
    },
    {
        "locationX": "3.15000000",
        "locationY": "50.6666670",
        "id": "BE.NMBS.008728671",
        "name": "Croix Wasquehal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728671",
        "standardname": "Croix Wasquehal"
    },
    {
        "locationX": "3.166666",
        "locationY": "50.699997",
        "id": "BE.NMBS.008728673",
        "name": "Roubaix",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728673",
        "standardname": "Roubaix"
    },
    {
        "locationX": "3.1275",
        "locationY": "50.624164",
        "id": "BE.NMBS.008728683",
        "name": "Pont de Bois",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728683",
        "standardname": "Pont de Bois"
    },
    {
        "locationX": "3.15000000",
        "locationY": "50.6333330",
        "id": "BE.NMBS.008728685",
        "name": "Annappes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728685",
        "standardname": "Annappes"
    },
    {
        "locationX": "3.166666",
        "locationY": "50.616666",
        "id": "BE.NMBS.008728686",
        "name": "Ascq",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728686",
        "standardname": "Ascq"
    },
    {
        "locationX": "3.25000000",
        "locationY": "50.6000000",
        "id": "BE.NMBS.008728687",
        "name": "Baisieux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728687",
        "standardname": "Baisieux"
    },
    {
        "locationX": "3.116667",
        "locationY": "50.616666",
        "id": "BE.NMBS.008728710",
        "name": "Lezennes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008728710",
        "standardname": "Lezennes"
    },
    {
        "locationX": "3.96656600",
        "locationY": "50.2728900",
        "id": "BE.NMBS.008729500",
        "name": "Maubeuge",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008729500",
        "standardname": "Maubeuge"
    },
    {
        "locationX": "3.84341300",
        "locationY": "50.1974400",
        "id": "BE.NMBS.008729560",
        "name": "Aulnoye-Aymeries",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008729560",
        "standardname": "Aulnoye-Aymeries"
    },
    {
        "locationX": "2.49565000",
        "locationY": "49.8589400",
        "id": "BE.NMBS.008731388",
        "name": "Haute-Picardie TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008731388",
        "standardname": "Haute-Picardie TGV"
    },
    {
        "locationX": "4.81666700",
        "locationY": "43.9500000",
        "id": "BE.NMBS.008731896",
        "name": "Avignon TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008731896",
        "standardname": "Avignon TGV"
    },
    {
        "locationX": "5.43333300",
        "locationY": "43.5333300",
        "id": "BE.NMBS.008731901",
        "name": "Aix-en-Provence TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008731901",
        "standardname": "Aix-en-Provence TGV"
    },
    {
        "locationX": "2.78169000",
        "locationY": "50.2868300",
        "id": "BE.NMBS.008734201",
        "name": "Arras",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008734201",
        "standardname": "Arras"
    },
    {
        "locationX": "2.261254",
        "locationY": "48.725758",
        "id": "BE.NMBS.008739370",
        "name": "Massy TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008739370",
        "standardname": "Massy TGV"
    },
    {
        "locationX": "-1.672744",
        "locationY": "48.103517",
        "id": "BE.NMBS.008747100",
        "name": "Rennes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008747100",
        "standardname": "Rennes"
    },
    {
        "locationX": "-1.542356",
        "locationY": "47.216148",
        "id": "BE.NMBS.008748100",
        "name": "Nantes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008748100",
        "standardname": "Nantes"
    },
    {
        "locationX": "-0.5557068",
        "locationY": "44.8256102",
        "id": "BE.NMBS.008758100",
        "name": "Bordeaux Saint Jean",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008758100",
        "standardname": "Bordeaux Saint Jean"
    },
    {
        "locationX": "4.825301",
        "locationY": "45.748360",
        "id": "BE.NMBS.008772202",
        "name": "Lyon-Perrache TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008772202",
        "standardname": "Lyon-Perrache TGV"
    },
    {
        "locationX": "4.85000000",
        "locationY": "45.7500000",
        "id": "BE.NMBS.008772319",
        "name": "Lyon Part Dieu TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008772319",
        "standardname": "Lyon Part Dieu TGV"
    },
    {
        "locationX": "5.919756",
        "locationY": "45.571498",
        "id": "BE.NMBS.008774100",
        "name": "Chamb\u00e9ry-Challes-les-Eaux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008774100",
        "standardname": "Chamb\u00e9ry-Challes-les-Eaux"
    },
    {
        "locationX": "6.383617",
        "locationY": "45.673624",
        "id": "BE.NMBS.008774164",
        "name": "Albertville",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008774164",
        "standardname": "Albertville"
    },
    {
        "locationX": "6.531454",
        "locationY": "45.486693",
        "id": "BE.NMBS.008774172",
        "name": "Mo\u00fbtiers-Salins-Brides-les-Bai",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008774172",
        "standardname": "Mo\u00fbtiers-Salins-Brides-les-Bai"
    },
    {
        "locationX": "6.648394",
        "locationY": "45.554202",
        "id": "BE.NMBS.008774176",
        "name": "Aime-la-Plagne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008774176",
        "standardname": "Aime-la-Plagne"
    },
    {
        "locationX": "6.733522",
        "locationY": "45.574194",
        "id": "BE.NMBS.008774177",
        "name": "Landry",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008774177",
        "standardname": "Landry"
    },
    {
        "locationX": "6.771664",
        "locationY": "45.618826",
        "id": "BE.NMBS.008774179",
        "name": "Bourg-Saint-Maurice",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008774179",
        "standardname": "Bourg-Saint-Maurice"
    },
    {
        "locationX": "5.380752",
        "locationY": "43.303178",
        "id": "BE.NMBS.008775100",
        "name": "Marseille-Saint-Charles",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008775100",
        "standardname": "Marseille-Saint-Charles"
    },
    {
        "locationX": "5.9326648",
        "locationY": "43.1274781",
        "id": "BE.NMBS.008775500",
        "name": "Toulon",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008775500",
        "standardname": "Toulon"
    },
    {
        "locationX": "6.4826446",
        "locationY": "43.4555673",
        "id": "BE.NMBS.008775544",
        "name": "Les Arcs - Draguignan",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008775544",
        "standardname": "Les Arcs - Draguignan"
    },
    {
        "locationX": "7.261928",
        "locationY": "43.704605",
        "id": "BE.NMBS.008775605",
        "name": "Nice Ville",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008775605",
        "standardname": "Nice Ville"
    },
    {
        "locationX": "6.768825",
        "locationY": "43.423456",
        "id": "BE.NMBS.008775752",
        "name": "Saint-Rapha\u00ebl-Valescure",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008775752",
        "standardname": "Saint-Rapha\u00ebl-Valescure"
    },
    {
        "locationX": "7.019895",
        "locationY": "43.553742",
        "id": "BE.NMBS.008775762",
        "name": "Cannes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008775762",
        "standardname": "Cannes"
    },
    {
        "locationX": "7.1201361",
        "locationY": "43.586618",
        "id": "BE.NMBS.008775767",
        "name": "Antibes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008775767",
        "standardname": "Antibes"
    },
    {
        "locationX": "5.075822",
        "locationY": "45.720907",
        "id": "BE.NMBS.008776290",
        "name": "Lyon-Saint Exup\u00e9ry TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008776290",
        "standardname": "Lyon-Saint Exup\u00e9ry TGV"
    },
    {
        "locationX": "4.90000000",
        "locationY": "44.9333300",
        "id": "BE.NMBS.008776302",
        "name": "Valence TGV",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008776302",
        "standardname": "Valence TGV"
    },
    {
        "locationX": "3.880534",
        "locationY": "43.604947",
        "id": "BE.NMBS.008777300",
        "name": "Montpellier",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008777300",
        "standardname": "Montpellier"
    },
    {
        "locationX": "3.92428293",
        "locationY": "43.59518401",
        "id": "BE.NMBS.008777301",
        "name": "Montpellier-Sud-de-France",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008777301",
        "standardname": "Montpellier-Sud-de-France"
    },
    {
        "locationX": "3.696535",
        "locationY": "43.412810",
        "id": "BE.NMBS.008777320",
        "name": "S\u00e8te",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008777320",
        "standardname": "S\u00e8te"
    },
    {
        "locationX": "4.365997",
        "locationY": "43.832602",
        "id": "BE.NMBS.008777500",
        "name": "N\u00eemes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008777500",
        "standardname": "N\u00eemes"
    },
    {
        "locationX": "3.218794",
        "locationY": "43.336177",
        "id": "BE.NMBS.008778100",
        "name": "B\u00e9ziers",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008778100",
        "standardname": "B\u00e9ziers"
    },
    {
        "locationX": "3.006010",
        "locationY": "43.190399",
        "id": "BE.NMBS.008778110",
        "name": "Narbonne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008778110",
        "standardname": "Narbonne"
    },
    {
        "locationX": "3.465800",
        "locationY": "43.317498",
        "id": "BE.NMBS.008778127",
        "name": "Agde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008778127",
        "standardname": "Agde"
    },
    {
        "locationX": "2.879397",
        "locationY": "42.695938",
        "id": "BE.NMBS.008778400",
        "name": "Perpignan",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008778400",
        "standardname": "Perpignan"
    },
    {
        "locationX": "4.378636",
        "locationY": "50.878513",
        "id": "BE.NMBS.008811007",
        "name": "Schaarbeek\/Schaerbeek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811007",
        "standardname": "Schaarbeek\/Schaerbeek"
    },
    {
        "locationX": "4.400965",
        "locationY": "50.86778",
        "id": "BE.NMBS.008811106",
        "name": "Evere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811106",
        "standardname": "Evere"
    },
    {
        "locationX": "4.415357",
        "locationY": "50.889696",
        "id": "BE.NMBS.008811130",
        "name": "Haren-Sud\/Haren-Zuid",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811130",
        "standardname": "Haren-Sud\/Haren-Zuid"
    },
    {
        "locationX": "4.417074",
        "locationY": "50.907495",
        "id": "BE.NMBS.008811148",
        "name": "Buda",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811148",
        "standardname": "Buda"
    },
    {
        "locationX": "4.419978",
        "locationY": "50.888878",
        "id": "BE.NMBS.008811155",
        "name": "Haren",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811155",
        "standardname": "Haren"
    },
    {
        "locationX": "4.410026",
        "locationY": "50.877785",
        "id": "BE.NMBS.008811163",
        "name": "Bordet",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811163",
        "standardname": "Bordet"
    },
    {
        "locationX": "4.394421",
        "locationY": "50.854072",
        "id": "BE.NMBS.008811171",
        "name": "Meiser",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811171",
        "standardname": "Meiser"
    },
    {
        "locationX": "4.432823",
        "locationY": "50.924583",
        "id": "BE.NMBS.008811189",
        "name": "Vilvoorde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811189",
        "standardname": "Vilvoorde"
    },
    {
        "locationX": "4.398934",
        "locationY": "50.839284",
        "id": "BE.NMBS.008811197",
        "name": "Merode",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811197",
        "standardname": "Merode"
    },
    {
        "locationX": "4.403869",
        "locationY": "50.818357",
        "id": "BE.NMBS.008811205",
        "name": "Delta",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811205",
        "standardname": "Delta"
    },
    {
        "locationX": "4.442774",
        "locationY": "50.890478",
        "id": "BE.NMBS.008811213",
        "name": "Diegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811213",
        "standardname": "Diegem"
    },
    {
        "locationX": "4.469886",
        "locationY": "50.885723",
        "id": "BE.NMBS.008811221",
        "name": "Zaventem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811221",
        "standardname": "Zaventem"
    },
    {
        "locationX": "4.506112",
        "locationY": "50.883314",
        "id": "BE.NMBS.008811247",
        "name": "Nossegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811247",
        "standardname": "Nossegem"
    },
    {
        "locationX": "4.543301",
        "locationY": "50.893067",
        "id": "BE.NMBS.008811254",
        "name": "Kortenberg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811254",
        "standardname": "Kortenberg"
    },
    {
        "locationX": "4.585001",
        "locationY": "50.89651",
        "id": "BE.NMBS.008811262",
        "name": "Erps-Kwerps",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811262",
        "standardname": "Erps-Kwerps"
    },
    {
        "locationX": "4.633516",
        "locationY": "50.900519",
        "id": "BE.NMBS.008811270",
        "name": "Veltem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811270",
        "standardname": "Veltem"
    },
    {
        "locationX": "4.672188",
        "locationY": "50.90353",
        "id": "BE.NMBS.008811288",
        "name": "Herent",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811288",
        "standardname": "Herent"
    },
    {
        "locationX": "4.373674",
        "locationY": "50.838943",
        "id": "BE.NMBS.008811304",
        "name": "Brussels-Luxemburg\/Brussels-Luxembourg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811304",
        "standardname": "Brussel-Luxemburg\/Bruxelles-Luxembourg"
    },
    {
        "locationX": "4.37866",
        "locationY": "50.829929",
        "id": "BE.NMBS.008811403",
        "name": "Mouterij",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811403",
        "standardname": "Mouterij\/Germoir"
    },
    {
        "locationX": "4.389513",
        "locationY": "50.822187",
        "id": "BE.NMBS.008811411",
        "name": "Etterbeek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811411",
        "standardname": "Etterbeek"
    },
    {
        "locationX": "4.399887",
        "locationY": "50.80917",
        "id": "BE.NMBS.008811429",
        "name": "Watermaal\/Watermael",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811429",
        "standardname": "Watermaal\/Watermael"
    },
    {
        "locationX": "4.408112",
        "locationY": "50.794698",
        "id": "BE.NMBS.008811437",
        "name": "Bosvoorde\/Boitsfort",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811437",
        "standardname": "Bosvoorde\/Boitsfort"
    },
    {
        "locationX": "4.449489",
        "locationY": "50.766103",
        "id": "BE.NMBS.008811445",
        "name": "Groenendaal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811445",
        "standardname": "Groenendaal"
    },
    {
        "locationX": "4.467414",
        "locationY": "50.760161",
        "id": "BE.NMBS.008811460",
        "name": "Hoeilaart",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811460",
        "standardname": "Hoeilaart"
    },
    {
        "locationX": "4.49706",
        "locationY": "50.737958",
        "id": "BE.NMBS.008811510",
        "name": "La Hulpe",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811510",
        "standardname": "La Hulpe"
    },
    {
        "locationX": "4.514832",
        "locationY": "50.725697",
        "id": "BE.NMBS.008811528",
        "name": "Genval",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811528",
        "standardname": "Genval"
    },
    {
        "locationX": "4.532855",
        "locationY": "50.711413",
        "id": "BE.NMBS.008811536",
        "name": "Rixensart",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811536",
        "standardname": "Rixensart"
    },
    {
        "locationX": "4.54543500",
        "locationY": "50.6996530",
        "id": "BE.NMBS.008811544",
        "name": "Profondsart",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811544",
        "standardname": "Profondsart"
    },
    {
        "locationX": "4.56936",
        "locationY": "50.673667",
        "id": "BE.NMBS.008811601",
        "name": "Ottignies",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811601",
        "standardname": "Ottignies"
    },
    {
        "locationX": "4.575302",
        "locationY": "50.69214",
        "id": "BE.NMBS.008811635",
        "name": "Limal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811635",
        "standardname": "Limal"
    },
    {
        "locationX": "4.615745",
        "locationY": "50.669793",
        "id": "BE.NMBS.008811676",
        "name": "Louvain-la-Neuve",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811676",
        "standardname": "Louvain-la-Neuve"
    },
    {
        "locationX": "4.594746",
        "locationY": "50.707772",
        "id": "BE.NMBS.008811718",
        "name": "Bierges-Walibi",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811718",
        "standardname": "Bierges-Walibi"
    },
    {
        "locationX": "4.604778",
        "locationY": "50.716267",
        "id": "BE.NMBS.008811726",
        "name": "Wavre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811726",
        "standardname": "Wavre"
    },
    {
        "locationX": "4.621651",
        "locationY": "50.72442",
        "id": "BE.NMBS.008811734",
        "name": "Basse-Wavre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811734",
        "standardname": "Basse-Wavre"
    },
    {
        "locationX": "4.649598",
        "locationY": "50.736646",
        "id": "BE.NMBS.008811742",
        "name": "Gastuche",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811742",
        "standardname": "Gastuche"
    },
    {
        "locationX": "4.662444",
        "locationY": "50.754345",
        "id": "BE.NMBS.008811759",
        "name": "Archennes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811759",
        "standardname": "Archennes"
    },
    {
        "locationX": "4.653868",
        "locationY": "50.761501",
        "id": "BE.NMBS.008811767",
        "name": "Florival",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811767",
        "standardname": "Florival"
    },
    {
        "locationX": "4.651486",
        "locationY": "50.778517",
        "id": "BE.NMBS.008811775",
        "name": "P\u00e9crot",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811775",
        "standardname": "P\u00e9crot"
    },
    {
        "locationX": "4.569046",
        "locationY": "50.659941",
        "id": "BE.NMBS.008811817",
        "name": "Ceroux-Mousty",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811817",
        "standardname": "Ceroux-Mousty"
    },
    {
        "locationX": "4.565819",
        "locationY": "50.645567",
        "id": "BE.NMBS.008811825",
        "name": "Court-Saint-\u00c9tienne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811825",
        "standardname": "Court-Saint-\u00c9tienne"
    },
    {
        "locationX": "4.380722",
        "locationY": "50.843276",
        "id": "BE.NMBS.008811916",
        "name": "Brussels-Schuman",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811916",
        "standardname": "Brussel-Schuman\/Bruxelles-Schuman"
    },
    {
        "locationX": "4.29180000",
        "locationY": "50.8179000",
        "id": "BE.NMBS.008811940",
        "name": "Anderlecht",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008811940",
        "standardname": "Anderlecht"
    },
    {
        "locationX": "4.360846",
        "locationY": "50.859663",
        "id": "BE.NMBS.008812005",
        "name": "Brussels-North",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812005",
        "standardname": "Brussel-Noord\/Bruxelles-Nord"
    },
    {
        "locationX": "4.32898",
        "locationY": "50.863645",
        "id": "BE.NMBS.008812013",
        "name": "Simonis",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812013",
        "standardname": "Simonis"
    },
    {
        "locationX": "4.348513",
        "locationY": "50.87943",
        "id": "BE.NMBS.008812021",
        "name": "Bockstael",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812021",
        "standardname": "Bockstael"
    },
    {
        "locationX": "4.32622",
        "locationY": "50.880833",
        "id": "BE.NMBS.008812047",
        "name": "Jette",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812047",
        "standardname": "Jette"
    },
    {
        "locationX": "4.274541",
        "locationY": "50.890028",
        "id": "BE.NMBS.008812062",
        "name": "Zellik",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812062",
        "standardname": "Zellik"
    },
    {
        "locationX": "4.207985",
        "locationY": "50.906488",
        "id": "BE.NMBS.008812070",
        "name": "Asse",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812070",
        "standardname": "Asse"
    },
    {
        "locationX": "4.216965",
        "locationY": "50.933473",
        "id": "BE.NMBS.008812112",
        "name": "Mollem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812112",
        "standardname": "Mollem"
    },
    {
        "locationX": "4.222718",
        "locationY": "50.954958",
        "id": "BE.NMBS.008812120",
        "name": "Merchtem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812120",
        "standardname": "Merchtem"
    },
    {
        "locationX": "4.187319",
        "locationY": "50.974779",
        "id": "BE.NMBS.008812146",
        "name": "Opwijk",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812146",
        "standardname": "Opwijk"
    },
    {
        "locationX": "4.156171",
        "locationY": "50.989593",
        "id": "BE.NMBS.008812153",
        "name": "Heizijde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812153",
        "standardname": "Heizijde"
    },
    {
        "locationX": "4.134372",
        "locationY": "51.005009",
        "id": "BE.NMBS.008812161",
        "name": "Lebbeke",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812161",
        "standardname": "Lebbeke"
    },
    {
        "locationX": "4.289895",
        "locationY": "50.872625",
        "id": "BE.NMBS.008812211",
        "name": "Sint-Agatha-Berchem\/Berchem-Sainte-Agathe",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812211",
        "standardname": "Sint-Agatha-Berchem\/Berchem-Sainte-Agathe"
    },
    {
        "locationX": "4.273543",
        "locationY": "50.868337",
        "id": "BE.NMBS.008812229",
        "name": "Groot-Bijgaarden",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812229",
        "standardname": "Groot-Bijgaarden"
    },
    {
        "locationX": "4.243393",
        "locationY": "50.866728",
        "id": "BE.NMBS.008812237",
        "name": "Dilbeek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812237",
        "standardname": "Dilbeek"
    },
    {
        "locationX": "4.205081",
        "locationY": "50.86716",
        "id": "BE.NMBS.008812245",
        "name": "Sint-Martens-Bodegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812245",
        "standardname": "Sint-Martens-Bodegem"
    },
    {
        "locationX": "4.16534",
        "locationY": "50.874522",
        "id": "BE.NMBS.008812252",
        "name": "Ternat",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812252",
        "standardname": "Ternat"
    },
    {
        "locationX": "4.115171",
        "locationY": "50.882451",
        "id": "BE.NMBS.008812260",
        "name": "Essene-Lombeek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008812260",
        "standardname": "Essene-Lombeek"
    },
    {
        "locationX": "4.356801",
        "locationY": "50.845658",
        "id": "BE.NMBS.008813003",
        "name": "Brussels-Central",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008813003",
        "standardname": "Brussel-Centraal\/Bruxelles-Central"
    },
    {
        "locationX": "4.347866",
        "locationY": "50.841127",
        "id": "BE.NMBS.008813037",
        "name": "Brussels-Chapelle\/Brussels-Kapellekerk",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008813037",
        "standardname": "Brussel-Kapellekerk\/Bruxelles-Chapelle"
    },
    {
        "locationX": "4.362051",
        "locationY": "50.852067",
        "id": "BE.NMBS.008813045",
        "name": "Brussels-Congres",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008813045",
        "standardname": "Brussel-Congres\/Bruxelles-Congr\u00e8s"
    },
    {
        "locationX": "4.336531",
        "locationY": "50.835707",
        "id": "BE.NMBS.008814001",
        "name": "Brussels-South\/Brussels-Midi",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814001",
        "standardname": "Brussel-Zuid\/Bruxelles-Midi"
    },
    {
        "locationX": "4.320943",
        "locationY": "50.810195",
        "id": "BE.NMBS.008814118",
        "name": "Vorst-Oost\/Forest-Est",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814118",
        "standardname": "Vorst-Oost\/Forest-Est"
    },
    {
        "locationX": "4.323901",
        "locationY": "50.802411",
        "id": "BE.NMBS.008814126",
        "name": "Ukkel-Stalle\/Uccle-Stalle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814126",
        "standardname": "Ukkel-Stalle\/Uccle-Stalle"
    },
    {
        "locationX": "4.332207",
        "locationY": "50.791749",
        "id": "BE.NMBS.008814134",
        "name": "Ukkel-Kalevoet\/Uccle-Calevoet",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814134",
        "standardname": "Ukkel-Kalevoet\/Uccle-Calevoet"
    },
    {
        "locationX": "4.339434",
        "locationY": "50.773681",
        "id": "BE.NMBS.008814142",
        "name": "Linkebeek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814142",
        "standardname": "Linkebeek"
    },
    {
        "locationX": "4.353952",
        "locationY": "50.767631",
        "id": "BE.NMBS.008814159",
        "name": "Holleken",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814159",
        "standardname": "Holleken"
    },
    {
        "locationX": "4.361997",
        "locationY": "50.74781",
        "id": "BE.NMBS.008814167",
        "name": "St.-Genesius-Rode\/rhode-St.-Genese",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814167",
        "standardname": "Sint-Genesius-Rode"
    },
    {
        "locationX": "4.370717",
        "locationY": "50.738812",
        "id": "BE.NMBS.008814175",
        "name": "De Hoek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814175",
        "standardname": "De Hoek"
    },
    {
        "locationX": "4.335065",
        "locationY": "50.599641",
        "id": "BE.NMBS.008814209",
        "name": "Nivelles",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814209",
        "standardname": "Nivelles"
    },
    {
        "locationX": "4.365368",
        "locationY": "50.645423",
        "id": "BE.NMBS.008814241",
        "name": "Lillois",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814241",
        "standardname": "Lillois"
    },
    {
        "locationX": "4.375526",
        "locationY": "50.684778",
        "id": "BE.NMBS.008814258",
        "name": "Braine-l'Alleud",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814258",
        "standardname": "Braine-l'Alleud"
    },
    {
        "locationX": "4.383481",
        "locationY": "50.715422",
        "id": "BE.NMBS.008814266",
        "name": "Waterloo",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814266",
        "standardname": "Waterloo"
    },
    {
        "locationX": "4.240634",
        "locationY": "50.733931",
        "id": "BE.NMBS.008814308",
        "name": "Halle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814308",
        "standardname": "Halle"
    },
    {
        "locationX": "4.221577",
        "locationY": "50.715107",
        "id": "BE.NMBS.008814332",
        "name": "Lembeek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814332",
        "standardname": "Lembeek"
    },
    {
        "locationX": "4.258558",
        "locationY": "50.751577",
        "id": "BE.NMBS.008814340",
        "name": "Buizingen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814340",
        "standardname": "Buizingen"
    },
    {
        "locationX": "4.273696",
        "locationY": "50.766364",
        "id": "BE.NMBS.008814357",
        "name": "Lot",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814357",
        "standardname": "Lot"
    },
    {
        "locationX": "4.295333",
        "locationY": "50.79183",
        "id": "BE.NMBS.008814365",
        "name": "Ruisbroek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814365",
        "standardname": "Ruisbroek"
    },
    {
        "locationX": "4.309167",
        "locationY": "50.809215",
        "id": "BE.NMBS.008814373",
        "name": "Vorst-Zuid\/Forest-Midi",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814373",
        "standardname": "Vorst-Zuid\/Forest-Midi"
    },
    {
        "locationX": "4.266487",
        "locationY": "50.7519",
        "id": "BE.NMBS.008814415",
        "name": "Huizingen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814415",
        "standardname": "Huizingen"
    },
    {
        "locationX": "4.302605",
        "locationY": "50.766616",
        "id": "BE.NMBS.008814423",
        "name": "Beersel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814423",
        "standardname": "Beersel"
    },
    {
        "locationX": "4.330733",
        "locationY": "50.77832",
        "id": "BE.NMBS.008814431",
        "name": "Moensberg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814431",
        "standardname": "Moensberg"
    },
    {
        "locationX": "4.362761",
        "locationY": "50.79441",
        "id": "BE.NMBS.008814449",
        "name": "Sint-Job \/ Saint-Job",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814449",
        "standardname": "Sint-Job"
    },
    {
        "locationX": "4.393387",
        "locationY": "50.801665",
        "id": "BE.NMBS.008814456",
        "name": "Boondaal\/Boondael",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814456",
        "standardname": "Boondaal\/Boondael"
    },
    {
        "locationX": "4.374052",
        "locationY": "50.796145",
        "id": "BE.NMBS.008814464",
        "name": "Diesdelle\/Vivier d'Oie",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814464",
        "standardname": "Diesdelle\/Vivier d'Oie"
    },
    {
        "locationX": "4.398333",
        "locationY": "50.809722",
        "id": "BE.NMBS.008814472",
        "name": "Arcaden",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008814472",
        "standardname": "Arcaden\/Arcades"
    },
    {
        "locationX": "4.341090917587279",
        "locationY": "50.87175167644673",
        "id": "BE.NMBS.008815016",
        "name": "Thurn en Taxis",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008815016",
        "standardname": "Thurn en Taxis\/Tour et Taxis"
    },
    {
        "locationX": "4.321042",
        "locationY": "50.848552",
        "id": "BE.NMBS.008815040",
        "name": "Brussels-West",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008815040",
        "standardname": "Brussel-West\/Bruxelles-Ouest"
    },
    {
        "locationX": "4.482076",
        "locationY": "50.896456",
        "id": "BE.NMBS.008819406",
        "name": "Brussels Airport - Zaventem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008819406",
        "standardname": "Brussels Airport - Zaventem"
    },
    {
        "locationX": "4.421101",
        "locationY": "51.2172",
        "id": "BE.NMBS.008821006",
        "name": "Antwerp-Central",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821006",
        "standardname": "Antwerpen-Centraal"
    },
    {
        "locationX": "4.436392",
        "locationY": "51.207357",
        "id": "BE.NMBS.008821022",
        "name": "Antwerp-East",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821022",
        "standardname": "Antwerpen-Oost"
    },
    {
        "locationX": "4.42623800",
        "locationY": "51.2319910",
        "id": "BE.NMBS.008821030",
        "name": "Antwerpen-Dam",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821030",
        "standardname": "Antwerpen-Dam"
    },
    {
        "locationX": "4.379086",
        "locationY": "51.289968",
        "id": "BE.NMBS.008821048",
        "name": "Antwerp-Haven",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821048",
        "standardname": "Antwerpen-Haven"
    },
    {
        "locationX": "4.425029",
        "locationY": "51.244132",
        "id": "BE.NMBS.008821063",
        "name": "Antwerp-Luchtbal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821063",
        "standardname": "Antwerpen-Luchtbal"
    },
    {
        "locationX": "4.434154",
        "locationY": "51.281626",
        "id": "BE.NMBS.008821071",
        "name": "Ekeren",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821071",
        "standardname": "Ekeren"
    },
    {
        "locationX": "4.427906",
        "locationY": "51.261643",
        "id": "BE.NMBS.008821089",
        "name": "Antwerp-Noorderdokken",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821089",
        "standardname": "Antwerpen-Noorderdokken"
    },
    {
        "locationX": "4.632204",
        "locationY": "51.356838",
        "id": "BE.NMBS.008821105",
        "name": "Noorderkempen (brecht)",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821105",
        "standardname": "Noorderkempen"
    },
    {
        "locationX": "4.432221",
        "locationY": "51.19923",
        "id": "BE.NMBS.008821121",
        "name": "Antwerp-Berchem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821121",
        "standardname": "Antwerpen-Berchem"
    },
    {
        "locationX": "4.448437",
        "locationY": "51.18296",
        "id": "BE.NMBS.008821147",
        "name": "Mortsel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821147",
        "standardname": "Mortsel"
    },
    {
        "locationX": "4.446514",
        "locationY": "51.183023",
        "id": "BE.NMBS.008821154",
        "name": "Mortsel-Deurnesteenweg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821154",
        "standardname": "Mortsel-Deurnesteenweg"
    },
    {
        "locationX": "4.390259",
        "locationY": "51.197828",
        "id": "BE.NMBS.008821196",
        "name": "Antwerp-South",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821196",
        "standardname": "Antwerpen-Zuid"
    },
    {
        "locationX": "4.455737",
        "locationY": "51.171256",
        "id": "BE.NMBS.008821238",
        "name": "Mortsel-Oude God",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821238",
        "standardname": "Mortsel-Oude God"
    },
    {
        "locationX": "4.468843",
        "locationY": "51.169027",
        "id": "BE.NMBS.008821246",
        "name": "Mortsel-Liersesteenweg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821246",
        "standardname": "Mortsel-Liersesteenweg"
    },
    {
        "locationX": "4.476358",
        "locationY": "51.134023",
        "id": "BE.NMBS.008821311",
        "name": "Kontich-Lint",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821311",
        "standardname": "Kontich-Lint"
    },
    {
        "locationX": "4.465157",
        "locationY": "51.154114",
        "id": "BE.NMBS.008821337",
        "name": "Hove",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821337",
        "standardname": "Hove"
    },
    {
        "locationX": "4.451314",
        "locationY": "51.462767",
        "id": "BE.NMBS.008821402",
        "name": "Essen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821402",
        "standardname": "Essen"
    },
    {
        "locationX": "4.46335",
        "locationY": "51.428087",
        "id": "BE.NMBS.008821436",
        "name": "Wildert",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821436",
        "standardname": "Wildert"
    },
    {
        "locationX": "4.46682",
        "locationY": "51.391177",
        "id": "BE.NMBS.008821444",
        "name": "Kalmthout",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821444",
        "standardname": "Kalmthout"
    },
    {
        "locationX": "4.467315",
        "locationY": "51.378664",
        "id": "BE.NMBS.008821451",
        "name": "Kijkuit",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821451",
        "standardname": "Kijkuit"
    },
    {
        "locationX": "4.460483",
        "locationY": "51.364623",
        "id": "BE.NMBS.008821519",
        "name": "Heide",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821519",
        "standardname": "Heide"
    },
    {
        "locationX": "4.432661",
        "locationY": "51.313528",
        "id": "BE.NMBS.008821535",
        "name": "Kapellen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821535",
        "standardname": "Kapellen"
    },
    {
        "locationX": "4.4349",
        "locationY": "51.291658",
        "id": "BE.NMBS.008821543",
        "name": "Sint-Mariaburg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821543",
        "standardname": "Sint-Mariaburg"
    },
    {
        "locationX": "4.560614",
        "locationY": "51.135758",
        "id": "BE.NMBS.008821600",
        "name": "Lier",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821600",
        "standardname": "Lier"
    },
    {
        "locationX": "4.494489",
        "locationY": "51.16348",
        "id": "BE.NMBS.008821634",
        "name": "Boechout",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821634",
        "standardname": "Boechout"
    },
    {
        "locationX": "4.618459",
        "locationY": "51.151057",
        "id": "BE.NMBS.008821659",
        "name": "Kessel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821659",
        "standardname": "Kessel"
    },
    {
        "locationX": "4.666588",
        "locationY": "51.15984",
        "id": "BE.NMBS.008821667",
        "name": "Nijlen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821667",
        "standardname": "Nijlen"
    },
    {
        "locationX": "4.786144",
        "locationY": "51.168361",
        "id": "BE.NMBS.008821709",
        "name": "Wolfstee",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821709",
        "standardname": "Wolfstee"
    },
    {
        "locationX": "4.829535",
        "locationY": "51.181513",
        "id": "BE.NMBS.008821717",
        "name": "Herentals",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821717",
        "standardname": "Herentals"
    },
    {
        "locationX": "4.746511",
        "locationY": "51.165764",
        "id": "BE.NMBS.008821725",
        "name": "Bouwel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821725",
        "standardname": "Bouwel"
    },
    {
        "locationX": "4.638811",
        "locationY": "51.113662",
        "id": "BE.NMBS.008821816",
        "name": "Berlaar",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821816",
        "standardname": "Berlaar"
    },
    {
        "locationX": "4.671532",
        "locationY": "51.094938",
        "id": "BE.NMBS.008821824",
        "name": "Melkouwen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821824",
        "standardname": "Melkouwen"
    },
    {
        "locationX": "4.708235",
        "locationY": "51.074146",
        "id": "BE.NMBS.008821832",
        "name": "Heist-op-den-Berg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821832",
        "standardname": "Heist-op-den-Berg"
    },
    {
        "locationX": "4.773478",
        "locationY": "51.037344",
        "id": "BE.NMBS.008821857",
        "name": "Booischot",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821857",
        "standardname": "Booischot"
    },
    {
        "locationX": "4.800338",
        "locationY": "51.021972",
        "id": "BE.NMBS.008821865",
        "name": "Begijnendijk",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821865",
        "standardname": "Begijnendijk"
    },
    {
        "locationX": "4.937415",
        "locationY": "51.322032",
        "id": "BE.NMBS.008821907",
        "name": "Turnhout",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821907",
        "standardname": "Turnhout"
    },
    {
        "locationX": "4.893089",
        "locationY": "51.241021",
        "id": "BE.NMBS.008821964",
        "name": "Tielen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008821964",
        "standardname": "Tielen"
    },
    {
        "locationX": "4.482785",
        "locationY": "51.017648",
        "id": "BE.NMBS.008822004",
        "name": "Mechelen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822004",
        "standardname": "Mechelen"
    },
    {
        "locationX": "4.359121",
        "locationY": "51.010843",
        "id": "BE.NMBS.008822053",
        "name": "Kapelle-op-den-Bos",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822053",
        "standardname": "Kapelle-op-den-Bos"
    },
    {
        "locationX": "4.299073",
        "locationY": "51.009091",
        "id": "BE.NMBS.008822111",
        "name": "Londerzeel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822111",
        "standardname": "Londerzeel"
    },
    {
        "locationX": "4.22911",
        "locationY": "51.014484",
        "id": "BE.NMBS.008822137",
        "name": "Malderen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822137",
        "standardname": "Malderen"
    },
    {
        "locationX": "4.201666",
        "locationY": "51.016291",
        "id": "BE.NMBS.008822145",
        "name": "Buggenhout",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822145",
        "standardname": "Buggenhout"
    },
    {
        "locationX": "4.153492",
        "locationY": "51.019437",
        "id": "BE.NMBS.008822160",
        "name": "Baasrode-Zuid",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822160",
        "standardname": "Baasrode-Zuid"
    },
    {
        "locationX": "4.493186",
        "locationY": "51.091243",
        "id": "BE.NMBS.008822210",
        "name": "Duffel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822210",
        "standardname": "Duffel"
    },
    {
        "locationX": "4.496116",
        "locationY": "51.069975",
        "id": "BE.NMBS.008822228",
        "name": "Sint-Katelijne-Waver",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822228",
        "standardname": "Sint-Katelijne-Waver"
    },
    {
        "locationX": "4.470937",
        "locationY": "50.977449",
        "id": "BE.NMBS.008822251",
        "name": "Weerde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822251",
        "standardname": "Weerde"
    },
    {
        "locationX": "4.45749",
        "locationY": "50.9584",
        "id": "BE.NMBS.008822269",
        "name": "Eppegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822269",
        "standardname": "Eppegem"
    },
    {
        "locationX": "4.498336",
        "locationY": "50.988658",
        "id": "BE.NMBS.008822277",
        "name": "Hofstade",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822277",
        "standardname": "Hofstade"
    },
    {
        "locationX": "4.489914",
        "locationY": "51.029883",
        "id": "BE.NMBS.008822343",
        "name": "Mechelen-Nekkerspoel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822343",
        "standardname": "Mechelen-Nekkerspoel"
    },
    {
        "locationX": "4.513843",
        "locationY": "51.008201",
        "id": "BE.NMBS.008822426",
        "name": "Muizen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822426",
        "standardname": "Muizen"
    },
    {
        "locationX": "4.537637",
        "locationY": "50.997791",
        "id": "BE.NMBS.008822459",
        "name": "Hever",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822459",
        "standardname": "Hever"
    },
    {
        "locationX": "4.5739",
        "locationY": "50.981853",
        "id": "BE.NMBS.008822475",
        "name": "Boortmeerbeek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822475",
        "standardname": "Boortmeerbeek"
    },
    {
        "locationX": "4.613309",
        "locationY": "50.966428",
        "id": "BE.NMBS.008822517",
        "name": "Haacht",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822517",
        "standardname": "Haacht"
    },
    {
        "locationX": "4.638011",
        "locationY": "50.958544",
        "id": "BE.NMBS.008822525",
        "name": "Wespelaar-Tildonk",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822525",
        "standardname": "Wespelaar-Tildonk"
    },
    {
        "locationX": "4.66301",
        "locationY": "50.944251",
        "id": "BE.NMBS.008822533",
        "name": "Hambos",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822533",
        "standardname": "Hambos"
    },
    {
        "locationX": "4.356019",
        "locationY": "51.066343",
        "id": "BE.NMBS.008822608",
        "name": "Willebroek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822608",
        "standardname": "Willebroek"
    },
    {
        "locationX": "4.282703",
        "locationY": "51.07722",
        "id": "BE.NMBS.008822715",
        "name": "Puurs",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822715",
        "standardname": "Puurs"
    },
    {
        "locationX": "4.240526",
        "locationY": "51.099225",
        "id": "BE.NMBS.008822772",
        "name": "Bornem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822772",
        "standardname": "Bornem"
    },
    {
        "locationX": "4.360694",
        "locationY": "51.090713",
        "id": "BE.NMBS.008822814",
        "name": "Boom",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822814",
        "standardname": "Boom"
    },
    {
        "locationX": "4.324998",
        "locationY": "51.081022",
        "id": "BE.NMBS.008822848",
        "name": "Ruisbroek-Sauvegarde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008822848",
        "standardname": "Ruisbroek-Sauvegarde"
    },
    {
        "locationX": "4.347785",
        "locationY": "51.182699",
        "id": "BE.NMBS.008824158",
        "name": "Hoboken-Polder",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008824158",
        "standardname": "Hoboken-Polder"
    },
    {
        "locationX": "4.338293",
        "locationY": "51.136243",
        "id": "BE.NMBS.008824224",
        "name": "Hemiksem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008824224",
        "standardname": "Hemiksem"
    },
    {
        "locationX": "4.340261",
        "locationY": "51.12551",
        "id": "BE.NMBS.008824232",
        "name": "Schelle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008824232",
        "standardname": "Schelle"
    },
    {
        "locationX": "4.338589",
        "locationY": "51.111595",
        "id": "BE.NMBS.008824240",
        "name": "Niel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008824240",
        "standardname": "Niel"
    },
    {
        "locationX": "4.44893000",
        "locationY": "51.4690900",
        "id": "BE.NMBS.008829009",
        "name": "Essen-Grens",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008829009",
        "standardname": "Essen-Grens"
    },
    {
        "locationX": "5.327627",
        "locationY": "50.930822",
        "id": "BE.NMBS.008831005",
        "name": "Hasselt",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831005",
        "standardname": "Hasselt"
    },
    {
        "locationX": "5.292866",
        "locationY": "50.886837",
        "id": "BE.NMBS.008831039",
        "name": "Alken",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831039",
        "standardname": "Alken"
    },
    {
        "locationX": "5.187405",
        "locationY": "50.963758",
        "id": "BE.NMBS.008831088",
        "name": "Schulen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831088",
        "standardname": "Schulen"
    },
    {
        "locationX": "5.419947",
        "locationY": "50.910452",
        "id": "BE.NMBS.008831112",
        "name": "Diepenbeek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831112",
        "standardname": "Diepenbeek"
    },
    {
        "locationX": "5.50938",
        "locationY": "50.868643",
        "id": "BE.NMBS.008831138",
        "name": "Bilzen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831138",
        "standardname": "Bilzen"
    },
    {
        "locationX": "5.47328",
        "locationY": "50.784405",
        "id": "BE.NMBS.008831310",
        "name": "Tongeren",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831310",
        "standardname": "Tongeren"
    },
    {
        "locationX": "5.050031",
        "locationY": "50.993341",
        "id": "BE.NMBS.008831401",
        "name": "Diest",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831401",
        "standardname": "Diest"
    },
    {
        "locationX": "5.497685",
        "locationY": "50.967057",
        "id": "BE.NMBS.008831765",
        "name": "Genk",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831765",
        "standardname": "Genk"
    },
    {
        "locationX": "5.408386",
        "locationY": "50.955812",
        "id": "BE.NMBS.008831781",
        "name": "Bokrijk",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831781",
        "standardname": "Bokrijk"
    },
    {
        "locationX": "5.176654",
        "locationY": "50.81762",
        "id": "BE.NMBS.008831807",
        "name": "Sint-Truiden",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008831807",
        "standardname": "Sint-Truiden"
    },
    {
        "locationX": "5.257287",
        "locationY": "51.117312",
        "id": "BE.NMBS.008832003",
        "name": "Leopoldsburg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832003",
        "standardname": "Leopoldsburg"
    },
    {
        "locationX": "5.164986",
        "locationY": "51.169099",
        "id": "BE.NMBS.008832045",
        "name": "Balen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832045",
        "standardname": "Balen"
    },
    {
        "locationX": "5.234373",
        "locationY": "51.087719",
        "id": "BE.NMBS.008832227",
        "name": "Beverlo",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832227",
        "standardname": "Beverlo"
    },
    {
        "locationX": "5.235892",
        "locationY": "51.050603",
        "id": "BE.NMBS.008832235",
        "name": "Beringen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832235",
        "standardname": "Beringen"
    },
    {
        "locationX": "5.281782",
        "locationY": "51.038207",
        "id": "BE.NMBS.008832243",
        "name": "Heusden",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832243",
        "standardname": "Heusden"
    },
    {
        "locationX": "5.3299",
        "locationY": "51.033548",
        "id": "BE.NMBS.008832250",
        "name": "Zolder",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832250",
        "standardname": "Zolder"
    },
    {
        "locationX": "5.348815",
        "locationY": "50.989557",
        "id": "BE.NMBS.008832334",
        "name": "Zonhoven",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832334",
        "standardname": "Zonhoven"
    },
    {
        "locationX": "5.350226",
        "locationY": "50.954841",
        "id": "BE.NMBS.008832375",
        "name": "Kiewit",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832375",
        "standardname": "Kiewit"
    },
    {
        "locationX": "5.116336",
        "locationY": "51.19105",
        "id": "BE.NMBS.008832409",
        "name": "Mol",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832409",
        "standardname": "Mol"
    },
    {
        "locationX": "4.988608",
        "locationY": "51.168955",
        "id": "BE.NMBS.008832433",
        "name": "Geel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832433",
        "standardname": "Geel"
    },
    {
        "locationX": "4.90250000",
        "locationY": "51.1740300",
        "id": "BE.NMBS.008832458",
        "name": "Olen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832458",
        "standardname": "Olen"
    },
    {
        "locationX": "5.312031",
        "locationY": "51.211564",
        "id": "BE.NMBS.008832565",
        "name": "Lommel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832565",
        "standardname": "Lommel"
    },
    {
        "locationX": "5.422751",
        "locationY": "51.215618",
        "id": "BE.NMBS.008832573",
        "name": "Overpelt",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832573",
        "standardname": "Overpelt"
    },
    {
        "locationX": "5.43717",
        "locationY": "51.222369",
        "id": "BE.NMBS.008832615",
        "name": "Neerpelt",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832615",
        "standardname": "Neerpelt"
    },
    {
        "locationX": "5.543279",
        "locationY": "51.246424",
        "id": "BE.NMBS.008832664",
        "name": "Hamont",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008832664",
        "standardname": "Hamont"
    },
    {
        "locationX": "4.715866",
        "locationY": "50.88228",
        "id": "BE.NMBS.008833001",
        "name": "Leuven",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833001",
        "standardname": "Leuven"
    },
    {
        "locationX": "4.835522",
        "locationY": "50.836282",
        "id": "BE.NMBS.008833050",
        "name": "Vertrijk",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833050",
        "standardname": "Vertrijk"
    },
    {
        "locationX": "4.6952",
        "locationY": "50.86253",
        "id": "BE.NMBS.008833126",
        "name": "Heverlee",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833126",
        "standardname": "Heverlee"
    },
    {
        "locationX": "4.653311",
        "locationY": "50.835931",
        "id": "BE.NMBS.008833134",
        "name": "Oud-Heverlee",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833134",
        "standardname": "Oud-Heverlee"
    },
    {
        "locationX": "4.651728",
        "locationY": "50.800631",
        "id": "BE.NMBS.008833159",
        "name": "Sint-Joris-Weert",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833159",
        "standardname": "Sint-Joris-Weert"
    },
    {
        "locationX": "4.701475",
        "locationY": "50.92274",
        "id": "BE.NMBS.008833175",
        "name": "Wijgmaal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833175",
        "standardname": "Wijgmaal"
    },
    {
        "locationX": "4.824043",
        "locationY": "50.984406",
        "id": "BE.NMBS.008833209",
        "name": "Aarschot",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833209",
        "standardname": "Aarschot"
    },
    {
        "locationX": "4.747679",
        "locationY": "50.956261",
        "id": "BE.NMBS.008833233",
        "name": "Wezemaal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833233",
        "standardname": "Wezemaal"
    },
    {
        "locationX": "4.863541",
        "locationY": "51.002466",
        "id": "BE.NMBS.008833258",
        "name": "Langdorp",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833258",
        "standardname": "Langdorp"
    },
    {
        "locationX": "4.945829",
        "locationY": "51.009864",
        "id": "BE.NMBS.008833266",
        "name": "Testelt",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833266",
        "standardname": "Testelt"
    },
    {
        "locationX": "4.987359",
        "locationY": "51.00669",
        "id": "BE.NMBS.008833274",
        "name": "Zichem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833274",
        "standardname": "Zichem"
    },
    {
        "locationX": "4.92581",
        "locationY": "50.80802",
        "id": "BE.NMBS.008833308",
        "name": "Tienen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833308",
        "standardname": "Tienen"
    },
    {
        "locationX": "4.994217",
        "locationY": "50.772126",
        "id": "BE.NMBS.008833449",
        "name": "Ezemaal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833449",
        "standardname": "Ezemaal"
    },
    {
        "locationX": "5.07966",
        "locationY": "50.747927",
        "id": "BE.NMBS.008833605",
        "name": "Landen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833605",
        "standardname": "Landen"
    },
    {
        "locationX": "5.036323",
        "locationY": "50.763964",
        "id": "BE.NMBS.008833670",
        "name": "Neerwinden",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008833670",
        "standardname": "Neerwinden"
    },
    {
        "locationX": "5.566695",
        "locationY": "50.62455",
        "id": "BE.NMBS.008841004",
        "name": "Li\u00e8ge-Guillemins",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841004",
        "standardname": "Li\u00e8ge-Guillemins"
    },
    {
        "locationX": "5.509704",
        "locationY": "50.661208",
        "id": "BE.NMBS.008841202",
        "name": "Ans",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841202",
        "standardname": "Ans"
    },
    {
        "locationX": "5.460551",
        "locationY": "50.65861",
        "id": "BE.NMBS.008841319",
        "name": "Bierset-Awans",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841319",
        "standardname": "Bierset-Awans"
    },
    {
        "locationX": "5.429556",
        "locationY": "50.66181",
        "id": "BE.NMBS.008841327",
        "name": "Voroux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841327",
        "standardname": "Voroux"
    },
    {
        "locationX": "5.249475",
        "locationY": "50.694549",
        "id": "BE.NMBS.008841400",
        "name": "Waremme",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841400",
        "standardname": "Waremme"
    },
    {
        "locationX": "5.286394",
        "locationY": "50.685065",
        "id": "BE.NMBS.008841434",
        "name": "Bleret",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841434",
        "standardname": "Bleret"
    },
    {
        "locationX": "5.321407",
        "locationY": "50.678611",
        "id": "BE.NMBS.008841442",
        "name": "Remicourt",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841442",
        "standardname": "Remicourt"
    },
    {
        "locationX": "5.367602",
        "locationY": "50.66991",
        "id": "BE.NMBS.008841459",
        "name": "Momalle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841459",
        "standardname": "Momalle"
    },
    {
        "locationX": "5.398453",
        "locationY": "50.664049",
        "id": "BE.NMBS.008841467",
        "name": "Fexhe-le-Haut-Clocher",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841467",
        "standardname": "Fexhe-le-Haut-Clocher"
    },
    {
        "locationX": "5.570453",
        "locationY": "50.646349",
        "id": "BE.NMBS.008841525",
        "name": "Li\u00e8ge-Saint-Lambert",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841525",
        "standardname": "Li\u00e8ge-Saint-Lambert"
    },
    {
        "locationX": "5.561131",
        "locationY": "50.640299",
        "id": "BE.NMBS.008841558",
        "name": "Li\u00e8ge-Carr\u00e9",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841558",
        "standardname": "Li\u00e8ge-Carr\u00e9"
    },
    {
        "locationX": "5.622761",
        "locationY": "50.660911",
        "id": "BE.NMBS.008841608",
        "name": "Herstal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841608",
        "standardname": "Herstal"
    },
    {
        "locationX": "5.60009",
        "locationY": "50.692455",
        "id": "BE.NMBS.008841665",
        "name": "Milmort",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841665",
        "standardname": "Milmort"
    },
    {
        "locationX": "5.56683",
        "locationY": "50.698181",
        "id": "BE.NMBS.008841673",
        "name": "Liers",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841673",
        "standardname": "Liers"
    },
    {
        "locationX": "5.535431",
        "locationY": "50.750426",
        "id": "BE.NMBS.008841731",
        "name": "Glons",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008841731",
        "standardname": "Glons"
    },
    {
        "locationX": "5.599695",
        "locationY": "50.613152",
        "id": "BE.NMBS.008842002",
        "name": "Angleur",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842002",
        "standardname": "Angleur"
    },
    {
        "locationX": "5.616073",
        "locationY": "50.608019",
        "id": "BE.NMBS.008842036",
        "name": "Ch\u00ean\u00e9e",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842036",
        "standardname": "Ch\u00ean\u00e9e"
    },
    {
        "locationX": "5.64373400",
        "locationY": "50.5869820",
        "id": "BE.NMBS.008842051",
        "name": "Chaudfontaine",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842051",
        "standardname": "Chaudfontaine"
    },
    {
        "locationX": "5.583937",
        "locationY": "50.570624",
        "id": "BE.NMBS.008842630",
        "name": "Tilff",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842630",
        "standardname": "Tilff"
    },
    {
        "locationX": "5.587236",
        "locationY": "50.54762",
        "id": "BE.NMBS.008842648",
        "name": "M\u00e9ry",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842648",
        "standardname": "M\u00e9ry"
    },
    {
        "locationX": "5.573563",
        "locationY": "50.539917",
        "id": "BE.NMBS.008842655",
        "name": "Hony",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842655",
        "standardname": "Hony"
    },
    {
        "locationX": "5.572565",
        "locationY": "50.530568",
        "id": "BE.NMBS.008842663",
        "name": "Esneux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842663",
        "standardname": "Esneux"
    },
    {
        "locationX": "5.578858",
        "locationY": "50.509209",
        "id": "BE.NMBS.008842689",
        "name": "Poulseur",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842689",
        "standardname": "Poulseur"
    },
    {
        "locationX": "5.587631",
        "locationY": "50.483285",
        "id": "BE.NMBS.008842705",
        "name": "Rivage",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842705",
        "standardname": "Rivage"
    },
    {
        "locationX": "5.672499",
        "locationY": "50.472938",
        "id": "BE.NMBS.008842754",
        "name": "Aywaille",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842754",
        "standardname": "Aywaille"
    },
    {
        "locationX": "5.566956",
        "locationY": "50.456865",
        "id": "BE.NMBS.008842838",
        "name": "Comblain-la-Tour",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842838",
        "standardname": "Comblain-la-Tour"
    },
    {
        "locationX": "5.533561",
        "locationY": "50.428181",
        "id": "BE.NMBS.008842846",
        "name": "Hamoir",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842846",
        "standardname": "Hamoir"
    },
    {
        "locationX": "5.523565",
        "locationY": "50.403254",
        "id": "BE.NMBS.008842853",
        "name": "Sy",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008842853",
        "standardname": "Sy"
    },
    {
        "locationX": "5.51377700",
        "locationY": "50.6089000",
        "id": "BE.NMBS.008843067",
        "name": "Seraing",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843067",
        "standardname": "Seraing"
    },
    {
        "locationX": "5.558911",
        "locationY": "50.609844",
        "id": "BE.NMBS.008843133",
        "name": "Sclessin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843133",
        "standardname": "Sclessin"
    },
    {
        "locationX": "5.510162",
        "locationY": "50.619651",
        "id": "BE.NMBS.008843141",
        "name": "Pont-de-Seraing",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843141",
        "standardname": "Pont-de-Seraing"
    },
    {
        "locationX": "5.497874",
        "locationY": "50.618446",
        "id": "BE.NMBS.008843158",
        "name": "Jemeppe-sur-Meuse",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843158",
        "standardname": "Jemeppe-sur-Meuse"
    },
    {
        "locationX": "5.480983",
        "locationY": "50.605349",
        "id": "BE.NMBS.008843166",
        "name": "Flemalle-Grande",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843166",
        "standardname": "Flemalle-Grande"
    },
    {
        "locationX": "5.53697200",
        "locationY": "50.6053960",
        "id": "BE.NMBS.008843174",
        "name": "Ougr\u00e9e",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843174",
        "standardname": "Ougr\u00e9e"
    },
    {
        "locationX": "5.457656",
        "locationY": "50.595308",
        "id": "BE.NMBS.008843208",
        "name": "Flemalle-Haute",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843208",
        "standardname": "Flemalle-Haute"
    },
    {
        "locationX": "5.468309",
        "locationY": "50.600396",
        "id": "BE.NMBS.008843224",
        "name": "Leman",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843224",
        "standardname": "Leman"
    },
    {
        "locationX": "5.401986",
        "locationY": "50.582957",
        "id": "BE.NMBS.008843240",
        "name": "Engis",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843240",
        "standardname": "Engis"
    },
    {
        "locationX": "5.234211",
        "locationY": "50.527242",
        "id": "BE.NMBS.008843307",
        "name": "Huy",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843307",
        "standardname": "Huy"
    },
    {
        "locationX": "5.289729",
        "locationY": "50.539215",
        "id": "BE.NMBS.008843323",
        "name": "Ampsin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843323",
        "standardname": "Ampsin"
    },
    {
        "locationX": "5.32049",
        "locationY": "50.546011",
        "id": "BE.NMBS.008843331",
        "name": "Amay",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843331",
        "standardname": "Amay"
    },
    {
        "locationX": "5.330333",
        "locationY": "50.55349",
        "id": "BE.NMBS.008843349",
        "name": "Haute-Fl\u00f4ne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843349",
        "standardname": "Haute-Fl\u00f4ne"
    },
    {
        "locationX": "5.219676",
        "locationY": "50.528276",
        "id": "BE.NMBS.008843406",
        "name": "Statte",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843406",
        "standardname": "Statte"
    },
    {
        "locationX": "5.190937",
        "locationY": "50.52263",
        "id": "BE.NMBS.008843430",
        "name": "Bas-Oha",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843430",
        "standardname": "Bas-Oha"
    },
    {
        "locationX": "5.611057",
        "locationY": "50.643967",
        "id": "BE.NMBS.008843901",
        "name": "Bressoux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008843901",
        "standardname": "Bressoux"
    },
    {
        "locationX": "5.854917",
        "locationY": "50.588135",
        "id": "BE.NMBS.008844008",
        "name": "Verviers-Central",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844008",
        "standardname": "Verviers-Central"
    },
    {
        "locationX": "5.865335",
        "locationY": "50.590921",
        "id": "BE.NMBS.008844057",
        "name": "Verviers-Palais",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844057",
        "standardname": "Verviers-Palais"
    },
    {
        "locationX": "5.80615",
        "locationY": "50.568179",
        "id": "BE.NMBS.008844206",
        "name": "Pepinster",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844206",
        "standardname": "Pepinster"
    },
    {
        "locationX": "5.741581",
        "locationY": "50.572089",
        "id": "BE.NMBS.008844230",
        "name": "Nessonvaux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844230",
        "standardname": "Nessonvaux"
    },
    {
        "locationX": "5.723665",
        "locationY": "50.565059",
        "id": "BE.NMBS.008844255",
        "name": "Fraipont",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844255",
        "standardname": "Fraipont"
    },
    {
        "locationX": "5.688346",
        "locationY": "50.573213",
        "id": "BE.NMBS.008844271",
        "name": "Trooz",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844271",
        "standardname": "Trooz"
    },
    {
        "locationX": "5.804397",
        "locationY": "50.563405",
        "id": "BE.NMBS.008844313",
        "name": "Pepinster-Cit\u00e9",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844313",
        "standardname": "Pepinster-Cit\u00e9"
    },
    {
        "locationX": "5.809935",
        "locationY": "50.544717",
        "id": "BE.NMBS.008844321",
        "name": "Juslenville",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844321",
        "standardname": "Juslenville"
    },
    {
        "locationX": "5.815031",
        "locationY": "50.536159",
        "id": "BE.NMBS.008844339",
        "name": "Theux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844339",
        "standardname": "Theux"
    },
    {
        "locationX": "5.822223",
        "locationY": "50.525723",
        "id": "BE.NMBS.008844347",
        "name": "Franchimont",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844347",
        "standardname": "Franchimont"
    },
    {
        "locationX": "5.855096",
        "locationY": "50.490305",
        "id": "BE.NMBS.008844404",
        "name": "Spa",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844404",
        "standardname": "Spa"
    },
    {
        "locationX": "5.866207",
        "locationY": "50.489307",
        "id": "BE.NMBS.008844420",
        "name": "Spa-G\u00e9ronst\u00e8re",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844420",
        "standardname": "Spa-G\u00e9ronst\u00e8re"
    },
    {
        "locationX": "5.975381",
        "locationY": "50.659707",
        "id": "BE.NMBS.008844503",
        "name": "Welkenraedt",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844503",
        "standardname": "Welkenraedt"
    },
    {
        "locationX": "5.936494",
        "locationY": "50.616244",
        "id": "BE.NMBS.008844545",
        "name": "Dolhain-Gileppe",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844545",
        "standardname": "Dolhain-Gileppe"
    },
    {
        "locationX": "6.03711",
        "locationY": "50.635157",
        "id": "BE.NMBS.008844628",
        "name": "Eupen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844628",
        "standardname": "Eupen"
    },
    {
        "locationX": "6.041335",
        "locationY": "50.718209",
        "id": "BE.NMBS.008844644",
        "name": "Hergenrath",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008844644",
        "standardname": "Hergenrath"
    },
    {
        "locationX": "5.953906",
        "locationY": "50.189409",
        "id": "BE.NMBS.008845005",
        "name": "Gouvy",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008845005",
        "standardname": "Gouvy"
    },
    {
        "locationX": "5.909211",
        "locationY": "50.278933",
        "id": "BE.NMBS.008845146",
        "name": "Vielsalm",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008845146",
        "standardname": "Vielsalm"
    },
    {
        "locationX": "5.873578",
        "locationY": "50.368214",
        "id": "BE.NMBS.008845203",
        "name": "Trois-Ponts",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008845203",
        "standardname": "Trois-Ponts"
    },
    {
        "locationX": "5.880473",
        "locationY": "50.391127",
        "id": "BE.NMBS.008845229",
        "name": "Coo",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008845229",
        "standardname": "Coo"
    },
    {
        "locationX": "5.692544",
        "locationY": "50.73776",
        "id": "BE.NMBS.008846201",
        "name": "Vis\u00e9",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008846201",
        "standardname": "Vis\u00e9"
    },
    {
        "locationX": "5.55788000",
        "locationY": "50.6048560",
        "id": "BE.NMBS.008847258",
        "name": "Y.renory",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008847258",
        "standardname": "Y.renory"
    },
    {
        "locationX": "6.04126900",
        "locationY": "50.7189550",
        "id": "BE.NMBS.008849023",
        "name": "Hergenrath-Frontiere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008849023",
        "standardname": "Hergenrath-Frontiere"
    },
    {
        "locationX": "5.70290300",
        "locationY": "50.7584130",
        "id": "BE.NMBS.008849064",
        "name": "Vise-Frontiere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008849064",
        "standardname": "Vise-Frontiere"
    },
    {
        "locationX": "5.96861300",
        "locationY": "50.1716530",
        "id": "BE.NMBS.008849072",
        "name": "Gouvy-Frontiere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008849072",
        "standardname": "Gouvy-Frontiere"
    },
    {
        "locationX": "4.82842",
        "locationY": "50.457737",
        "id": "BE.NMBS.008861119",
        "name": "Ronet",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861119",
        "standardname": "Ronet"
    },
    {
        "locationX": "4.806298",
        "locationY": "50.456236",
        "id": "BE.NMBS.008861127",
        "name": "Flawinne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861127",
        "standardname": "Flawinne"
    },
    {
        "locationX": "4.762368",
        "locationY": "50.443328",
        "id": "BE.NMBS.008861135",
        "name": "Floreffe",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861135",
        "standardname": "Floreffe"
    },
    {
        "locationX": "4.733548",
        "locationY": "50.439543",
        "id": "BE.NMBS.008861143",
        "name": "Frani\u00e8re",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861143",
        "standardname": "Frani\u00e8re"
    },
    {
        "locationX": "4.693807",
        "locationY": "50.452748",
        "id": "BE.NMBS.008861150",
        "name": "Moustier",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861150",
        "standardname": "Moustier"
    },
    {
        "locationX": "4.669392",
        "locationY": "50.45255",
        "id": "BE.NMBS.008861168",
        "name": "Ham-sur-Sambre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861168",
        "standardname": "Ham-sur-Sambre"
    },
    {
        "locationX": "4.691497",
        "locationY": "50.570489",
        "id": "BE.NMBS.008861200",
        "name": "Gembloux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861200",
        "standardname": "Gembloux"
    },
    {
        "locationX": "4.697627",
        "locationY": "50.557374",
        "id": "BE.NMBS.008861317",
        "name": "Chapelle-Dieu",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861317",
        "standardname": "Chapelle-Dieu"
    },
    {
        "locationX": "4.675829",
        "locationY": "50.513497",
        "id": "BE.NMBS.008861333",
        "name": "Mazy",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861333",
        "standardname": "Mazy"
    },
    {
        "locationX": "4.7201",
        "locationY": "50.551935",
        "id": "BE.NMBS.008861416",
        "name": "Lonz\u00e9e",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861416",
        "standardname": "Lonz\u00e9e"
    },
    {
        "locationX": "4.748533",
        "locationY": "50.534208",
        "id": "BE.NMBS.008861424",
        "name": "Beuzet",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861424",
        "standardname": "Beuzet"
    },
    {
        "locationX": "4.767788",
        "locationY": "50.5213",
        "id": "BE.NMBS.008861432",
        "name": "Saint-Denis-Bovesse",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861432",
        "standardname": "Saint-Denis-Bovesse"
    },
    {
        "locationX": "4.801866",
        "locationY": "50.499348",
        "id": "BE.NMBS.008861440",
        "name": "Rhisnes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861440",
        "standardname": "Rhisnes"
    },
    {
        "locationX": "4.668538",
        "locationY": "50.590823",
        "id": "BE.NMBS.008861515",
        "name": "Ernage",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861515",
        "standardname": "Ernage"
    },
    {
        "locationX": "4.648888",
        "locationY": "50.608819",
        "id": "BE.NMBS.008861523",
        "name": "Chastre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861523",
        "standardname": "Chastre"
    },
    {
        "locationX": "4.636393",
        "locationY": "50.619453",
        "id": "BE.NMBS.008861531",
        "name": "Blanmont",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861531",
        "standardname": "Blanmont"
    },
    {
        "locationX": "4.613884",
        "locationY": "50.637611",
        "id": "BE.NMBS.008861549",
        "name": "Mont-Saint-Guibert",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008861549",
        "standardname": "Mont-Saint-Guibert"
    },
    {
        "locationX": "5.769115",
        "locationY": "49.690939",
        "id": "BE.NMBS.008862018",
        "name": "Stockem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008862018",
        "standardname": "Stockem"
    },
    {
        "locationX": "4.86222",
        "locationY": "50.468794",
        "id": "BE.NMBS.008863008",
        "name": "Namur",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863008",
        "standardname": "Namur"
    },
    {
        "locationX": "4.876144",
        "locationY": "50.454843",
        "id": "BE.NMBS.008863115",
        "name": "Jambes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863115",
        "standardname": "Jambes"
    },
    {
        "locationX": "4.877071380615234",
        "locationY": "50.369000316323856",
        "id": "BE.NMBS.008863156",
        "name": "Lustin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863156",
        "standardname": "Lustin"
    },
    {
        "locationX": "4.880261",
        "locationY": "50.454798",
        "id": "BE.NMBS.008863354",
        "name": "Jambes-Est",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863354",
        "standardname": "Jambes-Est"
    },
    {
        "locationX": "4.884414",
        "locationY": "50.429098",
        "id": "BE.NMBS.008863362",
        "name": "Dave-Saint-Martin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863362",
        "standardname": "Dave-Saint-Martin"
    },
    {
        "locationX": "5.094699",
        "locationY": "50.496759",
        "id": "BE.NMBS.008863404",
        "name": "Andenne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863404",
        "standardname": "Andenne"
    },
    {
        "locationX": "5.081745",
        "locationY": "50.497209",
        "id": "BE.NMBS.008863438",
        "name": "Ch\u00e2teau-de-Seilles",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863438",
        "standardname": "Ch\u00e2teau-de-Seilles"
    },
    {
        "locationX": "5.026363",
        "locationY": "50.492247",
        "id": "BE.NMBS.008863446",
        "name": "Sclaigneaux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863446",
        "standardname": "Sclaigneaux"
    },
    {
        "locationX": "4.997939",
        "locationY": "50.47043",
        "id": "BE.NMBS.008863453",
        "name": "Nam\u00eache",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863453",
        "standardname": "Nam\u00eache"
    },
    {
        "locationX": "4.96458",
        "locationY": "50.480741",
        "id": "BE.NMBS.008863461",
        "name": "Marche-les-Dames",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863461",
        "standardname": "Marche-les-Dames"
    },
    {
        "locationX": "4.908182",
        "locationY": "50.260721",
        "id": "BE.NMBS.008863503",
        "name": "Dinant",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863503",
        "standardname": "Dinant"
    },
    {
        "locationX": "4.878643",
        "locationY": "50.32084",
        "id": "BE.NMBS.008863545",
        "name": "Yvoir",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863545",
        "standardname": "Yvoir"
    },
    {
        "locationX": "4.86996",
        "locationY": "50.348914",
        "id": "BE.NMBS.008863560",
        "name": "Godinne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863560",
        "standardname": "Godinne"
    },
    {
        "locationX": "4.90553",
        "locationY": "50.238023",
        "id": "BE.NMBS.008863818",
        "name": "Anseremme",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863818",
        "standardname": "Anseremme"
    },
    {
        "locationX": "4.964607",
        "locationY": "50.211235",
        "id": "BE.NMBS.008863834",
        "name": "Gendron-Celles",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863834",
        "standardname": "Gendron-Celles"
    },
    {
        "locationX": "5.006074",
        "locationY": "50.189868",
        "id": "BE.NMBS.008863842",
        "name": "Houyet",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863842",
        "standardname": "Houyet"
    },
    {
        "locationX": "4.95684",
        "locationY": "50.11443",
        "id": "BE.NMBS.008863867",
        "name": "Beauraing",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008863867",
        "standardname": "Beauraing"
    },
    {
        "locationX": "5.266698",
        "locationY": "50.160401",
        "id": "BE.NMBS.008864006",
        "name": "Rochefort-Jemelle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864006",
        "standardname": "Rochefort-Jemelle"
    },
    {
        "locationX": "5.276784",
        "locationY": "50.132759",
        "id": "BE.NMBS.008864311",
        "name": "Forri\u00e8res",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864311",
        "standardname": "Forri\u00e8res"
    },
    {
        "locationX": "5.280524",
        "locationY": "50.0906",
        "id": "BE.NMBS.008864337",
        "name": "Grupont",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864337",
        "standardname": "Grupont"
    },
    {
        "locationX": "5.313892",
        "locationY": "50.202821",
        "id": "BE.NMBS.008864345",
        "name": "Marloie",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864345",
        "standardname": "Marloie"
    },
    {
        "locationX": "5.301091",
        "locationY": "50.224135",
        "id": "BE.NMBS.008864352",
        "name": "Aye",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864352",
        "standardname": "Aye"
    },
    {
        "locationX": "5.346289",
        "locationY": "50.222472",
        "id": "BE.NMBS.008864410",
        "name": "Marche-en-Famenne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864410",
        "standardname": "Marche-en-Famenne"
    },
    {
        "locationX": "5.440136",
        "locationY": "50.28367",
        "id": "BE.NMBS.008864436",
        "name": "Melreux-Hotton",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864436",
        "standardname": "Melreux-Hotton"
    },
    {
        "locationX": "5.501542",
        "locationY": "50.349417",
        "id": "BE.NMBS.008864451",
        "name": "Barvaux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864451",
        "standardname": "Barvaux"
    },
    {
        "locationX": "5.519304",
        "locationY": "50.376798",
        "id": "BE.NMBS.008864469",
        "name": "Bomal",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864469",
        "standardname": "Bomal"
    },
    {
        "locationX": "5.091409",
        "locationY": "50.29105",
        "id": "BE.NMBS.008864501",
        "name": "Ciney",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864501",
        "standardname": "Ciney"
    },
    {
        "locationX": "5.107778",
        "locationY": "50.267768",
        "id": "BE.NMBS.008864816",
        "name": "Leignon",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864816",
        "standardname": "Leignon"
    },
    {
        "locationX": "5.124255",
        "locationY": "50.262366",
        "id": "BE.NMBS.008864824",
        "name": "Chapois",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864824",
        "standardname": "Chapois"
    },
    {
        "locationX": "5.194371",
        "locationY": "50.249044",
        "id": "BE.NMBS.008864832",
        "name": "Haversin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864832",
        "standardname": "Haversin"
    },
    {
        "locationX": "5.06116",
        "locationY": "50.343296",
        "id": "BE.NMBS.008864915",
        "name": "Natoye",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864915",
        "standardname": "Natoye"
    },
    {
        "locationX": "5.056099",
        "locationY": "50.357786",
        "id": "BE.NMBS.008864923",
        "name": "Flor\u00e9e",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864923",
        "standardname": "Flor\u00e9e"
    },
    {
        "locationX": "5.022839",
        "locationY": "50.368133",
        "id": "BE.NMBS.008864931",
        "name": "Assesse",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864931",
        "standardname": "Assesse"
    },
    {
        "locationX": "4.996051",
        "locationY": "50.387442",
        "id": "BE.NMBS.008864949",
        "name": "Courri\u00e8re",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864949",
        "standardname": "Courri\u00e8re"
    },
    {
        "locationX": "4.949739",
        "locationY": "50.406373",
        "id": "BE.NMBS.008864956",
        "name": "Sart-Bernard",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864956",
        "standardname": "Sart-Bernard"
    },
    {
        "locationX": "4.929756",
        "locationY": "50.419695",
        "id": "BE.NMBS.008864964",
        "name": "Naninne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008864964",
        "standardname": "Naninne"
    },
    {
        "locationX": "5.37927",
        "locationY": "49.920434",
        "id": "BE.NMBS.008865003",
        "name": "Libramont",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008865003",
        "standardname": "Libramont"
    },
    {
        "locationX": "5.709858",
        "locationY": "49.999737",
        "id": "BE.NMBS.008865110",
        "name": "Bastogne-Sud",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008865110",
        "standardname": "Bastogne-Sud"
    },
    {
        "locationX": "5.720744",
        "locationY": "50.006919",
        "id": "BE.NMBS.008865128",
        "name": "Bastogne-Nord",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008865128",
        "standardname": "Bastogne-Nord"
    },
    {
        "locationX": "5.292641",
        "locationY": "50.019504",
        "id": "BE.NMBS.008865227",
        "name": "Poix-Saint-Hubert",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008865227",
        "standardname": "Poix-Saint-Hubert"
    },
    {
        "locationX": "5.267193",
        "locationY": "49.852835",
        "id": "BE.NMBS.008865300",
        "name": "Bertrix",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008865300",
        "standardname": "Bertrix"
    },
    {
        "locationX": "5.118349",
        "locationY": "49.895408",
        "id": "BE.NMBS.008865540",
        "name": "Paliseul",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008865540",
        "standardname": "Paliseul"
    },
    {
        "locationX": "5.092784",
        "locationY": "49.905458",
        "id": "BE.NMBS.008865565",
        "name": "Carlsbourg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008865565",
        "standardname": "Carlsbourg"
    },
    {
        "locationX": "5.043047",
        "locationY": "49.934134",
        "id": "BE.NMBS.008865615",
        "name": "Graide",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008865615",
        "standardname": "Graide"
    },
    {
        "locationX": "4.978073",
        "locationY": "49.984123",
        "id": "BE.NMBS.008865649",
        "name": "Gedinne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008865649",
        "standardname": "Gedinne"
    },
    {
        "locationX": "5.809971",
        "locationY": "49.68053",
        "id": "BE.NMBS.008866001",
        "name": "Arlon",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866001",
        "standardname": "Arlon"
    },
    {
        "locationX": "5.786527",
        "locationY": "49.688243",
        "id": "BE.NMBS.008866118",
        "name": "Viville",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866118",
        "standardname": "Viville"
    },
    {
        "locationX": "5.632685",
        "locationY": "49.718249",
        "id": "BE.NMBS.008866142",
        "name": "Habay",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866142",
        "standardname": "Habay"
    },
    {
        "locationX": "5.539755",
        "locationY": "49.727337",
        "id": "BE.NMBS.008866175",
        "name": "Marbehan",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866175",
        "standardname": "Marbehan"
    },
    {
        "locationX": "5.452559",
        "locationY": "49.854318",
        "id": "BE.NMBS.008866258",
        "name": "Neufch\u00e2teau",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866258",
        "standardname": "Neufch\u00e2teau"
    },
    {
        "locationX": "5.519125",
        "locationY": "49.560821",
        "id": "BE.NMBS.008866407",
        "name": "Virton",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866407",
        "standardname": "Virton"
    },
    {
        "locationX": "5.741347",
        "locationY": "49.5562",
        "id": "BE.NMBS.008866530",
        "name": "Halanzy",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866530",
        "standardname": "Halanzy"
    },
    {
        "locationX": "5.828947",
        "locationY": "49.563346",
        "id": "BE.NMBS.008866605",
        "name": "Athus",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866605",
        "standardname": "Athus"
    },
    {
        "locationX": "5.79806",
        "locationY": "49.564093",
        "id": "BE.NMBS.008866654",
        "name": "Aubange",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866654",
        "standardname": "Aubange"
    },
    {
        "locationX": "5.818915",
        "locationY": "49.592777",
        "id": "BE.NMBS.008866662",
        "name": "Messancy",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866662",
        "standardname": "Messancy"
    },
    {
        "locationX": "5.331115",
        "locationY": "49.706967",
        "id": "BE.NMBS.008866845",
        "name": "Florenville",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008866845",
        "standardname": "Florenville"
    },
    {
        "locationX": "5.82493200",
        "locationY": "49.5517490",
        "id": "BE.NMBS.008869047",
        "name": "Athus-Frontiere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008869047",
        "standardname": "Athus-Frontiere"
    },
    {
        "locationX": "5.90415000",
        "locationY": "49.6439600",
        "id": "BE.NMBS.008869054",
        "name": "Sterpenich-Frontiere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008869054",
        "standardname": "Sterpenich-Frontiere"
    },
    {
        "locationX": "5.82630700",
        "locationY": "49.5494550",
        "id": "BE.NMBS.008869088",
        "name": "Aubange-Frontiere-Luxembourg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008869088",
        "standardname": "Aubange-Frontiere-Luxembourg"
    },
    {
        "locationX": "4.394223",
        "locationY": "50.412171",
        "id": "BE.NMBS.008871100",
        "name": "Marchienne-au-Pont",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871100",
        "standardname": "Marchienne-au-Pont"
    },
    {
        "locationX": "4.411294",
        "locationY": "50.352896",
        "id": "BE.NMBS.008871175",
        "name": "Jamioulx",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871175",
        "standardname": "Jamioulx"
    },
    {
        "locationX": "4.406305",
        "locationY": "50.333893",
        "id": "BE.NMBS.008871183",
        "name": "Beign\u00e9e",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871183",
        "standardname": "Beign\u00e9e"
    },
    {
        "locationX": "4.393199",
        "locationY": "50.443112",
        "id": "BE.NMBS.008871217",
        "name": "Roux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871217",
        "standardname": "Roux"
    },
    {
        "locationX": "4.400534",
        "locationY": "50.462007",
        "id": "BE.NMBS.008871225",
        "name": "Courcelles-Motte",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871225",
        "standardname": "Courcelles-Motte"
    },
    {
        "locationX": "4.38412",
        "locationY": "50.505856",
        "id": "BE.NMBS.008871308",
        "name": "Luttre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871308",
        "standardname": "Luttre"
    },
    {
        "locationX": "4.36357",
        "locationY": "50.535206",
        "id": "BE.NMBS.008871332",
        "name": "Obaix-Buzet",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871332",
        "standardname": "Obaix-Buzet"
    },
    {
        "locationX": "4.355291",
        "locationY": "50.513812",
        "id": "BE.NMBS.008871365",
        "name": "Pont-\u00e0-Celles",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871365",
        "standardname": "Pont-\u00e0-Celles"
    },
    {
        "locationX": "4.325123",
        "locationY": "50.497065",
        "id": "BE.NMBS.008871373",
        "name": "Gouy-lez-Pieton",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871373",
        "standardname": "Gouy-lez-Pieton"
    },
    {
        "locationX": "4.290308",
        "locationY": "50.492795",
        "id": "BE.NMBS.008871381",
        "name": "Godarville",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871381",
        "standardname": "Godarville"
    },
    {
        "locationX": "4.288438",
        "locationY": "50.434959",
        "id": "BE.NMBS.008871415",
        "name": "Pi\u00e9ton",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871415",
        "standardname": "Pi\u00e9ton"
    },
    {
        "locationX": "4.325384",
        "locationY": "50.433314",
        "id": "BE.NMBS.008871514",
        "name": "Forchies",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871514",
        "standardname": "Forchies"
    },
    {
        "locationX": "4.113562",
        "locationY": "50.304192",
        "id": "BE.NMBS.008871605",
        "name": "Erquelinnes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871605",
        "standardname": "Erquelinnes"
    },
    {
        "locationX": "4.132314",
        "locationY": "50.310179",
        "id": "BE.NMBS.008871647",
        "name": "Erquelinnes-Village",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871647",
        "standardname": "Erquelinnes-Village"
    },
    {
        "locationX": "4.158427",
        "locationY": "50.312642",
        "id": "BE.NMBS.008871662",
        "name": "Solre-sur-Sambre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871662",
        "standardname": "Solre-sur-Sambre"
    },
    {
        "locationX": "4.186833",
        "locationY": "50.316328",
        "id": "BE.NMBS.008871670",
        "name": "Labuissi\u00e8re",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871670",
        "standardname": "Labuissi\u00e8re"
    },
    {
        "locationX": "4.212785",
        "locationY": "50.321164",
        "id": "BE.NMBS.008871688",
        "name": "Fontaine-Valmont",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871688",
        "standardname": "Fontaine-Valmont"
    },
    {
        "locationX": "4.260958",
        "locationY": "50.346469",
        "id": "BE.NMBS.008871712",
        "name": "Lobbes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871712",
        "standardname": "Lobbes"
    },
    {
        "locationX": "4.288906",
        "locationY": "50.342738",
        "id": "BE.NMBS.008871811",
        "name": "Thuin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871811",
        "standardname": "Thuin"
    },
    {
        "locationX": "4.308736",
        "locationY": "50.363692",
        "id": "BE.NMBS.008871829",
        "name": "Hourpes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871829",
        "standardname": "Hourpes"
    },
    {
        "locationX": "4.350976",
        "locationY": "50.377311",
        "id": "BE.NMBS.008871837",
        "name": "Landelies",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871837",
        "standardname": "Landelies"
    },
    {
        "locationX": "4.388767",
        "locationY": "50.397465",
        "id": "BE.NMBS.008871852",
        "name": "Marchienne-Zone",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008871852",
        "standardname": "Marchienne-Zone"
    },
    {
        "locationX": "4.438567",
        "locationY": "50.40471",
        "id": "BE.NMBS.008872009",
        "name": "Charleroi-Central",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008872009",
        "standardname": "Charleroi-Central"
    },
    {
        "locationX": "4.436653",
        "locationY": "50.410948",
        "id": "BE.NMBS.008872066",
        "name": "Charleroi-Ouest",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008872066",
        "standardname": "Charleroi-Ouest"
    },
    {
        "locationX": "4.462946",
        "locationY": "50.432451",
        "id": "BE.NMBS.008872306",
        "name": "Lodelinsart",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008872306",
        "standardname": "Lodelinsart"
    },
    {
        "locationX": "4.543741",
        "locationY": "50.481927",
        "id": "BE.NMBS.008872413",
        "name": "Fleurus",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008872413",
        "standardname": "Fleurus"
    },
    {
        "locationX": "4.566133",
        "locationY": "50.511726",
        "id": "BE.NMBS.008872520",
        "name": "Ligny",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008872520",
        "standardname": "Ligny"
    },
    {
        "locationX": "4.552676",
        "locationY": "50.558084",
        "id": "BE.NMBS.008872553",
        "name": "Tilly",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008872553",
        "standardname": "Tilly"
    },
    {
        "locationX": "4.533349",
        "locationY": "50.578103",
        "id": "BE.NMBS.008872579",
        "name": "Villers-la-Ville",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008872579",
        "standardname": "Villers-la-Ville"
    },
    {
        "locationX": "4.539157",
        "locationY": "50.610338",
        "id": "BE.NMBS.008872587",
        "name": "La Roche (Brabant)",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008872587",
        "standardname": "La Roche (Brabant)"
    },
    {
        "locationX": "4.54926",
        "locationY": "50.621826",
        "id": "BE.NMBS.008872611",
        "name": "Faux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008872611",
        "standardname": "Faux"
    },
    {
        "locationX": "4.435879",
        "locationY": "50.259219",
        "id": "BE.NMBS.008873007",
        "name": "Walcourt",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008873007",
        "standardname": "Walcourt"
    },
    {
        "locationX": "4.535956",
        "locationY": "50.191639",
        "id": "BE.NMBS.008873122",
        "name": "Philippeville",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008873122",
        "standardname": "Philippeville"
    },
    {
        "locationX": "4.50040400",
        "locationY": "50.2369800",
        "id": "BE.NMBS.008873239",
        "name": "Yves-Gomez\u00e9e",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008873239",
        "standardname": "Yves-Gomez\u00e9e"
    },
    {
        "locationX": "4.428805",
        "locationY": "50.269278",
        "id": "BE.NMBS.008873312",
        "name": "Pry",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008873312",
        "standardname": "Pry"
    },
    {
        "locationX": "4.405909",
        "locationY": "50.285603",
        "id": "BE.NMBS.008873320",
        "name": "Berz\u00e9e",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008873320",
        "standardname": "Berz\u00e9e"
    },
    {
        "locationX": "4.391491",
        "locationY": "50.300138",
        "id": "BE.NMBS.008873379",
        "name": "Cour-sur-Heure",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008873379",
        "standardname": "Cour-sur-Heure"
    },
    {
        "locationX": "4.404696",
        "locationY": "50.319555",
        "id": "BE.NMBS.008873387",
        "name": "Ham-sur-Heure",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008873387",
        "standardname": "Ham-sur-Heure"
    },
    {
        "locationX": "4.521861",
        "locationY": "50.410103",
        "id": "BE.NMBS.008874005",
        "name": "Ch\u00e2telet",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008874005",
        "standardname": "Ch\u00e2telet"
    },
    {
        "locationX": "4.46851",
        "locationY": "50.392718",
        "id": "BE.NMBS.008874054",
        "name": "Couillet",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008874054",
        "standardname": "Couillet"
    },
    {
        "locationX": "4.54278700",
        "locationY": "50.4238300",
        "id": "BE.NMBS.008874559",
        "name": "Le Campinaire",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008874559",
        "standardname": "Le Campinaire"
    },
    {
        "locationX": "4.55265000",
        "locationY": "50.4291480",
        "id": "BE.NMBS.008874567",
        "name": "Farciennes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008874567",
        "standardname": "Farciennes"
    },
    {
        "locationX": "4.584552",
        "locationY": "50.429529",
        "id": "BE.NMBS.008874583",
        "name": "Aiseau",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008874583",
        "standardname": "Aiseau"
    },
    {
        "locationX": "4.608823",
        "locationY": "50.432235",
        "id": "BE.NMBS.008874609",
        "name": "Tamines",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008874609",
        "standardname": "Tamines"
    },
    {
        "locationX": "4.630532",
        "locationY": "50.449197",
        "id": "BE.NMBS.008874716",
        "name": "Auvelais",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008874716",
        "standardname": "Auvelais"
    },
    {
        "locationX": "4.662632",
        "locationY": "50.45095",
        "id": "BE.NMBS.008874724",
        "name": "Jemeppe-sur-Sambre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008874724",
        "standardname": "Jemeppe-sur-Sambre"
    },
    {
        "locationX": "4.525691",
        "locationY": "50.09549",
        "id": "BE.NMBS.008875002",
        "name": "Mariembourg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008875002",
        "standardname": "Mariembourg"
    },
    {
        "locationX": "4.491702",
        "locationY": "50.056324",
        "id": "BE.NMBS.008875127",
        "name": "Couvin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008875127",
        "standardname": "Couvin"
    },
    {
        "locationX": "4.10792900",
        "locationY": "50.3023300",
        "id": "BE.NMBS.008879004",
        "name": "Erquelinnes-Fronti\u00e8re",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008879004",
        "standardname": "Erquelinnes-Fronti\u00e8re"
    },
    {
        "locationX": "3.942542",
        "locationY": "50.453854",
        "id": "BE.NMBS.008881000",
        "name": "Mons",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881000",
        "standardname": "Mons"
    },
    {
        "locationX": "3.906343",
        "locationY": "50.487411",
        "id": "BE.NMBS.008881125",
        "name": "Ghlin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881125",
        "standardname": "Ghlin"
    },
    {
        "locationX": "3.887987",
        "locationY": "50.507025",
        "id": "BE.NMBS.008881158",
        "name": "Erbisoeul",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881158",
        "standardname": "Erbis\u0153ul"
    },
    {
        "locationX": "3.910694",
        "locationY": "50.530496",
        "id": "BE.NMBS.008881166",
        "name": "Jurbise",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881166",
        "standardname": "Jurbeke"
    },
    {
        "locationX": "3.962139",
        "locationY": "50.536546",
        "id": "BE.NMBS.008881174",
        "name": "Masnuy-Saint-Pierre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881174",
        "standardname": "Masnuy-Saint-Pierre"
    },
    {
        "locationX": "3.903224",
        "locationY": "50.559342",
        "id": "BE.NMBS.008881190",
        "name": "Lens",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881190",
        "standardname": "Lens"
    },
    {
        "locationX": "3.956089",
        "locationY": "50.471644",
        "id": "BE.NMBS.008881315",
        "name": "Nimy",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881315",
        "standardname": "Nimy"
    },
    {
        "locationX": "4.007804",
        "locationY": "50.469873",
        "id": "BE.NMBS.008881406",
        "name": "Obourg",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881406",
        "standardname": "Obourg"
    },
    {
        "locationX": "4.059987",
        "locationY": "50.470754",
        "id": "BE.NMBS.008881430",
        "name": "Havre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881430",
        "standardname": "Havre"
    },
    {
        "locationX": "4.098523",
        "locationY": "50.46954",
        "id": "BE.NMBS.008881455",
        "name": "Thieu",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881455",
        "standardname": "Thieu"
    },
    {
        "locationX": "4.126345",
        "locationY": "50.474457",
        "id": "BE.NMBS.008881463",
        "name": "Bracquegnies",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881463",
        "standardname": "Bracquegnies"
    },
    {
        "locationX": "3.909489",
        "locationY": "50.341534",
        "id": "BE.NMBS.008881505",
        "name": "Quevy",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881505",
        "standardname": "Quevy"
    },
    {
        "locationX": "3.911638",
        "locationY": "50.390642",
        "id": "BE.NMBS.008881562",
        "name": "Genly",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881562",
        "standardname": "Genly"
    },
    {
        "locationX": "3.906586",
        "locationY": "50.405932",
        "id": "BE.NMBS.008881570",
        "name": "Frameries",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008881570",
        "standardname": "Frameries"
    },
    {
        "locationX": "4.179858",
        "locationY": "50.478161",
        "id": "BE.NMBS.008882107",
        "name": "La Louvi\u00e8re-Centre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008882107",
        "standardname": "La Louvi\u00e8re-Centre"
    },
    {
        "locationX": "4.190609",
        "locationY": "50.464974",
        "id": "BE.NMBS.008882206",
        "name": "La Louvi\u00e8re-Sud",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008882206",
        "standardname": "La Louvi\u00e8re-Sud"
    },
    {
        "locationX": "4.247367",
        "locationY": "50.457998",
        "id": "BE.NMBS.008882230",
        "name": "Morlanwelz",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008882230",
        "standardname": "Morlanwelz"
    },
    {
        "locationX": "4.263826",
        "locationY": "50.447957",
        "id": "BE.NMBS.008882248",
        "name": "Carnieres",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008882248",
        "standardname": "Carnieres"
    },
    {
        "locationX": "4.211041",
        "locationY": "50.430797",
        "id": "BE.NMBS.008882339",
        "name": "Leval",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008882339",
        "standardname": "Leval"
    },
    {
        "locationX": "4.172451",
        "locationY": "50.408764",
        "id": "BE.NMBS.008882362",
        "name": "Binche",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008882362",
        "standardname": "Binche"
    },
    {
        "locationX": "4.234683",
        "locationY": "50.506108",
        "id": "BE.NMBS.008882701",
        "name": "Manage",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008882701",
        "standardname": "Manage"
    },
    {
        "locationX": "4.137662",
        "locationY": "50.605079",
        "id": "BE.NMBS.008883006",
        "name": "Braine-le-Comte",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883006",
        "standardname": "Braine-le-Comte"
    },
    {
        "locationX": "4.175893",
        "locationY": "50.651005",
        "id": "BE.NMBS.008883022",
        "name": "Hennuy\u00e8res",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883022",
        "standardname": "Hennuy\u00e8res"
    },
    {
        "locationX": "4.067519",
        "locationY": "50.572763",
        "id": "BE.NMBS.008883113",
        "name": "Soignies",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883113",
        "standardname": "Soignies"
    },
    {
        "locationX": "4.010672",
        "locationY": "50.543602",
        "id": "BE.NMBS.008883121",
        "name": "Neufvilles",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883121",
        "standardname": "Neufvilles"
    },
    {
        "locationX": "4.156639",
        "locationY": "50.56239",
        "id": "BE.NMBS.008883212",
        "name": "\u00c9caussinnes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883212",
        "standardname": "\u00c9caussinnes"
    },
    {
        "locationX": "4.177098",
        "locationY": "50.546173",
        "id": "BE.NMBS.008883220",
        "name": "Marche-lez-\u00c9caussinnes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883220",
        "standardname": "Marche-lez-\u00c9caussinnes"
    },
    {
        "locationX": "4.211581",
        "locationY": "50.519358",
        "id": "BE.NMBS.008883238",
        "name": "Familleureux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883238",
        "standardname": "Familleureux"
    },
    {
        "locationX": "4.047357",
        "locationY": "50.697273",
        "id": "BE.NMBS.008883311",
        "name": "Edingen \/ Enghien",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883311",
        "standardname": "Enghien"
    },
    {
        "locationX": "3.935863",
        "locationY": "50.662386",
        "id": "BE.NMBS.008883436",
        "name": "Silly",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883436",
        "standardname": "Silly"
    },
    {
        "locationX": "4.205729",
        "locationY": "50.691708",
        "id": "BE.NMBS.008883808",
        "name": "Tubize",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008883808",
        "standardname": "Tubize"
    },
    {
        "locationX": "3.820253",
        "locationY": "50.44286",
        "id": "BE.NMBS.008884004",
        "name": "Saint-Ghislain",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884004",
        "standardname": "Saint-Ghislain"
    },
    {
        "locationX": "3.797025",
        "locationY": "50.436388",
        "id": "BE.NMBS.008884319",
        "name": "Boussu",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884319",
        "standardname": "Boussu"
    },
    {
        "locationX": "3.766893",
        "locationY": "50.428019",
        "id": "BE.NMBS.008884327",
        "name": "Hainin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884327",
        "standardname": "Hainin"
    },
    {
        "locationX": "3.68608",
        "locationY": "50.410103",
        "id": "BE.NMBS.008884335",
        "name": "Quievrain",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884335",
        "standardname": "Quievrain"
    },
    {
        "locationX": "3.744708",
        "locationY": "50.423335",
        "id": "BE.NMBS.008884350",
        "name": "Thulin",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884350",
        "standardname": "Thulin"
    },
    {
        "locationX": "3.856543",
        "locationY": "50.449827",
        "id": "BE.NMBS.008884541",
        "name": "Quaregnon",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884541",
        "standardname": "Quaregnon"
    },
    {
        "locationX": "3.885587",
        "locationY": "50.452577",
        "id": "BE.NMBS.008884566",
        "name": "Jemappes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884566",
        "standardname": "Jemappes"
    },
    {
        "locationX": "3.724248",
        "locationY": "50.464542",
        "id": "BE.NMBS.008884632",
        "name": "Ville-Pommer\u0153ul",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884632",
        "standardname": "Ville-Pommer\u0153ul"
    },
    {
        "locationX": "3.698764",
        "locationY": "50.482565",
        "id": "BE.NMBS.008884640",
        "name": "Harchies",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884640",
        "standardname": "Harchies"
    },
    {
        "locationX": "3.666304",
        "locationY": "50.505461",
        "id": "BE.NMBS.008884715",
        "name": "Blaton",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884715",
        "standardname": "Blaton"
    },
    {
        "locationX": "3.592772",
        "locationY": "50.513704",
        "id": "BE.NMBS.008884855",
        "name": "P\u00e9ruwelz",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884855",
        "standardname": "P\u00e9ruwelz"
    },
    {
        "locationX": "3.52618",
        "locationY": "50.527359",
        "id": "BE.NMBS.008884889",
        "name": "Callenelle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008884889",
        "standardname": "Callenelle"
    },
    {
        "locationX": "3.396942",
        "locationY": "50.613134",
        "id": "BE.NMBS.008885001",
        "name": "Tournai",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008885001",
        "standardname": "Tournai"
    },
    {
        "locationX": "3.354837",
        "locationY": "50.62989",
        "id": "BE.NMBS.008885068",
        "name": "Froyennes",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008885068",
        "standardname": "Froyennes"
    },
    {
        "locationX": "3.451309",
        "locationY": "50.569626",
        "id": "BE.NMBS.008885522",
        "name": "Antoing",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008885522",
        "standardname": "Antoing"
    },
    {
        "locationX": "3.495527",
        "locationY": "50.547557",
        "id": "BE.NMBS.008885530",
        "name": "Maubray",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008885530",
        "standardname": "Maubray"
    },
    {
        "locationX": "3.228448",
        "locationY": "50.741005",
        "id": "BE.NMBS.008885704",
        "name": "Moeskroen \/ Mouscron",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008885704",
        "standardname": "Mouscron"
    },
    {
        "locationX": "3.245959",
        "locationY": "50.713894",
        "id": "BE.NMBS.008885753",
        "name": "Herseaux",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008885753",
        "standardname": "Herseaux"
    },
    {
        "locationX": "3.777429",
        "locationY": "50.626932",
        "id": "BE.NMBS.008886009",
        "name": "Ath",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886009",
        "standardname": "Ath"
    },
    {
        "locationX": "3.800117",
        "locationY": "50.614356",
        "id": "BE.NMBS.008886041",
        "name": "Maffle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886041",
        "standardname": "Maffle"
    },
    {
        "locationX": "3.833917",
        "locationY": "50.600108",
        "id": "BE.NMBS.008886058",
        "name": "Mevergnies-Attre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886058",
        "standardname": "Mevergnies-Attre"
    },
    {
        "locationX": "3.852551",
        "locationY": "50.594229",
        "id": "BE.NMBS.008886066",
        "name": "Brugelette",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886066",
        "standardname": "Brugelette"
    },
    {
        "locationX": "3.874809",
        "locationY": "50.586759",
        "id": "BE.NMBS.008886074",
        "name": "Cambron-Casteau",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886074",
        "standardname": "Cambron-Casteau"
    },
    {
        "locationX": "3.616872",
        "locationY": "50.600612",
        "id": "BE.NMBS.008886348",
        "name": "Leuze",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886348",
        "standardname": "Leuze"
    },
    {
        "locationX": "3.836434",
        "locationY": "50.712015",
        "id": "BE.NMBS.008886504",
        "name": "Lessines",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886504",
        "standardname": "Lessen"
    },
    {
        "locationX": "3.847086",
        "locationY": "50.733095",
        "id": "BE.NMBS.008886546",
        "name": "Acren",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886546",
        "standardname": "Acren"
    },
    {
        "locationX": "3.835175",
        "locationY": "50.703062",
        "id": "BE.NMBS.008886553",
        "name": "Houraing",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886553",
        "standardname": "Houraing"
    },
    {
        "locationX": "3.823408",
        "locationY": "50.686585",
        "id": "BE.NMBS.008886561",
        "name": "Papignies",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886561",
        "standardname": "Papegem"
    },
    {
        "locationX": "3.793627",
        "locationY": "50.661235",
        "id": "BE.NMBS.008886587",
        "name": "Rebaix",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008886587",
        "standardname": "Rebaix"
    },
    {
        "locationX": "3.90875300",
        "locationY": "50.3277100",
        "id": "BE.NMBS.008889003",
        "name": "Quevy-frontiere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008889003",
        "standardname": "Quevy-frontiere"
    },
    {
        "locationX": "3.19608600",
        "locationY": "50.7217160",
        "id": "BE.NMBS.008889011",
        "name": "Mouscron-Frontiere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008889011",
        "standardname": "Mouscron-Frontiere"
    },
    {
        "locationX": "3.26373000",
        "locationY": "50.6174900",
        "id": "BE.NMBS.008889045",
        "name": "Blandain-Frontiere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008889045",
        "standardname": "Blandain-Frontiere"
    },
    {
        "locationX": "3.77939000",
        "locationY": "51.0139400",
        "id": "BE.NMBS.008890142",
        "name": "Melle PW",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008890142",
        "standardname": "Melle PW"
    },
    {
        "locationX": "3.216726",
        "locationY": "51.197226",
        "id": "BE.NMBS.008891009",
        "name": "Brugge",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891009",
        "standardname": "Brugge"
    },
    {
        "locationX": "3.201795",
        "locationY": "51.223115",
        "id": "BE.NMBS.008891033",
        "name": "Brugge-Sint-Pieters",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891033",
        "standardname": "Brugge-Sint-Pieters"
    },
    {
        "locationX": "3.257466",
        "locationY": "51.154114",
        "id": "BE.NMBS.008891116",
        "name": "Oostkamp",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891116",
        "standardname": "Oostkamp"
    },
    {
        "locationX": "3.329892",
        "locationY": "51.128009",
        "id": "BE.NMBS.008891124",
        "name": "Beernem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891124",
        "standardname": "Beernem"
    },
    {
        "locationX": "3.38673",
        "locationY": "51.107612",
        "id": "BE.NMBS.008891132",
        "name": "Maria-Aalter",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891132",
        "standardname": "Maria-Aalter"
    },
    {
        "locationX": "3.447848",
        "locationY": "51.092295",
        "id": "BE.NMBS.008891140",
        "name": "Aalter",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891140",
        "standardname": "Aalter"
    },
    {
        "locationX": "3.487374",
        "locationY": "51.083908",
        "id": "BE.NMBS.008891157",
        "name": "Bellem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891157",
        "standardname": "Bellem"
    },
    {
        "locationX": "3.536212",
        "locationY": "51.073202",
        "id": "BE.NMBS.008891165",
        "name": "Hansbeke",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891165",
        "standardname": "Hansbeke"
    },
    {
        "locationX": "3.18402800",
        "locationY": "51.3305030",
        "id": "BE.NMBS.008891173",
        "name": "Zeebrugge-Strand",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891173",
        "standardname": "Zeebrugge-Strand"
    },
    {
        "locationX": "3.16414",
        "locationY": "51.127047",
        "id": "BE.NMBS.008891264",
        "name": "Zedelgem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891264",
        "standardname": "Zedelgem"
    },
    {
        "locationX": "3.105871",
        "locationY": "51.064707",
        "id": "BE.NMBS.008891314",
        "name": "Torhout",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891314",
        "standardname": "Torhout"
    },
    {
        "locationX": "3.133864",
        "locationY": "51.312432",
        "id": "BE.NMBS.008891405",
        "name": "Blankenberge",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891405",
        "standardname": "Blankenberge"
    },
    {
        "locationX": "3.19517",
        "locationY": "51.326383",
        "id": "BE.NMBS.008891553",
        "name": "Zeebrugge-Dorp",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891553",
        "standardname": "Zeebrugge-Dorp"
    },
    {
        "locationX": "3.191557",
        "locationY": "51.306409",
        "id": "BE.NMBS.008891611",
        "name": "Zwankendamme",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891611",
        "standardname": "Zwankendamme"
    },
    {
        "locationX": "3.194505",
        "locationY": "51.294714",
        "id": "BE.NMBS.008891629",
        "name": "Lissewege",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891629",
        "standardname": "Lissewege"
    },
    {
        "locationX": "3.239181",
        "locationY": "51.333979",
        "id": "BE.NMBS.008891645",
        "name": "Heist",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891645",
        "standardname": "Heist"
    },
    {
        "locationX": "3.263587",
        "locationY": "51.338195",
        "id": "BE.NMBS.008891652",
        "name": "Duinbergen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891652",
        "standardname": "Duinbergen"
    },
    {
        "locationX": "3.285188",
        "locationY": "51.339894",
        "id": "BE.NMBS.008891660",
        "name": "Knokke",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891660",
        "standardname": "Knokke"
    },
    {
        "locationX": "2.925809",
        "locationY": "51.228212",
        "id": "BE.NMBS.008891702",
        "name": "Oostende",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008891702",
        "standardname": "Oostende"
    },
    {
        "locationX": "3.710675",
        "locationY": "51.035896",
        "id": "BE.NMBS.008892007",
        "name": "Ghent-Sint-Pieters",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892007",
        "standardname": "Gent-Sint-Pieters"
    },
    {
        "locationX": "3.655202",
        "locationY": "51.047295",
        "id": "BE.NMBS.008892031",
        "name": "Drongen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892031",
        "standardname": "Drongen"
    },
    {
        "locationX": "3.576852",
        "locationY": "51.064311",
        "id": "BE.NMBS.008892056",
        "name": "Landegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892056",
        "standardname": "Landegem"
    },
    {
        "locationX": "3.650465",
        "locationY": "50.997063",
        "id": "BE.NMBS.008892080",
        "name": "De Pinte",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892080",
        "standardname": "De Pinte"
    },
    {
        "locationX": "3.534432",
        "locationY": "50.978258",
        "id": "BE.NMBS.008892106",
        "name": "Deinze",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892106",
        "standardname": "Deinze"
    },
    {
        "locationX": "3.127212",
        "locationY": "51.025163",
        "id": "BE.NMBS.008892205",
        "name": "Lichtervelde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892205",
        "standardname": "Lichtervelde"
    },
    {
        "locationX": "3.330341",
        "locationY": "50.990842",
        "id": "BE.NMBS.008892254",
        "name": "Tielt",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892254",
        "standardname": "Tielt"
    },
    {
        "locationX": "3.418363",
        "locationY": "50.98446",
        "id": "BE.NMBS.008892288",
        "name": "Aarsele",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892288",
        "standardname": "Aarsele"
    },
    {
        "locationX": "2.66994",
        "locationY": "51.073867",
        "id": "BE.NMBS.008892304",
        "name": "Veurne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892304",
        "standardname": "Veurne"
    },
    {
        "locationX": "2.65277",
        "locationY": "51.079197",
        "id": "BE.NMBS.008892320",
        "name": "Koksijde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892320",
        "standardname": "Koksijde"
    },
    {
        "locationX": "2.601963",
        "locationY": "51.0774",
        "id": "BE.NMBS.008892338",
        "name": "De Panne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892338",
        "standardname": "De Panne"
    },
    {
        "locationX": "3.043459",
        "locationY": "51.025244",
        "id": "BE.NMBS.008892403",
        "name": "Kortemark",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892403",
        "standardname": "Kortemark"
    },
    {
        "locationX": "2.868943",
        "locationY": "51.032723",
        "id": "BE.NMBS.008892452",
        "name": "Diksmuide",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892452",
        "standardname": "Diksmuide"
    },
    {
        "locationX": "3.600386",
        "locationY": "50.850116",
        "id": "BE.NMBS.008892601",
        "name": "Oudenaarde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892601",
        "standardname": "Oudenaarde"
    },
    {
        "locationX": "3.623776",
        "locationY": "50.870432",
        "id": "BE.NMBS.008892627",
        "name": "Eine",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892627",
        "standardname": "Eine"
    },
    {
        "locationX": "3.646384",
        "locationY": "50.908025",
        "id": "BE.NMBS.008892635",
        "name": "Zingem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892635",
        "standardname": "Zingem"
    },
    {
        "locationX": "3.639732",
        "locationY": "50.930021",
        "id": "BE.NMBS.008892643",
        "name": "Gavere-Asper",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892643",
        "standardname": "Gavere-Asper"
    },
    {
        "locationX": "3.627839",
        "locationY": "50.960774",
        "id": "BE.NMBS.008892650",
        "name": "Eke-Nazareth",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892650",
        "standardname": "Eke-Nazareth"
    },
    {
        "locationX": "3.698395",
        "locationY": "50.874297",
        "id": "BE.NMBS.008892692",
        "name": "Sint-Denijs-Boekel",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892692",
        "standardname": "Sint-Denijs-Boekel"
    },
    {
        "locationX": "3.495014",
        "locationY": "50.826385",
        "id": "BE.NMBS.008892734",
        "name": "Anzegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892734",
        "standardname": "Anzegem"
    },
    {
        "locationX": "3.602552",
        "locationY": "50.742506",
        "id": "BE.NMBS.008892908",
        "name": "Ronse \/ Renaix",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008892908",
        "standardname": "Ronse"
    },
    {
        "locationX": "3.768889",
        "locationY": "51.017531",
        "id": "BE.NMBS.008893013",
        "name": "Merelbeke",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893013",
        "standardname": "Merelbeke"
    },
    {
        "locationX": "3.797088",
        "locationY": "51.002807",
        "id": "BE.NMBS.008893039",
        "name": "Melle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893039",
        "standardname": "Melle"
    },
    {
        "locationX": "3.801672",
        "locationY": "50.980199",
        "id": "BE.NMBS.008893047",
        "name": "Gontrode",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893047",
        "standardname": "Gontrode"
    },
    {
        "locationX": "3.791146",
        "locationY": "50.970545",
        "id": "BE.NMBS.008893054",
        "name": "Landskouter",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893054",
        "standardname": "Landskouter"
    },
    {
        "locationX": "3.781339",
        "locationY": "50.953519",
        "id": "BE.NMBS.008893062",
        "name": "Moortsele",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893062",
        "standardname": "Moortsele"
    },
    {
        "locationX": "3.777842",
        "locationY": "50.937069",
        "id": "BE.NMBS.008893070",
        "name": "Scheldewindeke",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893070",
        "standardname": "Scheldewindeke"
    },
    {
        "locationX": "3.740591",
        "locationY": "51.056365",
        "id": "BE.NMBS.008893120",
        "name": "Ghent-Dampoort",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893120",
        "standardname": "Gent-Dampoort"
    },
    {
        "locationX": "3.756322",
        "locationY": "51.038647",
        "id": "BE.NMBS.008893179",
        "name": "Gentbrugge",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893179",
        "standardname": "Gentbrugge"
    },
    {
        "locationX": "3.719071",
        "locationY": "51.088357",
        "id": "BE.NMBS.008893211",
        "name": "Wondelgem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893211",
        "standardname": "Wondelgem"
    },
    {
        "locationX": "3.70138",
        "locationY": "51.107585",
        "id": "BE.NMBS.008893252",
        "name": "Evergem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893252",
        "standardname": "Evergem"
    },
    {
        "locationX": "3.667526",
        "locationY": "51.126607",
        "id": "BE.NMBS.008893260",
        "name": "Sleidinge",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893260",
        "standardname": "Sleidinge"
    },
    {
        "locationX": "4.101427",
        "locationY": "51.022781",
        "id": "BE.NMBS.008893401",
        "name": "Dendermonde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893401",
        "standardname": "Dendermonde"
    },
    {
        "locationX": "4.117832",
        "locationY": "51.021693",
        "id": "BE.NMBS.008893443",
        "name": "Sint-Gillis",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893443",
        "standardname": "Sint-Gillis-Dendermonde"
    },
    {
        "locationX": "4.064472",
        "locationY": "51.01523",
        "id": "BE.NMBS.008893518",
        "name": "Oudegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893518",
        "standardname": "Oudegem"
    },
    {
        "locationX": "4.011094",
        "locationY": "51.003149",
        "id": "BE.NMBS.008893526",
        "name": "Schoonaarde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893526",
        "standardname": "Schoonaarde"
    },
    {
        "locationX": "3.969195",
        "locationY": "51.001962",
        "id": "BE.NMBS.008893534",
        "name": "Wichelen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893534",
        "standardname": "Wichelen"
    },
    {
        "locationX": "3.921373",
        "locationY": "51.003149",
        "id": "BE.NMBS.008893542",
        "name": "Schellebelle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893542",
        "standardname": "Schellebelle"
    },
    {
        "locationX": "3.881883",
        "locationY": "51.001603",
        "id": "BE.NMBS.008893559",
        "name": "Wetteren",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893559",
        "standardname": "Wetteren"
    },
    {
        "locationX": "3.829593",
        "locationY": "50.99175",
        "id": "BE.NMBS.008893567",
        "name": "Kwatrecht",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893567",
        "standardname": "Kwatrecht"
    },
    {
        "locationX": "3.959361",
        "locationY": "50.984397",
        "id": "BE.NMBS.008893583",
        "name": "Serskamp",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893583",
        "standardname": "Serskamp"
    },
    {
        "locationX": "3.574515",
        "locationY": "51.181333",
        "id": "BE.NMBS.008893708",
        "name": "Eeklo",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893708",
        "standardname": "Eeklo"
    },
    {
        "locationX": "3.615353",
        "locationY": "51.154608",
        "id": "BE.NMBS.008893815",
        "name": "Waarschoot",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008893815",
        "standardname": "Waarschoot"
    },
    {
        "locationX": "3.879384",
        "locationY": "51.08753",
        "id": "BE.NMBS.008894151",
        "name": "Beervelde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894151",
        "standardname": "Beervelde"
    },
    {
        "locationX": "3.987794",
        "locationY": "51.108062",
        "id": "BE.NMBS.008894201",
        "name": "Lokeren",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894201",
        "standardname": "Lokeren"
    },
    {
        "locationX": "4.041999",
        "locationY": "51.073256",
        "id": "BE.NMBS.008894235",
        "name": "Zele",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894235",
        "standardname": "Zele"
    },
    {
        "locationX": "4.06894",
        "locationY": "51.143398",
        "id": "BE.NMBS.008894425",
        "name": "Sinaai",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894425",
        "standardname": "Sinaai"
    },
    {
        "locationX": "4.088608",
        "locationY": "51.150994",
        "id": "BE.NMBS.008894433",
        "name": "Belsele",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894433",
        "standardname": "Belsele"
    },
    {
        "locationX": "4.142966",
        "locationY": "51.171472",
        "id": "BE.NMBS.008894508",
        "name": "Sint-Niklaas",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894508",
        "standardname": "Sint-Niklaas"
    },
    {
        "locationX": "4.221352",
        "locationY": "51.126085",
        "id": "BE.NMBS.008894672",
        "name": "Temse",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894672",
        "standardname": "Temse"
    },
    {
        "locationX": "4.185907",
        "locationY": "51.185612",
        "id": "BE.NMBS.008894714",
        "name": "Nieuwkerken-Waas",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894714",
        "standardname": "Nieuwkerken-Waas"
    },
    {
        "locationX": "4.25952",
        "locationY": "51.208336",
        "id": "BE.NMBS.008894748",
        "name": "Beveren",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894748",
        "standardname": "Beveren"
    },
    {
        "locationX": "4.286766",
        "locationY": "51.21071",
        "id": "BE.NMBS.008894755",
        "name": "Melsele",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894755",
        "standardname": "Melsele"
    },
    {
        "locationX": "4.32978",
        "locationY": "51.214108",
        "id": "BE.NMBS.008894821",
        "name": "Zwijndrecht",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008894821",
        "standardname": "Zwijndrecht"
    },
    {
        "locationX": "4.039653",
        "locationY": "50.942813",
        "id": "BE.NMBS.008895000",
        "name": "Aalst",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895000",
        "standardname": "Aalst"
    },
    {
        "locationX": "3.984981",
        "locationY": "50.970895",
        "id": "BE.NMBS.008895067",
        "name": "Lede",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895067",
        "standardname": "Lede"
    },
    {
        "locationX": "4.055447",
        "locationY": "50.919621",
        "id": "BE.NMBS.008895091",
        "name": "Erembodegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895091",
        "standardname": "Erembodegem"
    },
    {
        "locationX": "4.024407",
        "locationY": "50.948377",
        "id": "BE.NMBS.008895125",
        "name": "Aalst-Kerrebroek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895125",
        "standardname": "Aalst-Kerrebroek"
    },
    {
        "locationX": "3.81441",
        "locationY": "50.869102",
        "id": "BE.NMBS.008895208",
        "name": "Zottegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895208",
        "standardname": "Zottegem"
    },
    {
        "locationX": "3.733238",
        "locationY": "50.875673",
        "id": "BE.NMBS.008895232",
        "name": "Munkzwalm",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895232",
        "standardname": "Munkzwalm"
    },
    {
        "locationX": "3.80587",
        "locationY": "50.90051",
        "id": "BE.NMBS.008895240",
        "name": "Balegem-Zuid",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895240",
        "standardname": "Balegem-Zuid"
    },
    {
        "locationX": "3.791425",
        "locationY": "50.919612",
        "id": "BE.NMBS.008895257",
        "name": "Balegem-Dorp",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895257",
        "standardname": "Balegem-Dorp"
    },
    {
        "locationX": "3.857469",
        "locationY": "50.891296",
        "id": "BE.NMBS.008895422",
        "name": "Hillegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895422",
        "standardname": "Hillegem"
    },
    {
        "locationX": "3.880616",
        "locationY": "50.89722",
        "id": "BE.NMBS.008895430",
        "name": "Herzele",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895430",
        "standardname": "Herzele"
    },
    {
        "locationX": "3.896653",
        "locationY": "50.901643",
        "id": "BE.NMBS.008895448",
        "name": "Terhagen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895448",
        "standardname": "Terhagen"
    },
    {
        "locationX": "3.922416",
        "locationY": "50.907198",
        "id": "BE.NMBS.008895455",
        "name": "Burst",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895455",
        "standardname": "Burst"
    },
    {
        "locationX": "3.935711",
        "locationY": "50.913769",
        "id": "BE.NMBS.008895463",
        "name": "Bambrugge",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895463",
        "standardname": "Bambrugge"
    },
    {
        "locationX": "3.962463",
        "locationY": "50.928601",
        "id": "BE.NMBS.008895471",
        "name": "Erpe-Mere",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895471",
        "standardname": "Erpe-Mere"
    },
    {
        "locationX": "3.98125",
        "locationY": "50.943254",
        "id": "BE.NMBS.008895489",
        "name": "Vijfhuizen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895489",
        "standardname": "Vijfhuizen"
    },
    {
        "locationX": "3.872328",
        "locationY": "50.771137",
        "id": "BE.NMBS.008895505",
        "name": "Geraardsbergen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895505",
        "standardname": "Geraardsbergen"
    },
    {
        "locationX": "3.826564",
        "locationY": "50.816236",
        "id": "BE.NMBS.008895570",
        "name": "Lierde",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895570",
        "standardname": "Lierde"
    },
    {
        "locationX": "3.917337",
        "locationY": "50.751981",
        "id": "BE.NMBS.008895612",
        "name": "Viane-Moerbeke",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895612",
        "standardname": "Viane-Moerbeke"
    },
    {
        "locationX": "3.965726",
        "locationY": "50.743918",
        "id": "BE.NMBS.008895620",
        "name": "Galmaarden",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895620",
        "standardname": "Galmaarden"
    },
    {
        "locationX": "3.992828",
        "locationY": "50.735522",
        "id": "BE.NMBS.008895638",
        "name": "Tollembeek",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895638",
        "standardname": "Tollembeek"
    },
    {
        "locationX": "4.014573",
        "locationY": "50.723701",
        "id": "BE.NMBS.008895646",
        "name": "Herne",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895646",
        "standardname": "Herne"
    },
    {
        "locationX": "3.899286",
        "locationY": "50.797844",
        "id": "BE.NMBS.008895711",
        "name": "Schendelbeke",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895711",
        "standardname": "Schendelbeke"
    },
    {
        "locationX": "3.921553",
        "locationY": "50.801871",
        "id": "BE.NMBS.008895729",
        "name": "Idegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895729",
        "standardname": "Idegem"
    },
    {
        "locationX": "3.957653",
        "locationY": "50.806986",
        "id": "BE.NMBS.008895737",
        "name": "Zandbergen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895737",
        "standardname": "Zandbergen"
    },
    {
        "locationX": "3.972108",
        "locationY": "50.813063",
        "id": "BE.NMBS.008895745",
        "name": "Appelterre",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895745",
        "standardname": "Appelterre"
    },
    {
        "locationX": "3.993745",
        "locationY": "50.823994",
        "id": "BE.NMBS.008895752",
        "name": "Eichem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895752",
        "standardname": "Eichem"
    },
    {
        "locationX": "4.026133",
        "locationY": "50.839509",
        "id": "BE.NMBS.008895760",
        "name": "Ninove",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895760",
        "standardname": "Ninove"
    },
    {
        "locationX": "4.054557",
        "locationY": "50.857712",
        "id": "BE.NMBS.008895778",
        "name": "Okegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895778",
        "standardname": "Okegem"
    },
    {
        "locationX": "4.071825",
        "locationY": "50.891925",
        "id": "BE.NMBS.008895802",
        "name": "Denderleeuw",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895802",
        "standardname": "Denderleeuw"
    },
    {
        "locationX": "4.095287",
        "locationY": "50.882531",
        "id": "BE.NMBS.008895836",
        "name": "Liedekerke",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895836",
        "standardname": "Liedekerke"
    },
    {
        "locationX": "4.06849",
        "locationY": "50.876886",
        "id": "BE.NMBS.008895844",
        "name": "Iddergem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895844",
        "standardname": "Iddergem"
    },
    {
        "locationX": "4.05062",
        "locationY": "50.903279",
        "id": "BE.NMBS.008895851",
        "name": "Welle",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895851",
        "standardname": "Welle"
    },
    {
        "locationX": "4.023958",
        "locationY": "50.906838",
        "id": "BE.NMBS.008895869",
        "name": "Haaltert",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895869",
        "standardname": "Haaltert"
    },
    {
        "locationX": "3.987524",
        "locationY": "50.911054",
        "id": "BE.NMBS.008895877",
        "name": "Ede",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008895877",
        "standardname": "Ede"
    },
    {
        "locationX": "3.264549",
        "locationY": "50.824506",
        "id": "BE.NMBS.008896008",
        "name": "Kortrijk",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896008",
        "standardname": "Kortrijk"
    },
    {
        "locationX": "3.314008",
        "locationY": "50.85586",
        "id": "BE.NMBS.008896115",
        "name": "Harelbeke",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896115",
        "standardname": "Harelbeke"
    },
    {
        "locationX": "3.42551",
        "locationY": "50.892456",
        "id": "BE.NMBS.008896149",
        "name": "Waregem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896149",
        "standardname": "Waregem"
    },
    {
        "locationX": "3.39163",
        "locationY": "50.833657",
        "id": "BE.NMBS.008896230",
        "name": "Vichte",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896230",
        "standardname": "Vichte"
    },
    {
        "locationX": "3.113791",
        "locationY": "50.799489",
        "id": "BE.NMBS.008896305",
        "name": "Menen",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896305",
        "standardname": "Menen"
    },
    {
        "locationX": "3.18352",
        "locationY": "50.811526",
        "id": "BE.NMBS.008896370",
        "name": "Wevelgem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896370",
        "standardname": "Wevelgem"
    },
    {
        "locationX": "3.224205",
        "locationY": "50.825845",
        "id": "BE.NMBS.008896388",
        "name": "Bissegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896388",
        "standardname": "Bissegem"
    },
    {
        "locationX": "3.046983",
        "locationY": "50.781861",
        "id": "BE.NMBS.008896396",
        "name": "Wervik",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896396",
        "standardname": "Wervik"
    },
    {
        "locationX": "2.999286",
        "locationY": "50.772072",
        "id": "BE.NMBS.008896412",
        "name": "Komen \/ Comines",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896412",
        "standardname": "Comines"
    },
    {
        "locationX": "2.876593",
        "locationY": "50.847402",
        "id": "BE.NMBS.008896503",
        "name": "Ieper",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896503",
        "standardname": "Ieper"
    },
    {
        "locationX": "2.736343",
        "locationY": "50.854449",
        "id": "BE.NMBS.008896735",
        "name": "Poperinge",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896735",
        "standardname": "Poperinge"
    },
    {
        "locationX": "3.130412",
        "locationY": "50.949025",
        "id": "BE.NMBS.008896800",
        "name": "Roeselare",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896800",
        "standardname": "Roeselare"
    },
    {
        "locationX": "3.212088",
        "locationY": "50.921149",
        "id": "BE.NMBS.008896909",
        "name": "Izegem",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896909",
        "standardname": "Izegem"
    },
    {
        "locationX": "3.255416",
        "locationY": "50.914326",
        "id": "BE.NMBS.008896925",
        "name": "Ingelmunster",
        "@id": "http:\/\/irail.be\/stations\/NMBS\/008896925",
        "standardname": "Ingelmunster"
    }
]

// handlers 
export const getStations = () => stations;


export const getTrips = () => trips;

export const addTrip = (trip: Array<Trip> ) =>{
    trips.push(trip);
}