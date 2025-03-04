import {Container, Row, Col} from "react-bootstrap"
import { semuaKelas } from "../data/index"
const KelasPage = () => {
  return (
    <div className="kelas min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center">Semua Kelas</h1>
            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default KelasPage