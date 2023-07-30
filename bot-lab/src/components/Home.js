import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <Link to={'/bots'}>Select Your Bots</Link>
        </div>
    )
}

export default Home