// gql allows us to write queries
import gql from 'graphql-tag';

// import { apolloClient } from ".";
// import {gql, useQuery} from 'apollo/Client';

export const GET_SPACE_MISSION = gql`
query GetSpaceMission($limit:Int!){
    launchesPast(limit: $limit){
        mission_name
        launch_site{
            site_name_long
        }
        launch_date_local
        rocket{
            rocket_name
            rocket {
                description
                success_rate_pct
                wikipedia
            }
        }
        ships{
            image
        }   
    }
}
`





// launchesPastResult(limit: $limit) {
//     data {
//       mission_name
//       rocket {
//         rocket_name
//       }
//       launch_date_utc
//       launch_success
//     }
//   }
//   launchesPast {
//     links {
//       video_link
//       article_link
//     }
//     launch_site {
//       site_name_long
//     }
//   }
// }