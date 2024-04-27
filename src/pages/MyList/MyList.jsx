import useAuth from "../../hooks/useAuth";

const MyList = () => {

    const {userData} = useAuth();
    const {email} = userData;

    return (
        <div>
            <h1>My List page</h1>
        </div>
    );
};

export default MyList;