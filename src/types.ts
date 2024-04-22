export interface User {
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
    };
  }
  
  export interface UsersResponse {
    results: User[];
    info: {
      page: number;
      searchQuery?: string;
    };
  }