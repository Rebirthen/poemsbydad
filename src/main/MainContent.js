import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Button, Layout } from 'antd';
import DB from '../db.json';
import { Card, Col, Row, Modal,Breadcrumb } from 'antd';
import family from '../assets/family.jpg';
const { Header, Content, Footer } = Layout;


class MainContent extends React.Component {
  state = {
    collapsed: true,
    selectedIndex: 0,
    isModalVisible: false,
    selectedPoem:{}
  };

  onSelectText = (poem) => {
    this.setState({
      isModalVisible: true,
      selectedPoem:poem
    })
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onClick = (item) => {
    console.log("clicked", item);
    this.setState({ selectedIndex: item.key, collapsed: !this.state.collapsed });
  }

  openModal = () => {
    this.setState({ isModalVisible: false })
  }

  render() {
    let { selectedIndex, collapsed, isModalVisible, selectedPoem } = this.state;
    return (
      <Layout>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <h3>Өлеңдер тақырыптары</h3>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 800,
            }}
          >
            {!collapsed &&<Breadcrumb style={{marginBottom:'20px'}}>
              <Breadcrumb.Item onClick={this.toggle}>Басты парақ</Breadcrumb.Item>
              <Breadcrumb.Item >
            {DB[selectedIndex]["label"]}
              </Breadcrumb.Item>
            </Breadcrumb>}
            {collapsed ? this.renderCategories()
              :

              this.renderPoems(selectedIndex)
            }
          </Content>
          <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Temirkhan Paluanbek ©2022 Created by Diana Temirkhan
      </Footer>
        </Layout>
        <Modal title={selectedPoem["name"]}
          visible={isModalVisible}
          onOk={this.openModal}
          onCancel={this.openModal}
          closable={true}
          footer={[
            <Button onClick={this.openModal}>Шығу</Button>
          ]

          }
        >
          {(selectedPoem["text"] || "").split("\n").map(e => <p>{e}</p>)}
        </Modal>

      </Layout>
    );
  }

  renderPoems(selectedIndex) {
    return <div className="site-card-wrapper">
      <Row gutter={{ md: 16, sm: 32, lg: 16 }}>
        {DB[selectedIndex]["poems"].map((poem, i) => {
          return (
            <Col xs={"32"} md={"8"} lg={"8"} style = {{alignContent : "center"}}>
              <Card
                style={{ width: 300 }}
                title={poem["name"]}
                key={i}
                cover={<img
                  alt="example"
                  src="https://vesti.kz/userdata/news/news_277532/crop_b/photo_141462.jpg" />}
              >

                {poem["text"].split("\n").slice(0, 3).map(e => <p>{e}</p>)}
                <Button key={i} onClick={() => this.onSelectText(poem)}>...</Button>

              </Card>
            </Col>
          );

        }
        )}


      </Row>
    </div>;
  }

  renderCategories() {
    return (<div className="site-card-wrapper">
      <Row gutter={16}>
        {DB.map((category) => {
          return (
            <Col xs={"32"} md={"8"} lg={"8"}>
              <Card
                style={{ width: 300 }}
                title={category["label"]}
                key={category["key"]}
                cover={
                  <img
                    alt="example"
                    src={family}
                  />
                }
                extra={<Button onClick={() => this.onClick(category)}>Қарау</Button>}
              >
                {category["label"]}

              </Card>
            </Col>
          );

        }
        )
        }
      </Row>
    </div>);
  }
}

export default () => <MainContent />;