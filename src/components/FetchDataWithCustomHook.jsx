import { useFetch } from "../hooks/useFetch";
import { CgSpinnerAlt } from "react-icons/cg";

const FetchDataWithCustomHook = () => {
    const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/photos');
    
    return (
        <div>
            <h2>Fetch Data With Custom Hook</h2>
            {loading ? <span><CgSpinnerAlt className='my-spinner' /></span> : null}
            {error ? <p>{error.message}</p> : null}
            {data ? data.slice(0, 25).map((user, key) => (
                <div key={key}>
                    <img width={128} height={128} src={user.thumbnailUrl} alt={user.title} />
                    <p>{user.title}</p>
                </div>
            )) : null}
        </div>
    );
}

export default FetchDataWithCustomHook;


