import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './data';

const userId = 18;

export const getUserInfos = async () => {
    // Simule une réponse de l'API
    return Promise.resolve(USER_MAIN_DATA.find(user => user.id === userId));
}

export const getUserActivity = async () => {
    // Simule une réponse de l'API
    return Promise.resolve(USER_ACTIVITY.find(activity => activity.userId === userId));
}

export const getUserAverageSessions = async () => {
    // Simule une réponse de l'API
    return Promise.resolve(USER_AVERAGE_SESSIONS.find(session => session.userId === userId));
}

/* retrieves a user's performance (energy, endurance, etc.) */
export const getUserPerformance = async () => {
    return Promise.resolve(USER_PERFORMANCE.find(perf => perf.userId === userId));
}