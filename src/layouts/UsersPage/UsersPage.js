import Users from '../../components/users';
import {UsersList} from '../../data/userslist';

function UsersPage(){
    return (
        <div>
            <div className="row">{
             UsersList.data.map(users => {
               return (<Users key={users.uuid} firstname={users.firstname} lastname={users.lastname} />)
             }
             )}
            </div>
        </div>
    );
}

 export default UsersPage;