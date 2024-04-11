import Sidebar from "../../common/components/Sidebar";
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {

    const fetchData = async () => {
        try {
            const response = await axios.get (
                "http://127.0.0.1:8000/api/profile",
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            if (response.data.status === "success") {
                console.log(response.data)
            }

        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchData();
    },
    []);

    return (
        <div>
            <Sidebar />
            <div>
                <div>image</div>
                <div>
                    <p>username</p>
                    <p>bio</p>
                    <p>gender</p>
                    <button>Edit Profile</button>
                </div>

            </div>
        </div>
    )
}

export default Profile;