import {Suspense} from "react";
import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
    useSearchParams
} from "react-router-dom";
import routes from "./routes";
import main from "../view/home/Main";


const Element = (props)=>{
    let {component: Component, meta} = props;
    let { title = "My-App" } = meta || {}
    document.title = title;

    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams()
    const [usp] = useSearchParams()
    return <Component navigate={navigate} location={location} params={params} usp={usp} {...props}/>
}

const CreateRoute = (rou) => {
    return <>
    {rou.map((item)=> {
        return <Route key={item.name} path={item.path} element={<Element {...item}/>}>
            {/*基于递归方式邦迪子路由*/}
            {Array.isArray(item.children) && item.children.length > 0 ? CreateRoute(item.children): null}
        </Route>
    })}
    </>
}

const RouterView = ()=>{
    return <Suspense fallback={<div>Loading...</div>}>
        <Navigate to={main}></Navigate>
        <Routes>
            <Route path="/" element={<Navigate to={"/main"} />} />
            {CreateRoute(routes)}
        </Routes>
    </Suspense>
}

export default RouterView