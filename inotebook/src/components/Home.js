import Notes from './Notes' // imported Notes from the Notes.js

const Home = (props) => { // added props here
  const {showAlert} = props;
  return (
    <div>

      <Notes showAlert={showAlert} /> {/*  */}

    </div>
  )
}

export default Home
