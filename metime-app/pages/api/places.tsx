import type { NextApiRequest, NextApiResponse} from 'next'
import clientPromise from './auth/lib/mongodb'
import { PlacesNear} from '@/pages/placesclose'


type Return = {
    places: PlacesNear[]
};

export const getPlaces = async () =>{
    const mongoClient = await clientPromise;
    const data = await mongoClient
        .db('UserData')
        .collection('PlacesNearby')
        .find({})
        .limit(5)
        .map((user: { _id: { toString: () => any; }; }) =>({...user, _id: user._id.toString()}))
        .toArray();
    return JSON.parse(JSON.stringify(data));
}

export default async (req: NextApiRequest, res:NextApiResponse<Return>) => {
    const data = await getPlaces();
    res.status(200).json({places : data});
};
