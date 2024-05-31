// typing.d.ts

// Définition du type pour l'objet user
export type UserInfos = {
    firstName: string;
    lastName: string;
    age: number;
};

type User = {
    id: number;
    userInfos: UserInfos;
    todayScore: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    };
};

// Définition du type pour l'objet session

type AvgSession = {
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[];
};

// Définition du type pour l'objet activity
type Activity = {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
};

// Définition du type pour l'objet performance

type Performance = {
    userId: number;
    kind: Record<number, string>;
    data: {
        value: number;
        kind: number;
    }[];
};

// Exportation des types
export type { User, AvgSession, Activity, Performance };