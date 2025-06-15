import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Carousel } from 'antd';
import MainContent from './MainContent';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedIndex: 0,
    };

    this.carousel = React.createRef();

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

  goToRight = () => {
    this.carousel.next();
  }

  goToLeft = () => {
    this.carousel.prev();
  }

  render() {


    return (
      <div>
        <div style={{ position: "relative" }}>
          {this.renderCarousel()}
          <div style={{ position: "absolute", top: "50%", transform: "translate(50%, -50%)" }} onClick={this.goToLeft}>
            <LeftOutlined style={{ color: "yellow", fontSize: "45px" }} size={200} />
          </div>
          <div style={{ position: "absolute", top: "50%", right: "0%", transform: "translate(-50%, -50%)" }} onClick={this.goToRight}>
            <RightOutlined style={{ color: "yellow", fontSize: "45px" }} size={200} />
          </div>
          <div style={{ position: "absolute", top: "90%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "center", alignItems: "center" }} onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}>
            <DownOutlined style={{ color: "white", fontSize: "45px", alignContent: "center" }} size={200} />
          </div>
        </div>
        <MainContent />
      </div>
    );


  }

  renderCarousel() {
    return <Carousel ref={node => (this.carousel = node)} afterChange={this.onChange}>
      <div className='main-image main-image-1'>
        <div className='main-div'>
          <h1 className='main-text-1'>Әкемнің өлеңдері</h1>
          <h1 className='main-text'>Бұл парақша – Темирханов Палуанбектің қаламынан шыққан жырларға арналған.</h1>
        </div>
      </div>
      <div className='main-image main-image-2'>
        <div className='main-div'>
        </div>
      </div>
      <div className='main-image main-image-3'>
        <div className='main-div'>
        </div>
      </div>
    </Carousel>;
  }
}

const MainPageExport = () => <MainPage />;
export default MainPageExport;