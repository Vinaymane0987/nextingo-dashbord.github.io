export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "vname",
    headerName: "Name",
    width: 300,
    renderCell: (params) => {
      return (
        <div
          className="cellWithImg"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3>{params.row.vname}</h3>
        </div>
      );
    },
  },
  {
    field: "vmodel",
    headerName: "Model",
    width: 80,
  },
  {
    field: "vmake",
    headerName: "Make",
    width: 80,
  },
  {
    field: "vtype",
    headerName: "Type",
    width: 60,
  },
  {
    field: "current_meter",
    headerName: "Current meter",
    width: 100,
  },

  {
    field: "voperator",
    headerName: "Operator",
    width: 100,
  },
  {
    field: "vin",
    headerName: "VIN",
    width: 150,
  },
  {
    field: "vstatus",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.vstatus}`}>
          {params.row.vstatus}
        </div>
      );
    },
  },
  {
    field: "vgroup",
    headerName: "Group",
    width: 100,
  },

  {
    field: "licenseplate",
    headerName: "License Plate",
    width: 100,
  },
  {
    field: "vwatchers",
    headerName: "Watchers",
    width: 100,
  },
  {
    field: "vyear",
    headerName: "Year",
    width: 80,
  },
];

//temporary data
export const userRows = [
  // renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },

  {
    id: 1,
    name: "Toyota Pruis",
    status: "active",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 2,
    name: "Toyota Pruis",
    status: "in-Active",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 3,
    name: "Toyota Pruis",
    status: "out-Of-Service",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 3,
    name: "Toyota Pruis",
    status: "in-Shop",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 4,
    name: "Toyota Pruis",
    status: "active",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 5,
    name: "Toyota Pruis",
    status: "in-Shop",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 6,
    name: "Toyota Pruis",
    status: "out-Of-Service",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 7,
    name: "Toyota Pruis",
    status: "active",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 8,
    name: "Toyota Pruis",
    status: "active",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 9,
    name: "Toyota Pruis",
    status: "in-Shop",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
  {
    id: 10,
    name: "Toyota Pruis",
    status: "in-Active",
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JTD5164514561",
    type: "car",
    group: "Management",
    currentmeter: "202525 mi",
    licenceplate: "6TJR244",
    watchers: null,
    operator: "Jacob Silva",
  },
];
