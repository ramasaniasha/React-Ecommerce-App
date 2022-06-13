import { useState } from 'react';
import Header from '../Navbar';
import { useSelector } from 'react-redux';
import axios from '../Api/axios';


export default function Profile() {
    const login_details = useSelector((state) => state.userReducer.data);
    console.log('profile', login_details);
    const [updatename, setUpdateName] = useState(login_details.data[0].items.name);
    const [updatemail, setUpdateEmail] = useState(login_details.data[0].items.email);
    const [showResults, setShowResults] = useState(false);


    console.log("Edit User Profile");

    const [disabled, setDisabled] = useState(true);
    function handleGameClick() {
        setDisabled(false);
        setShowResults(true);
    }
    function handlename(e) {
        setUpdateName(e.target.value);
    }
    function handlemail(e) {
        setUpdateEmail(e.target.value);
    }
    function handlesave() {
        setDisabled(true);
        setShowResults(false);
        const items = {
            "items": {
                name: updatename,
                email: updatemail,
                password: "reddy"
            },
            "id": login_details.data[0].id
        };
        axios.put(`http://localhost:3008/test/${login_details.data[0].id}`, items)
            .then(response =>
                this.setState({ updatedAt: response.data.updatedAt })
            )
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });

    }


    return (
        <>
            <Header/>
            <div className='user-profile'>
                <span >
                    <h4 className=''>Personal Information
                        <span>
                            {showResults ?
                                <button type='submit' onClick={handlesave} className='button-link'> save </button>
                                :
                                <button onClick={handleGameClick} className='button-link'>Edit</button>
                            }</span></h4>
                </span>
                <h6 className='user-title'>Name</h6>
                <input
                    className='typing-container'
                    placeholder=' type here '
                    disabled={disabled}
                    value={updatename}
                    onChange={handlename}
                />

                <h6 className='user-title'>Email</h6>
                <input
                    className='typing-container'
                    placeholder=' type here '
                    disabled={disabled}
                    value={updatemail}
                    onChange={handlemail}
                />
            </div>

        </>
    )
}