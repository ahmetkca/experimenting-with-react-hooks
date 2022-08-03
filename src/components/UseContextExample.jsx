import { useContext } from "react";

import { TreesContext, useTrees } from "../index";

const UseContextExample = () => {
    // const { trees } = useContext(TreesContext);

    const { trees } = useTrees();

    return (
        <div>
            <p>Trees: </p>
            <ul>
            {trees.map((tree, key) => (
                <li key={key + tree.id} >
                    <h3>{tree.name}</h3>
                    <p>{tree.color}</p>
                    <p>{tree.age}</p>
                </li>
            ))}
            </ul>
        </div>
        );
}

export default UseContextExample;

