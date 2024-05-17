import { User, AvgSession, Activity, Performance } from '../../types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } = require('./data');

const userId: number = 18;

export const getUserInfos = async () => {
    // Simule une réponse de l'API
    return Promise.resolve(USER_MAIN_DATA.find((user: User) => user.id === userId));
}

export const getUserActivity = async () => {
    // Simule une réponse de l'API
    return Promise.resolve(USER_ACTIVITY.find((activity: Activity) => activity.userId === userId));
}

export const getUserAverageSessions = async () => {
    // Simule une réponse de l'API
    return Promise.resolve(USER_AVERAGE_SESSIONS.find((session: AvgSession) => session.userId === userId));
}

/* retrieves a user's performance (energy, endurance, etc.) */
export const getUserPerformance = async () => {
    return Promise.resolve(USER_PERFORMANCE.find((perf: Performance) => perf.userId === userId));
}