import React, {useEffect, useState} from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";


const FormComponent = ({children}) => {
    const [data, setData] = useState({})
    useEffect(() => {
        console.log(data)
    }, [data]);

    const handleChange = (target) => {
        setData(prevState => ({...prevState, [target.name]: target.value}))
    }

    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || "" //we are using ||"" construction because in the other way
            // we will get an error "uncontrolled form changed to controlled, because we didn't get "value" in the params of the component
        }
        return React.cloneElement(child, config)

    })
}
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider/>
            <FormComponent>
                <TextField name="email" label='email'/>
                <TextField name="password" label='password' type='password'/>
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
