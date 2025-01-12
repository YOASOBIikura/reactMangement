import {Button, Result} from "antd";
import "./PageOne.sass";
import {useNavigate} from "react-router-dom";


const PageTwo = ()=> {

    const navigate = useNavigate()

    const handleBack = ()=>{
        navigate("/main")
    }

    return <>
        <div className={"pageOne"}>
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={<Button type="primary" onClick={handleBack}>Back Home</Button>}
            />
        </div>
    </>
}

export default PageTwo