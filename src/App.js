import './App.css';
import Header from './components/header'
import Item from './components/item'
import Accessories from './teslaPng/Desktop-Accessories.jpg'
import Model3 from './teslaPng/Desktop-Model3.jpeg'
import ModelS from './teslaPng/Desktop-ModelS.jpeg'
import ModelX from './teslaPng/Desktop-ModelX.jpeg'
import ModelY from './teslaPng/Desktop-ModelY.jpeg'
import SolarPanels from './teslaPng/Desktop-SolarPanels.jpeg'
import SolarRoof from './teslaPng/Desktop-SolarRoof.jpeg'

let underline=<p>Order Online for<u>Touchless Delivery</u></p>;

function App() {
  return (
    <div className="App">
    <Header />


     <div className='itemsContainer'>

<Item 
title='Model S'
backgroundImg={ModelS}
desc={underline}
descLink='https://www.tesla.com/support/delivery-options'
leftBtnTxt='CUSTOM ORDER'
leftBtnLink='https://www.tesla.com/models/design'
rightBtnTxt='EXISTING INVENTORY'
rightBtnLink='https://www.tesla.com/inventory/new/ms'
twobtns='true'
first

/>

<Item 
title='Model Y'
desc={underline}
descLink='https://www.tesla.com/support/delivery-options'
backgroundImg={ModelY}
leftBtnTxt='CUSTOM ORDER'
leftBtnLink='https://www.tesla.com/modely/design'
rightBtnTxt='LEARN MORE'
rightBtnLink='https://www.tesla.com/modely'
twobtns='true'

/>

<Item 
title='Model 3'
desc={underline}
descLink='https://www.tesla.com/support/delivery-options'
backgroundImg={Model3}
leftBtnTxt='CUSTOM ORDER'
leftBtnLink='https://www.tesla.com/model3/design'
rightBtnTxt='EXISTING INVENTORY'
rightBtnLink='https://www.tesla.com/inventory/new/m3'
twobtns='true'

/>

<Item 
title='Model X'
desc={underline}
descLink='https://www.tesla.com/support/delivery-options'
backgroundImg={ModelX}
leftBtnTxt='CUSTOM ORDER'
leftBtnLink='https://www.tesla.com/modelx/design'
rightBtnTxt='EXISTING INVENTORY'
rightBtnLink='https://www.tesla.com/inventory/new/mx'
twobtns='true'

/>

<Item 
title='Lowest Cost Solar Panels in America'
backgroundImg={SolarPanels}
desc='Money-back guarantee'
descLink=''
leftBtnTxt='ORDER NOW'
leftBtnLink='https://www.tesla.com/energy/design'
rightBtnTxt='LEARN MORE'
rightBtnLink='https://www.tesla.com/solarpanels'
twobtns='true'

/>

<Item 
title='Solar Roof'
backgroundImg={SolarRoof}
desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
descLink=''
leftBtnTxt='ORDER NOW'
leftBtnLink='https://www.tesla.com/solarroof/design'
rightBtnTxt='LEARN MORE'
rightBtnLink='https://www.tesla.com/solarroof'
twobtns='true'

/>

<Item 
title='Accessories'
backgroundImg={Accessories}
desc=''
descLink=''
leftBtnTxt='Shop Now'
leftBtnLink=''
rightBtnTxt=''
rightBtnLink=''
twobtns='false'

/>
     </div>
    </div>
  );
}

export default App;
