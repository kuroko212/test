import React, { ReactElement } from 'react';
import { Switch,Route,Redirect } from "react-router-dom";

export default function RouterView(props){

    let route = props.routes.filter(item=>item.component);
    let redirect = props.routes.filter(item=>item.redirect);

    return (
        <Switch>
            {
                route.map((item,index)=>{
                    return (
                        <Route key={index} path={item.path} render={(Info)=>{
                            if(item.children){
                                return <item.component {...Info} routes={item.children}/>
                            }
                            return <item.component {...Info}/>
                        }} />
                    )
                })
            }
            {
                redirect.map((item,index)=>{
                    return (<Redirect key={index} from={item.path} to={item.redirect}/>)
                })
            }
        </Switch>
    )
}
