import { useState } from 'react';
import Auth from "../services/auth";

const auth = new Auth();

function useAuth() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    async function login(phoneNumber: string, password: string) {
        try {
            const success = await auth.login(phoneNumber, password);
            setLoggedIn(success);
            return success;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async function register(firstName: string, lastName: string, password: string, phoneNumber: string) {
        try {
            const success = await auth.register(firstName, lastName, password, phoneNumber);
            setLoggedIn(success);
            return success;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async function logout() {
        try {
            await auth.logout();
            setLoggedIn(false);
        } catch (error) {
            console.error(error);
        }
    }

    async function confirmNumber(phoneNumber: string) {
        try {
            const success = await auth.confirmNumber(phoneNumber);
            return success;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async function verify(code: string, phoneNumber: string) {
        try {
            const success = await auth.verify(code, phoneNumber);
            setLoggedIn(success);
            return success;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    return { loggedIn, login, register, logout, confirmNumber, verify };
}

export default useAuth;
