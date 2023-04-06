import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutMenu from "./navigation";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LayoutHeader />
      <hr />
      {/* <LayoutMenu /> */}
      <div style={{flex: "1", padding: "2rem"}}>
        <div>{props.children}</div>
      </div>
      <LayoutFooter />
    </div>
  );
}
