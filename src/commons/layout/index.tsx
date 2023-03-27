import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutMenu from "./navigation";
import { Col, Row } from 'antd';

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {

  return (
    <Row style={{ width: "1500px", margin: "0 auto" }} >
      <Col span={24}>
        <LayoutHeader />
      </Col>
      <Col span={24}>
        <LayoutMenu />
      </Col>
      <Col span={24}>
        <div>
          {props.children}
        </div>
      </Col>
      <Col span={24}>
        <LayoutFooter />
      </Col>
    </Row>
  );
}
