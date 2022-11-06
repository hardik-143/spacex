import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import {GET_SPACE_MISSION} from "./queries";


export const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri:"https://api.spacex.land/graphql",
    }),
    cache: new InMemoryCache(),
    
});


class SpaceService {
    async getSpaceMission(limit = 10){
        try{
            const response = await apolloClient.query({
                query: GET_SPACE_MISSION,
                variables:{limit}
            });
            console.log('hello')
            console.log(response)
            // if(!response || response.data) throw new Error("Cannot retrieve data")
            return response.data.launchesPast
        }catch(err){
            throw err
        }
    }
}

export default new SpaceService();
