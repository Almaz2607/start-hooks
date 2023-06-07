import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentList = ({ children }) => {
    let count = 1;

    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            value: count++
        };
        return React.cloneElement(child, config);
    });
};

ComponentList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentList>
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>{value}. Компонент списка</div>;
};

Component.propTypes = {
    value: PropTypes.number
};

export default ChildrenExercise;
