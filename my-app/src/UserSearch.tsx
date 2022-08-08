import { useState} from 'react';

const users = [
    {name: "Sarah", age: 20},
    {name: 'Alex', age: 20},
    {name: 'Michel', age: 20}
];

type User = {
    name: string,
    age: number
}
const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<User | undefined>()
    const onClick = () => {
        const foundUser = users.find((user) => user.name === name);
        // if(user) {
        //     setUser([...user, ])
        // }
        console.log(foundUser);
        setUser(foundUser);
    }
    return (
    <div>
        UserSearch
        <input value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={onClick}>Find user</button>
        <div>{user ? user.name : 'user not found'}</div>
    </div>)

}

export default UserSearch;