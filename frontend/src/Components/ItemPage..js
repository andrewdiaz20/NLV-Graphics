import NavBar from './Navigation'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function Item() {
    return (
        <body>
            <NavBar/>
            <div>
                <h1 className='title'>Contact Us</h1>
            </div>
            <main className='contactPage'>
                <Card style={{ width: '30rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
      test Test
        </Card.Text>

      </Card.ImgOverlay>
                    </Card.Body>
                </Card>
                <Card style={{ width: '50rem' }}>
                    <Card.Title>Information</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="firstName" placeholder="Enter First Name" />
                            {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastName" placeholder="Enter Last Name" />
                            {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            
                            <Form.Control as="textarea" rows={3}  placeholder="Tell us about what you need" />
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </main>
        </body>
    )
};

export default Item;