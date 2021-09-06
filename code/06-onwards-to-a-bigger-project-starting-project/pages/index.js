import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg",
    address: "some address 5, 12345 some City",
    description: "This is a first meetup"
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "https://i.vimeocdn.com/video/1010341107_640x360.jpg",
    address: "some address 5, 12345 some City",
    description: "This is a second meetup"
  }
];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   //fetch data from an API or a database directly
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// };

export const getStaticProps = async () => {
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://orololuwa:3061998@cluster0.l8csx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        // title: meetup.title,
        // address: meetup.address,
        // image: meetup.image,
        ...meetup,
        _id: meetup._id.toString(),
        id: meetup._id.toString()
      }))
    }
  };
};

export default HomePage;
