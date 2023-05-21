 


import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar:'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
    


    ,
    {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
  ];
}