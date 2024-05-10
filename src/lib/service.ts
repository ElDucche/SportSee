const userId = 18

/* retrieves information from a user.
 This first endpoint includes the user id, user information (first name, last name and age),
the current day's score (todayScore) and key data (calorie, macronutrient, etc.). */

export const getUserInfos = async () => {
    const response = await fetch(`http://localhost:3000/user/${userId}`).then(response => response.json());
    return response.data;
}

/*
retrieves a user's activity day by day with kilograms and calories.
*/

export const getUserActivity = async () => {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`).then(response => response.json());
    return response.data;
}

/*
retrieves the average sessions of a user per day. The week starts on Monday.
*/

export const getUserAverageSessions = async () => {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`).then(response => response.json());
    return response.data;
}

/* retrieves a user's performance (energy, endurance, etc.) */
export const getUserPerformance = async () => {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`).then(response => response.json());
    return response.data;
}