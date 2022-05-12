import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Carousel, Button } from 'antd';
import MainContent from './MainContent';
import { DownOutlined } from '@ant-design/icons';

import { Typography } from 'antd';

const { Title } = Typography;



class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
      selectedIndex: 0,
    };
    
  }
 

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onClick = (item) => {
    console.log("clicked", item);
    this.setState({ selectedIndex: item.key });
  }

  onChange(a, b, c) {
    console.log(a, b, c);
  }
  


  render() {
    
   return (
     <div>
      <Carousel afterChange={this.onChange}> 
        <div className='main-image-1'>
          <h1 className='main-text-1'>Салем!</h1> 
          <h1 className='main-text'>Темирханов Палуанбектің өлең щумақтары</h1>
          <DownOutlined />
          <Button shape="round" size="large">
       Өлеңдерге бару
     </Button>
        </div>
        <div className='main-image-2'>
          <h1 className='main-text'>Темирханов Палуанбектің өлең щумақтары</h1>
        </div>
        <div className='main-image-3'>
          <h1 className='main-text'>Темирханов Палуанбектің өлең щумақтары</h1>
          
        </div>
       

        
      </Carousel>
      <MainContent/>
     </div>
    );
    
  
  }
}

export default () => <MainPage />;