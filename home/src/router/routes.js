import Home from '../views/home/Home'
import Main from '../views/home/Main'
import AA from '../views/home/AA'
import BB from '../views/home/BB'
import CC from '../views/home/CC'

let routes = [
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/main",
                component:Main
            },{
                path:"/home/aa",
                component:AA
            },{
                path:"/home/bb",
                component:BB
            },{
                path:"/home/cc",
                component:CC
            },{
                path:"/home",
                redirect:"/home/first"
            }
        ]
    },
    {
        path:'/',
        redirect:'/home'
    }
]
export default routes