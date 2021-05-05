import {ExpansesListItem} from './ExpansesListItem';

export const Expanseslist=({data})=>{

    return (
        <ol className="list-group list-group-numbered">
        { data.map((item) => {       
         return  <ExpansesListItem item={item} key={item.id}/>      
        })}
             
    </ol>
    );
};