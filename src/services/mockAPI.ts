import axios from 'axios';

const API_URL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1';

export interface User {
  id: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
}

export async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    const users = response.data;

    // Log the retrieved user data
    console.log('Retrieved users:', users);

    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}
