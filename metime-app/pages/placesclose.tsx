import { GetStaticProps, NextPage } from 'next'
import { getPlaces } from './api/places'

type PlacesNear = {
  _id: ObjectId;
  name: string;
  formatted_address: string;
  types: string[];
}

type Props = {
  places: PlacesNear[];
}

const PlacesCloseby: NextPage<Props> = ({ places }) => {

// style components   
const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '1rem',
        fontFamily: 'sans-serif'
      },
      title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      },
      list: {
        listStyle: 'none',
        padding: 0,
        margin: 0
      },
      listItem: {
        marginBottom: '1rem'
      },
      name: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      },
      address: {
        color: '#666',
        marginBottom: '0.5rem'
      },
      types: {
        color: '#888'
      }
    }
    
  return (
    <div style={styles.container}>
    <h1 style={styles.title}>Places Close to You</h1>
    <ul style={styles.list}>
      {places.map((place) => (
        <li className={styles.item} key={place._id}>
          <h2 style={styles.name}>{place.name}</h2>
          <p style={styles.address}>{place.formatted_address}</p>
          <p style={styles.types}>{place.types.join(', ')}</p>
        </li>
      ))}
    </ul>
  </div>
)
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const places = await getPlaces()
  return { props: { places }, revalidate: 60 }
}

export default PlacesCloseby

