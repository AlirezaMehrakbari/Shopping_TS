import {Col, Row} from "react-bootstrap";
import {StoreItems} from "../data/Items.tsx";
import StoreItem from "../components/StoreItem.tsx";


const Store = () => {
  return (
      <Row className='mb-4'>
          {StoreItems.map((item)=>{
              return(
                 <Col className='g-3' md={4} lg={3}>
                     <StoreItem key={item.id} {...item} />
                 </Col>
              )
          })}
      </Row>
  )
}

export default Store
