import React from 'react';
import '../index.css';
import { Button, Layout } from 'antd';
import DB from '../db.json';
import { Card, Col, Row, Modal, Breadcrumb, Image, Typography } from 'antd';
import { imager } from './images';
import HTMLFlipBook from 'react-pageflip';
const { Header, Content, Footer } = Layout;


const { Meta } = Card;

const { Paragraph } = Typography;


class MainContent extends React.Component {
  state = {
    collapsed: true,
    selectedIndex: 0,
    isModalVisible: false,
    selectedPoem: {}
  };

  onSelectText = (poem) => {
    this.setState({
      isModalVisible: true,
      selectedPoem: poem
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
    window.scrollTo(0, window.innerHeight * 2);
  }

  openModal = () => {
    this.setState({ isModalVisible: false })
  }

  MyBook(props) {
    return (
      <HTMLFlipBook
      width={300} height={500}
      >

        {DB[this.state.selectedIndex]["poems"].map((poem, i) => {
          return (
            <Col xs={32} sm={12} md={12} lg={8} xl={6} style={{ marginTop: '20px', alignContent: "center" }}>
              <Card
                style={{ width: 300 }}
                title={poem["name"].split("\n").map(e => <p>{e}</p>)}
                key={i}
                cover={imager[poem.imageUrl] && <img
                  alt="example"
                  src={imager[poem.imageUrl]} />}
                actions={
                  [
                    <Button type="dashed" key={i} onClick={() => this.onSelectText(poem)} >Толық нұсқасын оқу</Button>
                  ]
                }
              >

                {poem["text"].split("\n").slice(0, 3).map(e => <p>{e}</p>)}


              </Card>
            </Col>
          );

        }
        )}
      </HTMLFlipBook>
    );
  }

  render() {
    let { selectedIndex, collapsed, isModalVisible, selectedPoem } = this.state;
    return (
      <Layout>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <h3>Өзге емес, өзімді айтам. </h3>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
            <Row gutter={[30, 30]}>
              <Col xs={24} sm={24} md={12} lg={12} ><Image top={50} width={300} src={imager.one}> </Image></Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                {DB[0]["poems"][0]["text"].split("\n").map(e =>
                  <Typography.Title level={5} style={{ margin: 0 }}>
                    {e}
                  </Typography.Title>)}
                <br />

                {(DB[0]["poems"][0]["footer"] || "").split("\n").map(e => <Paragraph disabled>{e}</Paragraph>)}

              </Col>
            </Row>


          </Content>
          {/* <Content>
            {this.MyBook()}
          </Content> */}
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <h3>Өлеңдер </h3>
          </Header>
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: '100vh',
              }}
            >
              {!collapsed && <Breadcrumb style={{ marginBottom: '20px' }}>
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
          </Layout>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Temirkhan Paluanbek ©2022 Created by Diana Temirkhan
          </Footer>
        </Layout>
        {this.renderModal(selectedPoem, isModalVisible)}

      </Layout>
    );
  }

  renderModal(selectedPoem, isModalVisible) {
    return <Modal title={selectedPoem["name"]}
      visible={isModalVisible}
      onOk={this.openModal}
      onCancel={this.openModal}
      closable={true}
      style={{ textAlign: "center" }}
      footer={[
        <Button onClick={this.openModal}>Шығу</Button>
      ]}
    >
      {(selectedPoem["citate"] || "").split("\n").map(e => <Paragraph italic style={{ textAlign: "right" }}>{e}</Paragraph>)}
      <Paragraph strong italic style={{ textAlign: "right" }}>{selectedPoem["citateAuthor"]}</Paragraph>
      {(selectedPoem["text"] || "").split("\n").map(e => <Paragraph>{e}</Paragraph>)}
      {(selectedPoem["footer"] || "").split("\n").map(e => <Paragraph disabled>{e}</Paragraph>)}
    </Modal>;
  }

  renderCategories() {
    return (<div className="site-card-wrapper">
      <Row gutter={{ md: 16, sm: 32, lg: 16 }} style={{ alignContent: "center" }}>

        {DB.map((category) => {
          return (
            <Col xs={32} sm={12} md={12} lg={8} xl={6} style={{ marginTop: '20px', alignContent: "center" }}>
              <Card
                style={{ width: 300 }}
                title={category["label"]}
                key={category["key"]}
                cover={
                  imager[category.imageUrl] && <img
                    alt="example"
                    src={imager[category.imageUrl]}
                  />
                }
                extra={<Button onClick={() => this.onClick(category)}>Қарау</Button>}
              >
                <Meta description={category["description"]} />

              </Card>
            </Col>
          );

        }
        )
        }
      </Row>
    </div>);
  }

  renderPoems(selectedIndex) {
    return <div className="site-card-wrapper">
      <Row gutter={{ md: 16, sm: 32, lg: 16 }}>
        {DB[selectedIndex]["poems"].map((poem, i) => {
          return (
            <Col xs={32} sm={12} md={12} lg={8} xl={6} style={{ marginTop: '20px', alignContent: "center" }}>
              <Card
                style={{ width: 300 }}
                title={poem["name"].split("\n").map(e => <p>{e}</p>)}
                key={i}
                cover={imager[poem.imageUrl] && <img
                  alt="example"
                  src={imager[poem.imageUrl]} />}
                actions={
                  [
                    <Button type="dashed" key={i} onClick={() => this.onSelectText(poem)} >Толық нұсқасын оқу</Button>
                  ]
                }
              >

                {poem["text"].split("\n").slice(0, 3).map(e => <p>{e}</p>)}


              </Card>
            </Col>
          );

        }
        )}


      </Row>
    </div>;
  }
}

const MainContentExport = () => <MainContent />;
export default MainContentExport;