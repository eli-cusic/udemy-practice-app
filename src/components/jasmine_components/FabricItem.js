import FabricDate from './FabricDate';
import Card from './Card';
import './FabricItem.css';

function FabricItem(props) {

  return (
    <Card className='fabric-item'>
      {/* now we've got nested components FaricDate > FabricItem > Jasmine Component > App.js */}
      {/* forwarding data from App Component into FabricItem and FabricDate into FabricItem */}
      <FabricDate date={props.date} />
      <h2 className='fabric-item-color'> {props.color} </h2>
      <p className='fabric-item-amount'> {props.amount} </p>
    </Card>
  );
}

export default FabricItem;
