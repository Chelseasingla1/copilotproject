import Card from './Card'
import './Card.css'
import stafflist from './stafflist'

import { faker } from "@faker-js/faker";
import { Button } from "semantic-ui-react";

function cardComponent(staff, i) {
    return <Card
    
        image={staff.image}
        name={faker.company.buzzPhrase()}
        position={faker.hacker.phrase()}
        rating={staff.rating}
        author={staff.author}
        jobArea={staff.jobArea}
    />
}


function Cardlist() {
    return (
        <div className='upper'>
            <div className='row'>
                
                {stafflist.slice(0, 3).map(cardComponent)}
            </div>
            <div className="head">
                <Button>See all articles </Button>
                <h1>Featured Tutorials</h1>
            </div>
            <div className='row'>
                {stafflist.slice(3, 6).map(cardComponent)}

            </div>
            <div className="head">
                <Button>See all articles </Button>
            </div>
        </div>




    )

}

  

export default Cardlist



