import { IRouteComponentProps } from 'umi'
import Header from "@/components/Header";
import EatParameters from "@/components/EatParameters";
import {Tabs} from "antd-mobile";
import {history} from "@@/core/history";
import {useEffect} from "react";

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  const navi = (key: string) => {
    history.push(`/${key}`)
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <Header/>
      <div style={{flex: 1}}>{children}</div>
      <Tabs onChange={key => navi(key)}>
        <Tabs.Tab title='菜谱' key='cookbook'/>
        <Tabs.Tab title='记录' key='record'/>
        <Tabs.Tab title='我的' key='mine'/>
      </Tabs>
    </div>
  );
}
