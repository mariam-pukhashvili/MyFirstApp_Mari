import {UsersList} from '../../data/userslist';

const GetUsersList = ({firstname, lastname}) => {
     return (<li >{firstname} {lastname}</li>);
            
}
function UsersPage(){
    return (
        <div>
            <ul>{
             UsersList.data.map(users => {
               return (<GetUsersList key={users.uuid} firstname={users.firstname} lastname={users.lastname}/>)
             }
             )}
            </ul>
        </div>
    );
}

 export default UsersPage;