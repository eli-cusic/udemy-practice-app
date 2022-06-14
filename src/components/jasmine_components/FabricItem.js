import FabricDate from './FabricDate';
import Card from './Card';
import './FabricItem.css';

function FabricItem(props) {

  return (
    <Card className='fabric-item'>
      <FabricDate date={props.date} />
      <h2 className='fabric-item-color'> {props.color} </h2>
      <p className='fabric-item-amount'> {props.amount} </p>
    </Card>
  );
}

export default FabricItem;
