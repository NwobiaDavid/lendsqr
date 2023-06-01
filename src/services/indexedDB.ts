const STORE_NAME = 'users';

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

export async function saveUsersToLocal(users: User[]): Promise<void> {
  try {
    localStorage.setItem(STORE_NAME, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users to Local Storage:', error);
    throw error;
  }
}

export async function getUsersFromLocal(): Promise<User[]> {
  try {
    const usersData = localStorage.getItem(STORE_NAME);
    if (usersData) {
      return JSON.parse(usersData);
    }
    return [];
  } catch (error) {
    console.error('Error retrieving users from Local Storage:', error);
    throw error;
  }
}
