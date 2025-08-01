import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    return(
        <div>
            <h1> Oops!!! </h1>
            <h2> Something went wrong </h2>
            <h2> {err.status} : {err.statusText}</h2>
        </div>
    );
};

export default Error