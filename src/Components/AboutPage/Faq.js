
import { Accordion, Container,  } from "react-bootstrap";
import { Link } from "react-router-dom";

function Faq () {

      return (

    <div>
        <Container>
        <span className="faq-container-one" >
          
            <h4 className="empower">Empowering Young Adults with Osteoarthritis</h4> 
           

            <div className="paragraph-faq p-4">
            We understand the unique challenges that come with managing osteoarthritis as a young adult. 
             Traditional resources often don't feel designed for your needs and lifestyle. 
              That's why we created Jointly+ – a solution built specifically with you in mind.
            </div>

        </span>
        <span className="faq-container-two">
            <h4 className="heading-two p-4">
            Jointly+ is the result of extensive research into the gaps faced by young adults with OA. <h4 className="offer">We offer:</h4>
            </h4>

            <section className="targeted p-4" >
                Targeted Exercises: A curated library of exercises tailored to your age, fitness level, and specific pain areas.
               <br/>
               <br/>
                Expert Physio Support: Get answers, personalized advice, and motivation through our live physiotherapist chat.
            </section>

            <span className="policy-text">
              Find out more about out privacy policies <Link to = '/Policy'> here </Link>
            </span>
        
        </span>
        </Container>
        
        <Accordion className=" accordion mt-3 " flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>FAQ 1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>FAQ 2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>FAQ 3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        </div>
      );
}

export default Faq