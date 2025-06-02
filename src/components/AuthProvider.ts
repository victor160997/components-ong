import {
    createContext, useContext, useEffect, useState, ReactNode, useMemo
} from 'react';
import {
    User as FirebaseUser,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { User } from '@/types/user';

interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const firebaseUserToUser = (firebaseUser: FirebaseUser): User => ({
        id: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName
    });

    const signIn = async (email: string, password: string) =>
        signInWithEmailAndPassword(auth, email, password);

    const signUp = async (email: string, password: string) =>
        createUserWithEmailAndPassword(auth, email, password);

    const signOut = async () => {
        await firebaseSignOut(auth);
        setCurrentUser(null);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user ? firebaseUserToUser(user) : null);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = useMemo(() => ({ currentUser, loading, signIn, signUp, signOut }), [currentUser, loading]);

    return (
        <AuthContext.Provider value= { value } >
        {!loading && children
}
</AuthContext.Provider>
  );
};
