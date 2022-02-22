import { IRouteComponentProps } from 'umi'
import Header from "@/components/Header";
import {Tabs} from "antd-mobile";

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  const navi = (key: string) => {
    history.push(`/${key}`)
  };
  return (
    <>
      <Header/>
      <div style={{background: "#8080800f", height: 'calc( 100% - 125px )', overflow: 'auto'}}>{children}</div>
      <Tabs defaultActiveKey={location.pathname.slice(1)} onChange={key => navi(key)} style={{height: '45px'}}>
        <Tabs.Tab title='推荐' key='recommend'/>
        <Tabs.Tab title='美食' key='all'/>
        <Tabs.Tab title='记录' key='record'/>
      </Tabs>
    </>
  );
}
