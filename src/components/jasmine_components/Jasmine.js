import FabricItem from './FabricItem';
import BlueFabric from './BlueFabric';
import Card from './Card';
import './Card.css';
import './Fabrics.css';

function JasFabrics() {
  const fabrics = [
    {
      color: 'red',
      amount: '1/2 yard',
      date: new Date (2022, 6, 12)
    },
    {
      color: 'orange',
      amount: '1/4 yard',
      date: new Date (2022, 6, 13)
    },
    {
      color: 'green',
      amount: '1/4 yard',
      date: new Date (2022, 6, 13)
    },
    {
      color: 'blue',
      amount: '1 yard',
      date: new Date (2022, 6, 14)
    }
  ];

  return (
    <Card className='fabrics'>
        <h2 className='fabric-stash-title'>Jasmine's Fabric Stash</h2>
        <FabricItem
          color={fabrics[0].color}
          amount={fabrics[0].amount}
          date={fabrics[0].date}
        />
        <FabricItem
          color={fabrics[1].color}
          amount={fabrics[1].amount}
          date={fabrics[1].date}
        />
         <FabricItem
          color={fabrics[2].color}
          amount={fabrics[2].amount}
          date={fabrics[2].date}
        />
         <FabricItem
          color={fabrics[3].color}
          amount={fabrics[3].amount}
          date={fabrics[3].date}
        />
        {/* reusable more than once but displays the same data */}
        {/* <FabricItem /> */}
        <BlueFabric />
    </Card>
  );
}

export default JasFabrics;
