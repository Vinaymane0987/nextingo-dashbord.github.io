export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg" style={{display :'flex' , flexDirection :'column'}}>
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          <h3>{params.row.title}</h3>
          <p>{params.row.sub}</p>
        </div>
      );
    },
  },
  {
    field: "jobstatus",
    headerName: "Job Status",
    width: 200,
  },

  {
    field: "assigned",
    headerName: "Assigned",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    title: "building inspection",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    sub: 'created at 23 aug',
    jobstatus: "yes",
    assigned: 35,
  },
  {
    id: 2,
    title: "vehicle for service",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    jobstatus: "no",
    status: "passive",
    sub: 'created at 23 aug',
    assigned: 42,
  },
  {
    id: 3,
    title: "Repair door building",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    jobstatus: "yess",
    status: "pending",
    sub: 'created at 23 aug',
    assigned: 45,
  },
  {
    id: 4,
    title: "cleaning",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    jobstatus: "no",
    status: "active",
    sub: 'created at 23 aug',
    assigned: 16,
  },
  {
    id: 5,
    title: "Tracking",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    jobstatus: "no",
    status: "passive",
    sub: 'created at 23 aug',
    assigned: 22,
  },
  {
    id: 6,
    title: "Repair door building",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    jobstatus: "yess",
    status: "active",
    sub: 'created at 23 aug',
    assigned: 15,
  },
  {
    id: 7,
    title: "service and cleaning",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    jobstatus: "yess",
    status: "passive",
    sub: 'created at 23 aug',
    assigned: 44,
  },
  {
    id: 8,
    title: "Repair door building",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    jobstatus: "yess",
    status: "active",
    sub: 'created at 23 aug',
    assigned: 36,
  },
  {
    id: 9,
    title: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    jobstatus: "no",
    status: "pending",
    sub: 'created at 23 aug',
    assigned: 65,
  },
  {
    id: 10,
    title: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    jobstatus: "yess",
    status: "active",
    sub: 'created at 23 aug',
    assigned: 65,
  },
];
