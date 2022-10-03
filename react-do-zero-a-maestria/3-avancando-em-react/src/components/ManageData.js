import React from 'react';

const ManageData = () => {
  let [someData, setSomeData] = React.useState(0);



  return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => setSomeData(someData++)}>Click me!</button>
    </div>
  )
}

export default ManageData