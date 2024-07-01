
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardHeader } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Gauge } from "@mui/x-charts/Gauge";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [totalTickets, setTotalTickets] = useState(0);
  const [totalLiveChat, setTotalLiveChat] = useState(0);
  const [ticketsBySupportStaff, setTicketsBySupportStaff] = useState([]);

  useEffect(() => {
    const fromDate = "2024-04-01";
    const toDate = "2024-04-10";
    const username = "bwreporting";
    const password = "xJy8IE549LvKheo94FgNDnWQ384EA3wRGapTUIuObsvRVC";

    const auth = {
      username: username,
      password: password,
    };

    axios
      .get(`https://api.buzinessware.com/bwreporting/support/summary/ticket`, {
        params: {
          from_date: fromDate,
          to_date: toDate,
        },
        auth: auth,
      })
      .then((response) => {
        if (response.data && response.data.result) {
          setTotalTickets(response.data.result.length);
        } else {
          console.log("No data received for Total Tickets");
        }
      })
      .catch((error) => {
        console.error("Error fetching Total Tickets data:", error);
      });

    axios
      .get(`https://api.buzinessware.com/bwreporting/support/summary/chat`, {
        params: {
          from_date: fromDate,
          to_date: toDate,
        },
        auth: auth,
      })
      .then((response) => {
        if (response.data && response.data.result) {
          setTotalLiveChat(response.data.result.length);
        } else {
          console.log("No data received for Total Live Chat");
        }
      })
      .catch((error) => {
        console.error("Error fetching Total Live Chat data:", error);
      });

 
    axios
    .get(
      `https://api.buzinessware.com/bwreporting/support/ticketsbydepartment`,
      {
        params: {
          from_date: fromDate,
          to_date: toDate,
          qtype: "staff",
        },
        auth: auth,
      }
    )
    .then((response) => {
      if (response.data && response.data.result) {
        console.log("Tickets by Support Staff data:", response.data.result);
        setTicketsBySupportStaff(response.data.result);
      } else {
        console.log("No data received for Tickets by Support Staff");
      }
    })
    .catch((error) => {
      console.error("Error fetching Tickets by Support Staff data:", error);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        margin: 0,
      }}
    >
      <Card >
        <CardHeader title="Total Tickets" />
        <Box sx={{ width: 200, height: 100 }}>
          <Gauge
            value={totalTickets}
            startAngle={-100}
            endAngle={100}
            sx={{
              fontSize: 20,
              transform: "translate(10px, 10px, 0px)",
            }}
          />
        </Box>
      </Card>

      <Card>
        <CardHeader title="Total Live Chat" />
        <Box sx={{ width: 200, height: 100 }}>
          <Gauge
            value={totalLiveChat}
            startAngle={-100}
            endAngle={100}
            sx={{
              fontSize: 20,
              transform: "translate(10px, 10px, 0px)",
            }}
          />
        </Box>
      </Card>
    

      <Card>
        <CardHeader title="Tickets by Support Staff" />
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {ticketsBySupportStaff.map((item, index) => (
            <Card key={index} sx={{ width: 200, height: 120, margin: 1 }}>
              <CardHeader title={item.value} />
              <Box sx={{ width: "100%", height: 80 }}>
                <Gauge
                  value={item.count || 0}
                  startAngle={-100}
                  endAngle={100}
                  sx={{
                    fontSize: 16,
                    transform: "translate(10px, 10px, 0px)",
                  }}
                />
              </Box>
            </Card> 
            
          ))}
        </Box>
      </Card>
     
    </Box>
  );
};

export default PieChart;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Box, Card, CardHeader } from "@mui/material";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Gauge } from "@mui/x-charts/Gauge";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Dashboard = () => {
//   const [totalTickets, setTotalTickets] = useState(0);
//   const [totalLiveChat, setTotalLiveChat] = useState(0);
//   const [ticketsBySupportStaff, setTicketsBySupportStaff] = useState([]);

//   useEffect(() => {
//     const fromDate = "2024-04-01";
//     const toDate = "2024-04-10";
//     const username = "bwreporting";
//     const password = "xJy8IE549LvKheo94FgNDnWQ384EA3wRGapTUIuObsvRVC";

//     const auth = {
//       username: username,
//       password: password,
//     };

//     axios
//       .get(`https://api.buzinessware.com/bwreporting/support/summary/ticket`, {
//         params: {
//           from_date: fromDate,
//           to_date: toDate,
//         },
//         auth: auth,
//       })
//       .then((response) => {
//         if (response.data && response.data.result) {
//           const totalTicketsCount = response.data.result.reduce((acc, item) => acc + item.count, 0);
//           setTotalTickets(totalTicketsCount);
//         } else {
//           console.log("No data received for Total Tickets");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching Total Tickets data:", error);
//       });

//     axios
//       .get(`https://api.buzinessware.com/bwreporting/support/summary/chat`, {
//         params: {
//           from_date: fromDate,
//           to_date: toDate,
//         },
//         auth: auth,
//       })
//       .then((response) => {
//         if (response.data && response.data.result) {
//           const totalLiveChatCount = response.data.result.reduce((acc, item) => acc + item.count, 0);
//           setTotalLiveChat(totalLiveChatCount);
//         } else {
//           console.log("No data received for Total Live Chat");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching Total Live Chat data:", error);
//       });

//     axios
//       .get(`https://api.buzinessware.com/bwreporting/support/ticketsbydepartment`, {
//         params: {
//           from_date: fromDate,
//           to_date: toDate,
//           qtype: "staff",
//         },
//         auth: auth,
//       })
//       .then((response) => {
//         if (response.data && response.data.result) {
//           setTicketsBySupportStaff(response.data.result);
//         } else {
//           console.log("No data received for Tickets by Support Staff");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching Tickets by Support Staff data:", error);
//       });
//   }, []);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         flexWrap: "wrap",
//         gap: 2,
//         margin: 0,
//       }}
//     >
//       <Card>
//         <CardHeader title="Total Tickets" />
//         <Box sx={{ width: 200, height: 100 }}>
//           <Gauge
//             value={totalTickets}
//             startAngle={-100}
//             endAngle={100}
//             sx={{
//               fontSize: 20,
//               transform: "translate(10px, 10px, 0px)",
//             }}
//           />
//         </Box>
//       </Card>

//       <Card>
//         <CardHeader title="Total Live Chat" />
//         <Box sx={{ width: 200, height: 100 }}>
//           <Gauge
//             value={totalLiveChat}
//             startAngle={-100}
//             endAngle={100}
//             sx={{
//               fontSize: 20,
//               transform: "translate(10px, 10px, 0px)",
//             }}
//           />
//         </Box>
//       </Card>

//       <Card>
//         <CardHeader title="Tickets by Support Staff" />
//         <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
//           {ticketsBySupportStaff.map((item, index) => (
//             <Card key={index} sx={{ width: 200, height: 120, margin: 1 }}>
//               <CardHeader title={item.value} />
//               <Box sx={{ width: "100%", height: 80 }}>
//                 <Gauge
//                   value={item.count || 0}
//                   startAngle={-100}
//                   endAngle={100}
//                   sx={{
//                     fontSize: 16,
//                     transform: "translate(10px, 10px, 0px)",
//                   }}
//                 />
//               </Box>
//             </Card>
//           ))}
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default Dashboard;
