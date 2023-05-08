import { Col, Row } from 'antd';
import Table from './Table';


const App = () => {
  return (
    <div className='App'>

      <Row>
        
      </Row>
      
      <Row> 
        <Col xs={{ span: 18, offset: 3 }}>
          <Table />
        </Col>       
      </Row>

    </div>
  )
}

export default App