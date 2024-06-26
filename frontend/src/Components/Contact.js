import NavBar from './Navigation'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Contact() {
    return (
        <body>
            {/* <NavBar/> */}
            <main>
                <Card style={{ width: '18rem' }}>

                </Card>
                <Card>
                    <Card.Title>Information</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNum">
                            <Form.Label>PhoneNumber</Form.Label>
                            <Form.Control type="phoneNumber" placeholder="Phone Number" />
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

export default Contact;