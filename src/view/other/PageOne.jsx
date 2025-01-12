import {Button, Result} from "antd";
import "./PageOne.sass";
import {useNavigate} from "react-router-dom";

const PageOne = ()=> {

    const navigate = useNavigate()

    const handleBack = ()=>{
        navigate("/main")
    }

    return <>
        <div className={"pageOne"}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={handleBack}>Back Home</Button>}
            />
        </div>
    </>
}

export default PageOne