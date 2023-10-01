import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
          id: 'u1', 
          name: 'Dariel Guerra', 
          image: 'https://media.licdn.com/dms/image/D4E03AQG965hZUiBBqQ/profile-displayphoto-shrink_800_800/0/1693777400667?e=1700697600&v=beta&t=h4mA5_yh448eSCfFLnULoFYRlxu1itvYmUk7SF_wQ9Y',
          places: 3
        },
        {
          id: 'u2', 
          name: 'Matt Carter', 
          image: 'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.6435-9/32332338_10216211429300432_6973249034236461056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L6uchjiLIZEAX_Gn90j&_nc_ht=scontent.ftpa1-1.fna&oh=00_AfD9H378rblawFINAI9AXjVOlSKb95rxiZHjdLUAe0wFOw&oe=6536ACCD',
          places: 2
        },
        {
          id: 'u3', 
          name: 'Leo Ramirez', 
          image: 'https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/30441077_10155524318478364_782959751943159808_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=0vyLZLju7egAX9QktFj&_nc_ht=scontent-ams2-1.xx&oh=00_AfD7_RTyCvZ7m7yMbmSzk7cDchu9-SE-GRXGczzwc_rvPw&oe=6537BC02',
          places: 1
        }
    ]

    return <UsersList items={USERS}/>
};

export default Users;