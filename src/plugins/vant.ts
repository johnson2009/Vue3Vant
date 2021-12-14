import type { App } from "vue";
import {
    Button,NavBar,Loading,Overlay, Col, Row,Checkbox, CheckboxGroup,Icon,Cell,CellGroup,RadioGroup,Radio,Collapse,CollapseItem,List 
} from 'vant';
// import 'vant/lib/index.less';

export function setupVantComponent(app: App<Element>): void {
  //自定义组件
  //...
  //vant组件
    app.use(Button);
    app.use(NavBar);
    app.use(Loading);
    app.use(Overlay);
    app.use(Col);
    app.use(Row);
    app.use(Checkbox);
    app.use(CheckboxGroup);
    app.use(Icon);
    app.use(Cell);
    app.use(CellGroup);
    app.use(Radio);
    app.use(RadioGroup);
    app.use(Collapse);
    app.use(CollapseItem);
    app.use(List);
}