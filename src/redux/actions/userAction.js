import axios from "../../Api/axios";
// import { useNavigate } from "react-router-dom";

export const userRegister = (data) => async (dispatch) => {

    const res = await axios.post(`http://localhost:3008/test`, { data })

    if (res && res.status === 201) {
        alert("User Registered Successfully")
        dispatch(
            {
                type: "REGISTER_PAGE",
                playload: data
            }
        )
    }
    else {


    }
}


export const loginUser = (user_login) => async (dispatch) => {
    const { emailid, pwd } = user_login;
    // const navigate = useNavigate();
    axios.get(`http://localhost:3008/test?items.email=${emailid}&&items.password=${pwd}`)
        .then(res => {

            if (res && res.status === 200 && res.data.length) {
                alert("User Sign-In Successfully");
                dispatch(
                    {
                        type: "LOGIN_PAGE",
                        data: res.data
                    }
                )
            }
            else {
                alert("Invalid User Details")
            }
        })

}
