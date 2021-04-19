import Users from '../../components/users';
import {UsersList} from '../../data/userslist';
function UsersPage(){
    return (
        <div>
            <ul>{
             UsersList.data.map(users => {
               return (<Users key={users.uuid} firstname={users.firstname} lastname={users.lastname}/>)
             }
             )}
            </ul>
        </div>
    );
}

 export default UsersPage;