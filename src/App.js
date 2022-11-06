import React, {useState, useEffect} from 'react'
import SpaceMission from "./graphql";
import {
  MDBCard,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCardBody,
  MDBCardTitle,
  MDBCardLink,
} from "mdb-react-ui-kit";

function App() {
  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    setData(spaceMissions);
  }

  useEffect(()=> {
    loadSpaceMission();
  },[])
  console.log("data", data);

  return (
      <MDBContainer style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "720px",
        alignContent: "center",
      }}>
        <MDBRow>
          <h1>Past Missions' Details</h1>
            {data.map((item,index)=>(
            <>
              <MDBCard key={index}
                style={{maxWidth:"22rem", maxHeight:"24rem"}}>
              {/* <MDBCardImage src={item && item.ships[0] && item.ships[0].image ? item.ships[0].image :  }/> */}
              {/* position="top"
              alt={item.mission_name} */}
              <MDBCardBody>
                <MDBCardTitle>{item.mission_name}</MDBCardTitle>
                <MDBCardText>{item.launch_site.site_name_long}</MDBCardText>
                <MDBCardText>{item.rocket.rocket_name}</MDBCardText>
                <MDBCardText>{item.rocket.rocket.description}</MDBCardText>
                <MDBCardText>{item.rocket.rocket.success_rate_pct}</MDBCardText>
                <MDBCardLink>{item.rocket.rocket.wikipedia}</MDBCardLink>
              </MDBCardBody>
              </MDBCard>
            </>
          ))}
        </MDBRow>
      </MDBContainer>
  )
}

export default App;
