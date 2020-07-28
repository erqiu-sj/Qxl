import React from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../../assets/Css/Index/App.css";
import { Link, Route, Redirect } from "react-router-dom";
import Insert from "../Insert/Insert";
import Visualization from "../Visualization/Visualization";
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: true,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <Link to="/Visualization">可视化</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              <Link to="/Insert">添加收入</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
                marginTop: 12,
                borderRadius: 10,
              }}
            >
              <Route path="/Insert" exact component={Insert} />
              <Route path="/Visualization" exact component={Visualization} />
              <Redirect to="/Insert" />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>©2020 邱选林</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;
